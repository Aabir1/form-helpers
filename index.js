let ValidationHelper = {};

ValidationHelper.DEFAULT_ALLOWED_IMAGE_EXT = [
    'image/gif', 'image/jpeg', 'image/png', 'image/jpg'
];
ValidationHelper.DEFAULT_MAX_FILE_SIZE = 2; //in mb


ValidationHelper.isEmpty = (field, isDateField = false) => {
    let result = true;

    try {
        if (field && field.trim().length) {
            if (isDateField) {
                if (field !== 'Invalid date') {
                    result = false;
                }
            } else {
                result = false;
            }
        }
    } catch (error) {
        if (field) {
            result = false;
        }
    }

    return result;
}

ValidationHelper.minMaxLen = (field, min = 2, max = 256) => {
    let result = false;

    if (field) {
        if (field.length >= min && field.length <= max) {
            result = true;
        }
    }

    return result;
}

//validate weather value contains number
ValidationHelper.containsNumber = (field) => {
    let result = false;
    if (field.match(/\d+/)) {
        result = true;
    }
    return result;
}
//validate weather value contains uppercase
ValidationHelper.containsUpperCase = (field) => {
    let result = false;
    if (field.match(/[A-Z]/)) {
        result = true;
    }
    return result;
}
//check weather value only contains numbers
ValidationHelper.isNumber = (field) => {
    let result = true;
    if (isNaN(field)) {
        result = false;
    }
    return result;
}

//validate weather value contains special characters
ValidationHelper.containsSpecialCharacters = (field) => {
    let result = false;
    if (!field.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/)) {
        result = true;
    }
    return result;
}


ValidationHelper.isEmail = (email) => {
    let result = false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && re.test(String(email).toLowerCase())) {
        result = true;
    }
    return result;
}

ValidationHelper.isPhone = (phone) => {
    let result = false;
    if (phone && phone.match(/^\d{8,14}$/)) {
        result = true;
    }
    return result;
}

ValidationHelper.isUrl = (string) => {
    if (string && (string.includes('http://') || string.includes('')))
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?', 'i'); // fragment locator
    let result = !!pattern.test(string);

    let url = '';
    if (result) {
        try {
            url = new URL(string);
            result = url.protocol === "http:" || url.protocol === "https:";
        } catch (_) {
            result = false;
        }
    }

    return result;
}

ValidationHelper.getYoutubeUrl = (url) => {
    let result = false;

    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            result = 'https://www.youtube.com/embed/' + match[2];
        }
    }

    return result;
}

ValidationHelper.isImage = (file, allowedImgExt = ValidationHelper.DEFAULT_ALLOWED_IMAGE_EXT) => {
    let result = false;
    const fileType = (file && file['type']) ? file['type'] : false;

    if (allowedImgExt.includes(fileType)) {
        result = true;
    }

    return result;
}

ValidationHelper.isValidImageSize = (file, size = ValidationHelper.DEFAULT_MAX_FILE_SIZE) => {
    let result = true;
    const currentImageSize = (file) ? parseFloat(file.size / 1024 / 1024).toFixed(2) : 0;

    if (currentImageSize > size) {
        result = false;
    }

    return result;
}


/**
 * @param {object} file
 *
 * @returns {boolean} result
 *
 * @author Gaurav Goyal <gaurav043goyal@gmail.com>
 *
 * @comment This function validate the file with following extensions.
 */
ValidationHelper.isDoc = (file) => {
 
    let result = false;
    const AcceptedFileTypes = ["pdf", 'doc', "docx", 'ppt', 'pptx']

    let ext = file.name.split(".").slice(-1).pop().toLowerCase();

    if (AcceptedFileTypes.includes(ext.toLowerCase())) {
        result = true;
    }
    return result;

}


/**
 * @param {object} file
 *
 * @returns {boolean} result
 *
 * @author Gaurav Goyal <gaurav043goyal@gmail.com>
 *
 * @comment This function validate the size of document file.
 */
ValidationHelper.isValidDocSize = (file) => {
    let result = false;
    if (file.size / 1024 / 1024 < 25) {
        result = true;
    }
    return result;
}

module.exports = ValidationHelper;