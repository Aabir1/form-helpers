# Notesgen Helper

this package contain all type of validations

# Usage
```
import NotesgenValidation from 'notesgen-validation';


const result = NotesgenValidation.isNumber(123123);

// use this function to validate the complete form.
validate = () => {
    let errors = {}
    let isValid = true;

    if (NotesgenValidation.isEmpty(this.state.model.link)) {
        errors.link = "link field cannot be empty."
        isValid = false
    } else if (!NotesgenValidation.isUrl(this.state.model.link)) {
        errors.link = "Please enter valid url."
        isValid = false
    }

    if (NotesgenValidation.isEmpty(this.state.model.title)) {
        errors.title = "Title field cannot be empty."
        isValid = false
    } else if (NotesgenValidation.isNumber(this.state.model.title)) {
        errors.title = "Numbers are not allowed in title field."
        isValid = false
    }

    if (!NotesgenValidation.isImage(file)) {
        errors.image = 'Please select valid image.';
        result = false;
    } else if (!NotesgenValidation.isValidImageSize(file)) {
        errors.image = 'Image should not be greater than 2MB.';
        result = false;
    }

    this.setState({ errors: errors })
    return isValid;
}

submitForm = async () => {
    if (this.validate()) {
        // you api call
        //whatever you wanna do after validation
    }
}
```


it is a basic validator if any validator is missing, let us know on 