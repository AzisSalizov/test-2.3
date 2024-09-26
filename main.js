// Задача 1
const extractNumbers = (str) => {
    return str.match(/\d/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6"));

// Задача 2

const fibonacci = (number1 = 0, number2 = 1) => {
    if (number1 > 144) return;
    console.log(number1);
    setTimeout(() => fibonacci(number2, number1 + number2), 1000);
}

fibonacci();


// Задача 3

const getProduct = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        data.forEach(product => {
            console.log(product.title)
        })
    } catch (e) {
        console.log(e)
    }

}
getProduct()

// Задача 4

const colorButtonsDiv = document.getElementById('btn_container');

colorButtonsDiv.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    }
};

// Задача 5

const square = document.getElementById('square');
const toggleButton = document.getElementById('toggleButton');

toggleButton.onclick = () => {
    if (square.style.display === 'none') {
        square.style.display = 'block';
        toggleButton.textContent = 'Hide Block';
    } else {
        square.style.display = 'none';
        toggleButton.textContent = 'Show Block';
    }
};

// Задача 6

let count = 0;
const counterDisplay = document.getElementById('counter');

const intervalId = setInterval(() => {
    if (count < 100) {
        count += 1;
        counterDisplay.textContent = count;
    } else {
        clearInterval(intervalId);
    }
}, 1);

// Задача 7


const fetchData = async () => {
    try {
        const response = await fetch('product.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.getElementById('getBtn').addEventListener('click', fetchData);
