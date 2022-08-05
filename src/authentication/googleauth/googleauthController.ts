import express from 'express';

import { googleSignin, googleToken } from './googleauthService';

const router = express.Router();

router.get('/', googleSignin);

router.get('/callback', googleToken);

export default router;  