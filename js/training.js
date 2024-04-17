/* ------------------------------------ */
/* --- Exercice 1 --- */

document.querySelector("#button1").addEventListener('click', function (event) {
    document.querySelector("#text1").classList.toggle('text-hidden');
});

/* ------------------------------------ */
/* --- Exercice 2 --- */

window.addEventListener('scroll', function () {
    document.getElementById('ex2-scroll-value').textContent = Math.floor(window.scrollY);
});

/* ------------------------------------ */
/* --- Exercice 3 --- */

/* When we click on the button "#ex3 .js-btn-animal",
it puts the first child at the end of the list.  */

document.querySelector("#ex3 .js-btn-animal")
    .addEventListener("click", function () {
        document.querySelector("#ex3-animals")
            .append(document.querySelector("#ex3-animals li:first-child"));
    });

/* ------------------------------------ */
/* --- Exercice 4 --- */
let i = 0;
const arrayColors = [
    "blue",
    "red",
    "green",
];
const btnEx4 = document.querySelector(".btnex4");
const orgClass = btnEx4.className;

btnEx4.addEventListener("click", function (event) {
    // METHOD 3
    this.className = orgClass + ' ' + arrayColors[i % arrayColors.length];

    // METHOD 2
    // btnEx4.classList.add(arrayColors[i % arrayColors.length]);
    // btnEx4.classList.remove(arrayColors[(i - 1) % arrayColors.length]);

    // METHOD 1 bis
    // switch (i) {
    //     case 0:
    //         btnEx4.classList.add("blue");
    //         btnEx4.classList.remove("green");
    //         break;

    //     case 1:
    //         btnEx4.classList.replace("blue", "red");
    //         break;

    //     default:
    //         btnEx4.classList.replace("red", "green");
    //         i = -1;
    //         break;
    // }

    // METHOD 1
    // if (i === 0) {
    //     btnEx4.classList.remove("green")
    // }
    // if (i === 1) {
    //     btnEx4.classList.replace("blue", "red");
    // }
    // if (i === 2) {
    //     btnEx4.classList.replace("red", "green");
    //     i = -1;
    // }
    i++;
})


/* ------------------------------------ */
/* --- Exercice 5 --- */
function randomColor() {
    return '#' + Math.floor(Math.random() * (256 ** 3)).toString(16);
}

// const btnsEx5 = document.querySelectorAll('#ex5 [type=button]');

// for (const btn of btnsEx5) {
//     btn.addEventListener('pointerenter', function (e) {
//         e.target.style.backgroundColor = randomColor();
//     })
//     btn.addEventListener('pointerout', function (e) {
//         e.target.style.backgroundColor = '';
//     })
// }

// document.querySelectorAll('#ex5 [type=button]')
//     .forEach(btn => {
//         btn.addEventListener('pointerenter', function (e) {
//             e.target.style.backgroundColor = randomColor();
//         });
//         btn.addEventListener('pointerout', function (e) {
//             e.target.style.backgroundColor = '';
//         });
//     });

['mouseover', 'mouseout']
    .forEach(eventType => document.querySelector('#ex5-btn-list').addEventListener(eventType, (e) => {
        if (!e.target.classList.contains('button')) return;

        e.target.style.backgroundColor = e.target.style.backgroundColor ? '' : randomColor();
    }));


/* ------------------------------------ */
/* --- Exercice 6 --- */


/**
 * Animate text letter by letter with time interval.
 * @param {element} element - DOM element containing text to animate
 */
function animateText(element) {
    const textContent = element.innerText.split('');
    element.textContent = "";
    let index = 0;
    const interval = setInterval(() => {
        if (index >= textContent.length) {
            clearInterval(interval);
            return;
        }

        element.textContent += textContent[index];
        index++;
    }, 50);
}

// animateText(document.getElementById('ex6-paragraph'));

// METHOD 2
const element = document.getElementById('ex6-paragraph');
const chars = element.innerText.split('');
element.textContent = "";

// chars.forEach((letter, i) => {
//     setTimeout(() => element.textContent += letter, i * 50);
// });


/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];

/**
 * Create task element from template and adds it to list.
 * @param {string} taskText - Text you want to create from template.
 * @returns {element} Element created and displayed in the DOM.
 */
function addTask(taskText) {
    const taskElement = document.importNode(document.getElementById('task-template').content, true);
    taskElement.querySelector('.js-task').innerText = taskText;
    const listElement = document.querySelector('#ex7-list');
    listElement.appendChild(taskElement);
    return listElement.lastElementChild;
}

/**
 * Gets a task from a list and puts this task at the end.
 * @param {array} taskList - Array of strings
 * @returns {string} The first element from the array.
 */
function getTaskFromList(taskList) {
    const firstElement = taskList.shift();
    taskList.push(firstElement);
    return firstElement;
}


document.getElementById('ex7-button')
    .addEventListener('click', function () {
        const element = addTask(getTaskFromList(taskList));

        // METHOD 2 - Replace event handler below.
        // element.addEventListener('click', function(event) {
        //     this.remove();
        // })
    });

// METHOD 1
document.getElementById('ex7-list')
    .addEventListener('click', function (event) {
        const clickedTask = event.target;
        if (clickedTask.classList.contains('js-task')) {
            clickedTask.remove();
        }
    });

/* ------------------------------------ */
/* --- Exercice 8 --- */


function initProgressBar(buttonElement) {
    let counter = 0;
    const progressBarId = buttonElement.dataset.progressId;
    const progressBar = document.getElementById(progressBarId);

    buttonElement.addEventListener('click', function () {
        if (counter >= 100) return;
        counter += 5;
        progressBar.style.width = counter + "%";
    });
}

document.querySelectorAll("#ex8 [data-progress-id]").forEach(initProgressBar);