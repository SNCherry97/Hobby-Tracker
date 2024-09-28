const hobbyCard = document.getElementById('hobby-card');
const hobbyImage = document.getElementById('hobby-image');
const hobbyName = document.getElementById('hobby-name');
const leftSwipeBtn = document.getElementById('left-swipe');
const rightSwipeBtn = document.getElementById('right-swipe');

// Array of hobbies
const hobbies = ['Hiking', 'Painting', 'Gaming', 'Photography', 'Cooking'];
let currentHobbyIndex = 0;

// Unsplash API configuration
const unsplashAccessKey = '0N9Z6gIxW4ps8bFMZn4dzaRugmP1McxGUIUXFynzD3A';  // Replace with your actual Unsplash API key

// Fetch an image for the hobby from Unsplash
function fetchHobbyImage(hobby) {
    const url = `https://api.unsplash.com/search/photos?query=${hobby}&client_id=${unsplashAccessKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const imageUrl = data.results[0].urls.regular;
                hobbyImage.src = imageUrl;
            } else {
                hobbyImage.src = 'default-placeholder-image.jpg';  // Use a default image if none found
            }
        })
        .catch(err => {
            console.error('Error fetching image:', err);
            hobbyImage.src = 'default-placeholder-image.jpg';  // Use a default image on error
        });
}

// Display the current hobby
function displayHobby() {
    const hobby = hobbies[currentHobbyIndex];
    hobbyName.textContent = hobby;
    fetchHobbyImage(hobby);
}

// Handle swipe left (dislike)
leftSwipeBtn.addEventListener('click', () => {
    console.log(`Disliked: ${hobbies[currentHobbyIndex]}`);
    nextHobby();
});

// Handle swipe right (like)
rightSwipeBtn.addEventListener('click', () => {
    console.log(`Liked: ${hobbies[currentHobbyIndex]}`);
    nextHobby();
});

// Move to the next hobby
function nextHobby() {
    currentHobbyIndex = (currentHobbyIndex + 1) % hobbies.length;
    displayHobby();
}

// Initialize the first hobby on page load
document.addEventListener('DOMContentLoaded', displayHobby);
