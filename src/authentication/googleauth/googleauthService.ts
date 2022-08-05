import { Request, Response } from "express";
import { google } from "googleapis";
import dotenv from 'dotenv';

dotenv.config();


const oauth2cllient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

const redirectUrl =  oauth2cllient.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['email', 'profile']
});

let auth = false;
export const googleSignin = async (req: Request, res: Response) => {
    const oauth2 = google.oauth2({version: 'v2', auth: oauth2cllient});
    if(auth){
        const userInfo = await oauth2.userinfo.v2.me.get();
        res.json(userInfo.data);

    }else {
        res.json({url: redirectUrl});
    }
}

export const googleToken = async (req: Request, res: Response) => {
    const code = req.query?.code as string | undefined;

    if (code) {
        const { tokens } = await oauth2cllient.getToken(code);
        oauth2cllient.setCredentials(tokens);
        auth = true;
    }

    res.redirect('/googleauth');

}