function submitForm(event) {
    event.preventDefault(); // Prevents default (refreshing page on submit)
    let formOutput = document.getElementById("formOutput");

    let textInput = document.getElementById("textInput");   // Gets the element with ID "textInput"
    let textInputValue = textInput.value;                   // Gets the text inside textInput
    let textInputValueLower = textInputValue.toLowerCase(); // Gets the lower case version of the text inside textInput
    let tiValueTrimmed = textInputValueLower.trim();        // Trims leading and trailing white from the lower case version of text inside textInput
    
    let numberInput = document.getElementById("numberInput");   // Get the element with ID "numberInput"
    let numberInputValue = numberInput.value;

    if (tiValueTrimmed == "test" && numberInputValue % 5 == 0) {
        formOutput.innerText = textInputValue;
    }
    else if ( (tiValueTrimmed == "hi" || tiValueTrimmed == "hello") && numberInputValue % 5 == 0) {
        formOutput.innerText = "Hello!";
    }
    else {
        formOutput.innerText = "Error: \"" + textInputValue + "\" is an invalid option";
    } 
}

/* Demonstrates how nested if statements could be used
 * instead of using logical operators (&& (AND) and || (OR)).
 * Should generally be avoided as it results in more code
 */
function submitFormNested(event) {
    event.preventDefault(); // Prevents default (refreshing page on submit)
    let formOutput = document.getElementById("formOutput");

    let textInput = document.getElementById("textInput");   // Gets the element with ID "textInput"
    let textInputValue = textInput.value;                   // Gets the text inside textInput
    let textInputValueLower = textInputValue.toLowerCase(); // Gets the lower case version of the text inside textInput
    let tiValueTrimmed = textInputValueLower.trim();        // Trims leading and trailing white from the lower case version of text inside textInput
    
    let numberInput = document.getElementById("numberInput");   // Get the element with ID "numberInput"
    let numberInputValue = numberInput.value;

    if (tiValueTrimmed == "test") {
        if (numberInputValue % 5 == 0) {
            formOutput.innerText = textInputValue;
        }
        else {
            formOutput.innerText = "Error: \"" + textInputValue + "\" is an invalid option";
        } 
    }
    else if (tiValueTrimmed == "hi" || tiValueTrimmed == "hello") {
        if (numberInputValue % 5 == 0) {
            formOutput.innerText = "Hello!";
        }
        else {
            formOutput.innerText = "Error: \"" + textInputValue + "\" is an invalid option";
        } 
    }
    else {
        formOutput.innerText = "Error: \"" + textInputValue + "\" is an invalid option";
    } 
}

/* Demonstrates how the logical conditions can be written on a different line
 * and then used for the if statement's conditions.
 * Can be more readable but requires additional memory to store the variables.
 */
function submitFormAlt(event) {
    event.preventDefault(); // Prevents default (refreshing page on submit)
    let formOutput = document.getElementById("formOutput");

    let textInput = document.getElementById("textInput");   // Gets the element with ID "textInput"
    let textInputValue = textInput.value;                   // Gets the text inside textInput
    let textInputValueLower = textInputValue.toLowerCase(); // Gets the lower case version of the text inside textInput
    let tiValueTrimmed = textInputValueLower.trim();        // Trims leading and trailing white from the lower case version of text inside textInput
    
    let numberInput = document.getElementById("numberInput");   // Get the element with ID "numberInput"
    let numberInputValue = numberInput.value;

    let valueIsTest = tiValueTrimmed == "test";
    let valueIsGreeting = tiValueTrimmed == "hi" || tiValueTrimmed == "hello";
    let numberIsMultipleOf5 = numberInputValue % 5 == 0;

    if (valueIsTest && numberIsMultipleOf5) {
        formOutput.innerText = textInputValue;
    }
    else if (valueIsGreeting && numberIsMultipleOf5) {
        formOutput.innerText = "Hello!";
    }
    else {
        formOutput.innerText = "Error: \"" + textInputValue + "\" is an invalid option";
    } 
}