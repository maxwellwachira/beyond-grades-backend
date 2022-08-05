import { Request, Response } from 'express';
import { TwitterApi } from 'twitter-api-v2';

import dotenv from 'dotenv';

dotenv.config();

const CLIENT_ID = process.env.TWITTER_CLIENT_ID as string;
const CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET;
const CALLBACK_URL = process.env.TWITTER_CALLBACK_URL as string;


const client = new TwitterApi({ clientId: CLIENT_ID, clientSecret:  CLIENT_SECRET});

const { url, codeVerifier, state: sessionState } = client.generateOAuth2AuthLink(
    CALLBACK_URL, 
    { scope: ['tweet.read', 'users.read', 'offline.access'] }
);

//Return Twitter Oauth URL
export const twitterUrl = async (req: Request, res: Response) => {
    res.json({url})
}


//Authenticate user
export const twitterAuth = async (req: Request, res: Response) => {
    const state  = req.query.state;
    const code = req.query.code as string;
    
    if (!codeVerifier || !state || !sessionState || !code) {
        return res.status(400).send('You denied the app or your session expired!');
    }

    if (state !== sessionState) {
        return res.status(400).send('Stored tokens didnt match!');
    }

    client.loginWithOAuth2({ code, codeVerifier, redirectUri: CALLBACK_URL })
    .then(async ({ client: loggedClient, accessToken, refreshToken, expiresIn }) => {
    
      const { data: userObject } = await loggedClient.v2.me();
    
    //   console.log('user', userObject)
    //   console.log('access token', accessToken);
    //   console.log('refresh token', refreshToken);
    //   console.log('expires', expiresIn);

      res.status(200).json(userObject);
    })
    .catch(() => res.status(403).send('Invalid verifier or access tokens!'));
    
}
