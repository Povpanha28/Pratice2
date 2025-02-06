// move block3 of container 1 to container 2

document.getElementById('container2').appendChild(container1.children[2]);

// remove block 1 from container 2

container2.removeChild(container2.children[0]);

// add item 10 to container 3 

const block10 = document.createElement('div');
block10.innerText = '10';
block10.classList.add('item');
container3.appendChild(block10);

// change the color of all the items in containerblue to red
const containerBlue = document.querySelectorAll('.containerBlue');
containerBlue.forEach((container) => {
    for(let i = 0; i < container.children.length; i++) {
    container.children[i].style.color = 'red';
}});