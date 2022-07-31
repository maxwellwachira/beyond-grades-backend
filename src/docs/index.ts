import { basiciInfo } from "./basicInfo";
import { components } from "./components";
import { servers } from "./servers";
import { tags } from "./tags";
import { userPaths } from "./users";

export const swaggerOptions = {
    ...basiciInfo,
    ...servers,
    ...components,
    ...tags,
    ...userPaths
};