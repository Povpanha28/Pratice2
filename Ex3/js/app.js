const COLORS = ["red", "blue", "green","purple"]// Get a random color among the list of available colors
function randomColor() {
const randomIndex = Math.floor(Math.random() * COLORS.length);
return COLORS[randomIndex];
}


const button = document.querySelector('#create');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.style.backgroundColor = randomColor();

    const description = document.createElement('p');
    description.textContent = 'Description';

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Card';

    // Remove card functionality
    removeButton.addEventListener('click', () => {
        newCard.remove();
    });

    // Append elements to the card
    cardFooter.appendChild(removeButton);
    newCard.appendChild(description);
    newCard.appendChild(cardFooter);

    // Append the new card to the container
    container.appendChild(newCard);

});

