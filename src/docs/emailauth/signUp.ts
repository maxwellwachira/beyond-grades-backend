export const signUp = {
    post: {
        tags: ["Email Auth"], // operation's tag
        description: "Register User", // short desc
        operationId: "registerUser", // unique operation id
        summary: "register user",
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