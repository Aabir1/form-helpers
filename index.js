/**
 * Notesgen Validation contains all possible validations
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
let NotesgenValidation = {};

/**
 * default allowed images
 */
NotesgenValidation.DEFAULT_ALLOWED_IMAGE_EXT = [
    'image/gif', 'image/jpeg', 'image/png', 'image/jpg'
];

/**
 * default max allowed size
 */
NotesgenValidation.DEFAULT_MAX_FILE_SIZE = 2; //in mb

/**
 * Check weather a field is empty or not
 *
 * @param {*} field 
 * @param {boolean} isDateField 
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.isEmpty = (field, isDateField = false) => {
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

/**
 * Check minimum and maximum length of a field
 *
 * @param {*} field 
 * @param {Number} min 
 * @param {Number} max 
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.minMaxLen = (field, min = 2, max = 256) => {
    let result = false;

    if (field) {
        if (field.length >= min && field.length <= max) {
            result = true;
        }
    }

    return result;
}

/**
 * Validate weather value contains number
 *
 * @param {String} field
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.containsNumber = (field) => {
    let result = false;
    if (field.match(/\d+/)) {
        result = true;
    }
    return result;
}

/**
 * Validate weather value contains uppercase
 *
 * @param {String} field
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.containsUpperCase = (field) => {
    let result = false;
    if (field.match(/[A-Z]/)) {
        result = true;
    }
    return result;
}

/**
 * Validate weather value only contains numbers
 *
 * @param {String} field
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.isNumber = (field) => {
    let result = true;
    if (isNaN(field)) {
        result = false;
    }
    return result;
}

/**
 * Validate weather value contains special characters
 *
 * @param {String} field
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.containsSpecialCharacters = (field) => {
    let result = false;
    if (!field.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/)) {
        result = true;
    }
    return result;
}

/**
 * Validate weather value is email or not
 *
 * @param {String} email
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.isEmail = (email) => {
    let result = false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && re.test(String(email).toLowerCase())) {
        result = true;
    }
    return result;
}

/**
 * Validate weather value is phone or not
 *
 * @param {String} phone
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.isPhone = (phone, OPTIONS = { min: 8, max: 14 }) => {
    let result = false;
    if (phone && phone.match(/^\d{8,14}$/)) {
        result = true;
    }
    return result;
}

/**
 * Validate weather value is url or not
 *
 * @param {String} string
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.isUrl = (string) => {
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

/**
 * Validate weather value is file or not
 *
 * @param {File} file
 * @param {Array} allowedImgExt [ check NotesgenValidation.DEFAULT_ALLOWED_IMAGE_EXT ]
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.isFile = (file, allowedImgExt = NotesgenValidation.DEFAULT_ALLOWED_IMAGE_EXT) => {
    let result = false;
    const fileType = (file && file['type']) ? file['type'] : false;

    if (allowedImgExt.includes(fileType)) {
        result = true;
    }

    return result;
}

/**
 * Validate weather value is image or not
 *
 * @param {File} file
 * @param {Integer} size [ in mb check NotesgenValidation.DEFAULT_MAX_FILE_SIZE ]
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
NotesgenValidation.isValidFileSize = (file, size = NotesgenValidation.DEFAULT_MAX_FILE_SIZE) => {
    let result = true;
    const currentImageSize = (file) ? parseFloat(file.size / 1024 / 1024).toFixed(2) : 0;

    if (currentImageSize > size) {
        result = false;
    }

    return result;
}

/**
 * Validate Password should be at 
 * least 8 characters 
 * with at least 1 Upper case, 
 * 1 lower case, 1 number and 
 * 1 special character.
 *
 * @param {String|Number} password
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ValidationHelper.isValidPassword = (password) => {
    let result = false;
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,256}$/;

    if (regex.test(password)) {
        result = true;
    }

    return result;
}

module.exports = NotesgenValidation;