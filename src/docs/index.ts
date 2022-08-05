import { basiciInfo } from "./basicInfo";
import { components } from "./components";
import { servers } from "./servers";
import { userPaths } from "./users";
import { authPaths } from "./emailauth";

export const swaggerOptions = {
    ...basiciInfo,
    ...servers,
    ...components,
    paths:{
        ...authPaths,
        ...userPaths,
    }
};