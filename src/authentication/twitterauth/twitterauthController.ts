import express from 'express';

import { twitterAuth, twitterUrl } from './twitterauthService';

const router = express.Router();

router.get('/', twitterUrl);

router.get('/callback', twitterAuth);

export default router; 