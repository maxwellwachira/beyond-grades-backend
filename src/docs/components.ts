export const components = {
    components: {
        schemas: {
          // id model
          id: {
            type:"number",
            description: "User id", 
            example: 4         
          },
          //User Model
          User: {
            type: "object", 
            properties: {
              id: {
                type:"number",
                description: "User id", 
                example: 4         
              },
                firstName: {
                    type: "string",
                    example: "John"
                },
                lastName: {
                    type: "string",
                    example: "Doe"
                },
                email: {
                    type: "string",
                    example: "johndoe@mail.com"
                },
                password: {
                    type: "string",
                    format: "password",
                    example: "strongpassword"
                }
            },
          },
          //UserInput Model
          UserInput: {
            type: "object", 
            properties: {
                firstName: {
                    type: "string",
                    example: "John"
                },
                lastName: {
                    type: "string",
                    example: "Doe"
                },
                email: {
                    type: "string",
                    example: "johndoe@mail.com"
                },
                password: {
                    type: "string",
                    format: "password",
                    example: "strongpassword"
                }
            },
          },

          //UserInput Model
          UserLogin: {
            type: "object", 
            properties: {
                email: {
                    type: "string",
                    example: "johndoe@mail.com"
                },
                password: {
                    type: "string",
                    format: "password",
                    example: "strongpassword"
                }
            },
          },

          // error model
          GeneralError: {
            type: "object",
            properties: {
              code: {
                type: "integer",
                format: "int32"
              },
              message: {
                type: "string"
              }
            }
          }
        },
    


      },
}