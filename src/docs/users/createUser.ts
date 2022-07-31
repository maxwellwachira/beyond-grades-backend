export const createUser = {
    post: {
        tags: ["User CRUD operations"], // operation's tag
        description: "Create User", // short desc
        operationId: "createUser", // unique operation id
        summary: "create user",
        parameters: [], // expected params
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserInput", // todo input data model
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          201: {
            description: "User created successfully", // response desc
          },
          // response code
          500: {
            description: "Server error", // response desc
          },
        },
      },
};