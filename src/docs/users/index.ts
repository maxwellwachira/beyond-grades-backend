import { createUser } from "./createUser";
import { deleteUser } from "./deleteUser";
import { getUser } from "./getUser";
import { getUsers } from "./getUsers";
import { updateUser } from "./updateUser";

export const userPaths = {
    '/users': {
        ...getUsers,
        ...createUser
    },
    '/users/{id}': {
        ...getUser,
        ...updateUser,
        ...deleteUser
    }
}