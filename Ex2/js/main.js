function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeColorBtn = document.querySelector('button');
const resultColor = document.querySelector('#result-color');

changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
    resultColor.textContent = getRandomHexColor();
});
