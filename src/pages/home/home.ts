import {navigateTo} from '../../main';

export default function() {
        const createButton = document.getElementById('createButton');
        const joinButton = document.getElementById('joinButton'); 
        const newGameButton = document.getElementById('new-game-btn');
    
        // Add click event listeners to the buttons
        if (createButton) {
            createButton.addEventListener('click', handleCreateButtonClick);
        }
    
        if (joinButton) {
            joinButton.addEventListener('click', handleJoinButtonClick);
        }

        if (newGameButton){
            newGameButton.addEventListener('click', handleNewGameButtonClick);
        }

    window.addEventListener('load', () => {
        //init();
        // Get references to the buttons using their IDs
        
    });
}

function init(){
    closePopup();
}

// Event handler for the "Create Game" button
function handleCreateButtonClick() {
    openPopup();
}

// Event handler for the "Join Game" button
function handleJoinButtonClick() {
    console.log('Join Game button clicked');
    // Add your logic for the "Join Game" button here
}

function handleNewGameButtonClick(){
    console.log('New game btn click');
}

// Optional: Function to open the popup
function openPopup() {
    const overlay = document.getElementById('popup-overlay');
    
    if (overlay) {
        overlay.style.display = 'flex';

        overlay.addEventListener('click', (event) => {
            // Check if the click was on the overlay, not on the popup itself
            if (event.target === overlay) {
                closePopup();
            }
        });
    }
}

// Optional: Function to close the popup
function closePopup() {
    const overlay = document.getElementById('popup-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}