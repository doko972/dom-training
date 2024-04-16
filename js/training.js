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

console.log(orgClass);
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


const btnList = document.querySelector('#ex5-btn-list');
btnList.addEventListener('mouseover', function (e) {
    if (!e.target.classList.contains('button')) return;
    
    e.target.style.backgroundColor = randomColor();
});
btnList.addEventListener('mouseout', function (e) {
    if (!e.target.classList.contains('button')) return;

    e.target.style.backgroundColor = '';
});

/* ------------------------------------ */
/* --- Exercice 6 --- */



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


/* ------------------------------------ */
/* --- Exercice 8 --- */
