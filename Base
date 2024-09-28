const activities = ['hiking', 'painting', 'cycling'];  // Example list of hobbies
let currentIndex = 0;

async function fetchImage(activity) {
    const accessKey = 'const activities = ['hiking', 'painting', 'cycling'];  // Example list of hobbies
let currentIndex = 0;

async function fetchImage(activity) {
    const accessKey = '0N9Z6gIxW4ps8bFMZn4dzaRugmP1McxGUIUXFynzD3A';
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${activity}&client_id=${accessKey}`);
    const data = await response.json();
    return data.results[0]?.urls?.small || 'default-image.jpg';
}

function displayNextActivity() {
    if (currentIndex < activities.length) {
        const activity = activities[currentIndex];
        document.getElementById('activityName').innerText = activity;
        fetchImage(activity).then(url => {
            document.getElementById('activityImage').src = url;
        });
    } else {
        alert('You’ve swiped through all activities!');
    }
}

function swipeLeft() {
    currentIndex++;
    displayNextActivity();
}

function swipeRight() {
    currentIndex++;
    // Store the liked activity if needed
    displayNextActivity();
}

// Initialize with the first activity
displayNextActivity();';
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${activity}&client_id=${accessKey}`);
    const data = await response.json();
    return data.results[0]?.urls?.small || 'default-image.jpg';
}

function displayNextActivity() {
    if (currentIndex < activities.length) {
        const activity = activities[currentIndex];
        document.getElementById('activityName').innerText = activity;
        fetchImage(activity).then(url => {
            document.getElementById('activityImage').src = url;
        });
    } else {
        alert('You’ve swiped through all activities!');
    }
}

function swipeLeft() {
    currentIndex++;
    displayNextActivity();
}

function swipeRight() {
    currentIndex++;
    // Store the liked activity if needed
    displayNextActivity();
}

// Initialize with the first activity
displayNextActivity();
