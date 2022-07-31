import { body, param, query } from "express-validator";

class UserValidator {
    checkCreateUser() {
        return [
            body('firstName')
                .notEmpty()
                .withMessage('First Name should not be empty'),
            body('lastName')
                .notEmpty()
                .withMessage('Last Name should not be empty'),
            body('email')
                .isEmail()
                .withMessage('Provide a valid email address'),
            body('password')
                .isLength({ min: 5 })
                .withMessage('Minimum Password length is 5'),
        ];
    }

    checkGetUsers() {
        return [
            query('limit')
                .notEmpty()
                .withMessage('Limit query should not be empty')
                .isInt({min: 1, max: 20})
                .withMessage('The limit should be between 1 - 20'),
            query('offset')
                .optional()
                .isNumeric()
                .withMessage("The value should be number"),
        ];
    }

    checkIdParam(){
        return [
            param('id')
                .notEmpty()
                .withMessage('Id param should not be empty')
                .isNumeric()
                .withMessage("Id param value should be number"),
        ]
    }
}

export default new UserValidator();