import PasswordValidator from "password-validator"

var schema = new PasswordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                             // Must have at least 1 uppercase letter
    .has().lowercase(1)                             // Must have at least 1 lowercase letter
    .has().digits(1)                                // Must have at least 1 digit
    .has().symbols(1)                                // Must have at least 1 special Character
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
1
export default function TextValidators(e) {
    let { name, value } = e.target
    switch (name) {
        case 'name':
        case 'icon':
        case 'city':
        case 'username':
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (value.length < 2 || value.length > 100)
                return name + ' Field Length Must Be 2-100 Charectors'
            else
                return ''

        case 'registrationNumber':
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (value.length < 10 || value.length > 20)
                return name + ' Field Length Must Be 10 - 20 Charectors'
            else
                return ''

        case 'baseRentAmount':
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (parseInt(value) < 1)
                return name + ' Rent Amount Must Be Greter Then 0'
            else
                return ''

        case 'discount':
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (parseInt(value) < 1 || parseInt(value) > 100)
                return name + ' Discount Must Be 1% - 100%'
            else
                return ''

        case 'shortDescrition':
        case 'answer':
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (value.length < 50)
                return name + ' Field Length Must Be 50 Charectors or More'
            else
                return ''

        case 'question':
        case 'address':
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (value.length < 20)
                return name + ' Field Length Must Be 20 Charectors or More'
            else
                return ''

        case 'email':
            if (!value || value.length === 0)
                return name + " Field Is Mendatory"
            else if (value.length < 13 || value.length > 100)
                return name + " Field Length Must Be 13-100 Characters"
            else
                return ""

        case 'phone':
            if (!value || value.length === 0)
                return name + " Field Is Mendatory"
            else if (value.length < 10 || value.length > 10)
                return name + " Field Length Must Be 10"
            else if (!["6", "7", "8", "9"].includes(value[0]))
                return "Invalid Phone Number, Please Make Sure First Digit Must Be 6,7,8 or 9"
            else
                return ""

        case 'password':
            if (!value || value.length === 0)
                return name + " Field Is Mendatory"
            else if (!schema.validate(value))
                return schema.validate(value, { details: true }).map(x => x.replaceAll("string", "password")).join(". ")
            else
                return ""

        default:
            return ''
    }
}
