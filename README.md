# Basic Information Form

This is a simple HTML form that collects basic information from the user and stores it in the browser's local storage.

## Files

* **form.html:** This file contains the HTML structure of the form.
* **form.css:** This file contains the CSS styles for the form.
* **form.js:** This file contains the JavaScript code that handles form submission, validation, and data storage.

## Functionality

1. **Form Fields:**
    - Name (text input)
    - Date of Birth (date input)
    - Age (dropdown select with predefined ranges)
    - Email (email input)
    - Password (password input with a minimum length requirement of 8 characters)
    - Phone Number (tel input with a pattern for 10 digits)
    - Address (text input)

2. **Validation:**
    - The form includes JavaScript validation to ensure all fields are filled.
    - Phone number validation checks for exactly 10 digits.
    - Password validation enforces a minimum length of 8 characters.

3. **Local Storage:**
    - Upon successful validation, the form data is stored in the browser's local storage using the following keys:
        - `fullName`
        - `dateOfBirth`
        - `age`
        - `email`
        - `password`
        - `phone`
        - `address`

4. **Submission Handling:**
    - After storing the data, the form displays a success message to the user.
    - The form fields are then cleared to allow for new entries.

## How to Use

1. Simply open the `form.html` file in your web browser.
2. Fill out the required fields in the form.
3. Click the "Submit" button.
4. If the form is validated successfully, your data will be stored in local storage, and a success message will be displayed.

## Styling

The form is styled using CSS to provide a user-friendly and visually appealing interface. It is responsive and adapts to different screen sizes.

## Note

This form is for demonstration purposes only and does not include any server-side processing or database integration. Data stored in local storage is specific to the user's browser and device.
