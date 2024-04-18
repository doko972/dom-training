document.addEventListener('DOMContentLoaded', function() {
    const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];
    const saladIngredientsList = document.getElementById('salad-ingredients');//ingredients
    const saladList = document.getElementById('salad-final');//salad complete
    const saladCount = document.getElementById('salad-count');//decompte

    let selectedIngredients = [];
    let selectedCount = 0;
//Compteur 
    function updateSaladCounter() {
        saladCount.textContent = selectedCount;
    }

    function createIngredientButton(ingredient) {
        const button = document.createElement('button');
        button.textContent = ingredient;
        button.classList.add('button');
        button.addEventListener('click', function() {
            if (selectedCount < 5) {
                addIngredientToSalad(ingredient);
            }
        });
        return button;
    }

    function addIngredientToSalad(ingredient) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        saladList.appendChild(li);
        selectedIngredients.push(ingredient);
        selectedCount++;
        updateSaladCounter();
    }

    function updateSaladIngredientsList() {
        saladIngredientsList.innerHTML = '';
        ingredients.forEach(ingredient => {
            if (!selectedIngredients.includes(ingredient)) {
                const li = document.createElement('li');
                li.appendChild(createIngredientButton(ingredient));
                saladIngredientsList.appendChild(li);
            }
        });
    }
