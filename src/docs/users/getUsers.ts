export const getUsers = {
    get: {
        tags: ["User CRUD operations"], // operation's tag.
        description: "Get all users", // operation's desc.
        operationId: "getUsers", // unique operation id.
        summary: "Get all users",
        parameters: [], // expected params.
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
        },
    },
};