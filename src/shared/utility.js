export const validateForm = (form) => {
    var valid = true;
    for (let k in form)
        valid = valid && form[k].valid

    return valid
}

export const validateField = (value, validatingRules) => {
    var isValid = true;
    
    if (validatingRules.required) 
        isValid = (value !== "") && isValid
    if (validatingRules.maxLength)
        isValid = (value.length <= validatingRules.maxLength) && isValid
    if (validatingRules.minLength)
        isValid = (value.length >= validatingRules.minLength) && isValid
    if (validatingRules.isEmail) {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value.toLowerCase()) && isValid
    }

    return isValid
}