let clickCount = 0;

// Function to display the initial pop-up
function displayInitialPopup() {
    // Display initial pop-up
    alert('For real?');
}

function displaySecondPopup() {
    // Display initial pop-up
    alert('Wait Really?');
}

// Function to handle click event on "Yes" button
function handleYesButtonClick() {
    // Increment click count
    clickCount++;
    choice = true

    // Check if click count exceeds a certain value
    if (clickCount === 1) {
        // If first click, display initial pop-up again
        displayInitialPopup();
    } else  if (clickCount === 2){
        // If subsequent clicks, display a different pop-up
        displaySecondPopup();
    }else {
        displayThirdPopup(choice);
    }
}

// Function to display the second pop-up
function displayThirdPopup(choice) {
    // Display second pop-up
    if (choice == true){
        alert("Well it's a date!");
    } else{
        alert("Damn");
    }
}

// Function to handle click event on "No" button
function handleNoButtonClick() {
    // Increment click count
    clickCount++;
    choice = false

    // Check if click count exceeds a certain value
    if (clickCount === 1) {
        // If first click, display initial pop-up again
        displayInitialPopup();
    } else  if (clickCount === 2){
        // If subsequent clicks, display a different pop-up
        displaySecondPopup();
    }else {
        displayThirdPopup(choice);
    }
}

// Select the "Yes" and "No" buttons
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

// Add event listeners to the buttons
yesButton.addEventListener('click', handleYesButtonClick);
noButton.addEventListener('click', handleNoButtonClick);

