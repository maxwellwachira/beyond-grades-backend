export const updateUser = {
  // operation's method
  put: {
    tags: ["User CRUD operations"], // operation's tag
    description: "Update User", // short desc
    operationId: "updateUser", // unique operation id
    summary: "Update user",
    parameters: [
      // expected params
      {
        name: "id", // name of param
        in: "path", // location of param
        schema: {
          $ref: "#/components/schemas/id", // id model
        },
        required: true, // mandatory
        description: "Id of user to be updated", // short desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "User updated successfully", // response desc.
      },
      // response code
      404: {
        description: "User not found", // response desc.
      },
      // response code
      500: {
        description: "Server error", // response desc.
      },
    },
  },
};