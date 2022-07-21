// Write your form validation code here
$(function() {
    $("form[name='basic-form']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        
        messages: {
            firstname: "Please include your first name.",
            lastname: "Please include your last name.",
            email: "Please enter a valid email.",
            phone: "Please enter a valid phone number.",
            password: {
                required: "Please enter a password.",
                minlength: "Password must have at least 8 characters.",
                maxlength: "Password can not exceed 16 characters."
            },
            message: {
                required: "Please enter a brief message.",
                minlength: "Message must be at least 10 characters."
            }
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
});