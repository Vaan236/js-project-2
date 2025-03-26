const PRODUCT_PRICE = 363.93;
let count = 0;

const countDisplay = document.getElementById('count');
const totalPriceDisplay = document.getElementById('total-price');
const paragraphContainer = document.getElementById('paragraphContainer');
const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
const resetButton = document.getElementById('resetButton');
const logo = document.querySelector('.logo');

function changeCount(increment) {
    if (count + increment >= 0) {
        count += increment;
        countDisplay.textContent = count;
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    const totalPrice = (count * PRODUCT_PRICE).toFixed(2);
    totalPriceDisplay.textContent = `Total: $${totalPrice}`;
}

function toggleDropdownMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function isValidName(name) {
    const namePattern = /^[a-zA-Z ]{3,}$/;
    return namePattern.test(name);
}

// Event Listeners
document.getElementById('addParagraphButton').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'The WH-1000XM5 Wireless Noise-Canceling Headphones deliver exceptional sound quality, advanced noise-canceling technology, and all-day comfort for an immersive listening experience.';
    paragraphContainer.appendChild(newParagraph);
});

greetButton.addEventListener('click', function() {
    const username = usernameInput.value.trim();
    if (username === '') {
        greetingMessage.textContent = 'Please enter your name';
    } else if (!isValidName(username)) {
        greetingMessage.textContent = 'Invalid input. Please use only letters';
    } else {
        greetingMessage.textContent = `Hello ${username}, Welcome to Tech Gear!`;
    }
});

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuToggle = document.querySelector('.menu-toggle');
   
    if (dropdownMenu.style.display === 'block' &&
        !dropdownMenu.contains(event.target) &&
        event.target !== menuToggle) {
        dropdownMenu.style.display = 'none';
    }
});

resetButton.addEventListener('click', function() {
    location.reload();
});

logo.addEventListener('click', function() {
    alert('Welcome To TechGear\nThis is a Test Website');
});