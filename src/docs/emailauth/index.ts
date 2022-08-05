import { signIn } from "./signIn";
import { signUp } from "./signUp";

export const authPaths = {
    '/auth/sign-in': {
        ...signIn
    },
    '/auth/sign-up':{
        ...signUp
    }
}