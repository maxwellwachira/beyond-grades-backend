import { body } from "express-validator";

class authValidator {
    checkSignUp() {
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

    checkSignIn() {
        return [
            body('email')
                .isEmail()
                .withMessage('Provide a valid email address'),
            body('password')
                .isLength({ min: 5 })
                .withMessage('Minimum Password length is 5'),
        ];
    }
}

export default new authValidator();