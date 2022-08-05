export const signIn = {
    post: {
        tags: ["Email Auth"], // operation's tag
        description: "User Login", // short desc
        operationId: "userLogin", // unique operation id
        summary: "user login",
        parameters: [], // expected params
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserLogin", // 
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          200: {
            description: "User authenticated successfully", // response desc
          },
          // response code
          500: {
            description: "Server error", // response desc
          },
        },
      },
};