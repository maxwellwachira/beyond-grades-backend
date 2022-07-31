export const getUser = {
    get: {
        tags: ["User CRUD operations"],
        description: "Get one users", // operation's desc.
        operationId: "getUser", // unique operation id.
        summary: "Get one user",
        parameters: [

        ], // expected params.
        // expected responses
        responses: {
          // response code
          200: {
            description: "Success", 
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          // response code
          404: {
            description: "User not found", // response desc.
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GeneralError", // error data model
                },
              },
            },
          },
        },
    },
};