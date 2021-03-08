export const authFormConfig = {
    email: {
        label: 'Email:',
        elementType: 'input',
        elementConfig: {
            name: 'email',
            type: 'email',
            placeholder: 'Email Address',
            value: ''
        },
        valid: true,
        validityMessage: 'This value is required and must be a valid email!',
        validatingRules: {
            required: true,
            isEmail: true
        }
    },

    password: {
        label: 'Password:',
        elementType: 'input',
        elementConfig: {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            value: ''
        },
        valid: true,
        validityMessage: 'This value is required and minimum length must be 8!',
        validatingRules: {
            required: true,
            minLength: 8
        }
    }
}