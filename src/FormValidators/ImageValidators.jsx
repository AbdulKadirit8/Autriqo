export default function ImageValidators(e) {
    if (e.target.files.length === 1) {
        let pic = e.target.files[0]
        if (!["image/jpg", "image/jpeg", "image/png", "image/gif", "image/webp"].includes(pic.type))
            return 'Pic Is Not Valid .Pease Upload An Image Of type .jpg, .jpeg, .png, .gif, .webp'
        else if (pic.size > 1048576)
            return 'Pic Is To Heavy. PLease Upload An Image Upto 1 MB'
        else
            return ''
    }
    else {
        return ''
    }
}
