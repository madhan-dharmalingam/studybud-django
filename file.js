document.addEventListener('DOMContentLoaded', () => {
    const fruits = {
        "Apple": "red",
        "Orange": "orange",
        "Mango": "yellow",
        "Jackfruit": "green",
        "Lemon": "yellow"
    };

    const fruitList = document.getElementById('fruitList');
    const fruitForm = document.getElementById('fruitForm');
    const fruitNameInput = document.getElementById('fruitName');
    const fruitColorInput = document.getElementById('fruitColor');

    // Function to display the fruit list
    function displayFruitList() {
        fruitList.innerHTML = ''; // Clear the existing list
        for (const fruit in fruits) {
            const li = document.createElement('li');
            li.textContent = fruit;
            li.style.color = fruits[fruit];
            li.className = 'fruit-item';
            fruitList.appendChild(li);
        }
    }

    // Initial display of the fruit list
    displayFruitList();

    fruitForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const fruitName = fruitNameInput.value.trim();
        const fruitColor = fruitColorInput.value.trim();

        if (fruitName && fruitColor) {
            if (fruits.hasOwnProperty(fruitName)) {
                fruits[fruitName] = fruitColor; // Update the fruit color in the JSON object
                displayFruitList(); // Update the display
            } else {
                alert('Fruit not found in the list.');
            }
        } else {
            alert('Please enter both fruit name and color.');
        }
    });
});
