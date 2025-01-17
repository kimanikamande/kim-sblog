 const navEl = document.querySelector('.nav');
 const hamburgerEl = document.querySelector('.hamburger');
 hamburgerEl.addEventListener('click',() =>{
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
 });

//  like counter
const LIKE_COUNT_KEY = 'likeCount';
const USER_LIKED_KEY = 'userLiked';

// Initialize like count
let likeCount = parseInt(localStorage.getItem(LIKE_COUNT_KEY)) || 0;
const userLiked = localStorage.getItem(USER_LIKED_KEY) === 'true';

// Update the like count display
const likeCountDisplay = document.getElementById('like-count');
likeCountDisplay.textContent = likeCount;

// Reference to the like button
const likeBtn = document.getElementById('like-btn');

// Disable the button if the user already liked
if (userLiked) {
    likeBtn.disabled = true;
    likeBtn.textContent = 'Liked';
}

// Handle like button click
likeBtn.addEventListener('click', () => {
    if (!userLiked) {
        // Increment like count and update storage
        likeCount++;
        localStorage.setItem(LIKE_COUNT_KEY, likeCount);
        localStorage.setItem(USER_LIKED_KEY, 'true');

        // Update UI
        likeCountDisplay.textContent = likeCount;
        likeBtn.disabled = true;
        likeBtn.textContent = 'Liked';
    }
});