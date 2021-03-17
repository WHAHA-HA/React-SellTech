export const CheckoutFormConfig = {
    name: {
        label: 'Name:',
        elementType: 'input',
        elementConfig: {
            name: 'name',
            type: 'text',
            placeholder: 'Your Name',
            value: ''
        },
        valid: true,
        validityMessage: 'This value is required!',
        validatingRules: {
            required: true,
        }            
    },

    email: {
        label: 'Email:',
        elementType: 'input',
        elementConfig: {
            name: 'email',
            type: 'email',
            placeholder: 'Your Email',
            value: ''
        },
        valid: true,
        validityMessage: 'This value is required and should be a valid email!',
        validatingRules: {
            required: true,
            isEmail: true,
        }
    },

    house: {
        label: 'House #:',
        elementType: 'input',
        elementConfig: {
            name: 'house',
            type: 'text',
            placeholder: 'Your House no',
            value: ''
        },
        valid: true,
        validityMessage: 'This value is required!',
        validatingRules: {
            required: true,
        }
    },

    street: {
        label: 'Street:',
        elementType: 'input',
        elementConfig: {
            name: 'street',
            type: 'text',
            placeholder: 'Your Street',
            value: ''
        },
        valid: true,
        validityMessage: 'This value is required!',
        validatingRules: {
            required: true,
        }
    },

    zipcode: {
        label: 'Zip Code:',
        elementType: 'input',
        elementConfig: {
            name: 'zipcode',
            type: 'text',
            placeholder: 'Your Zip Code',
            value: ''
        },
        valid: true,
        validityMessage: 'This value is required and the code must be 5 digits long!',
        validatingRules: {
            required: true,
            maxLength: 5,
            minLength: 5,
        }
    },
    
    deliveryMethod: {
        label: 'Delivery Method:',
        elementType: 'select',
        elementConfig: {
            name: 'deliveryMethod',
            value: 'fastest'
        },
        options: {
            'Fastest': 'fastest',
            'Normal': 'normal',
            'Cheapest': 'cheapest'
        },
        valid: true,
        validityMessage: '',
        validatingRules: {}
    }
}