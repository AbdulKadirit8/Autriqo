export default function TextValidators(e) {
    let { name, value } = e.target
    switch (name) {
        case 'name':
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (value.length < 2 || value.length > 100)
                return name + ' Field Length Must Be 2-100 Charectors'
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
            if (!value || value.length === 0)
                return name + ' Field Is Mendatory'
            else if (value.length < 20)
                return name + ' Field Length Must Be 20 Charectors or More'
            else
                return ''
        default:
            return ''
    }
}
