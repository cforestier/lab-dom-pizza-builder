// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

let whiteSauceHTML = document.querySelector('.sauce.sauce-white');
function renderWhiteSauce() {
  if (state.whiteSauce) {
    whiteSauceHTML.classList.add('sauce-white');
  } else {
    whiteSauceHTML.classList.remove('sauce-white'); // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  }
}

let GlutenFreeCrustHTML = document.querySelector('.crust.crust-gluten-free');
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    GlutenFreeCrustHTML.classList.add('crust-gluten-free');
  } else {
    GlutenFreeCrustHTML.classList.remove('crust-gluten-free'); // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  }
}

function renderButtons() {
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // with a forEach
  // function renderButtons() {
  //   const buttonStates = [
  //     { state: state.pepperoni, className: '.btn.btn-pepperoni' },
  //     { state: state.mushrooms, className: '.btn.btn-mushrooms' },
  //     { state: state.greenPeppers, className: '.btn.btn-green-peppers' },
  //     { state: state.whiteSauce, className: '.btn.btn-sauce' },
  //     { state: state.glutenFreeCrust, className: '.btn.btn-crust' }
  //   ];

  //   buttonStates.forEach((buttonState) => {
  //     const button = document.querySelector(buttonState.className);
  //     if (buttonState.state) {
  //       button.classList.add('active');
  //     } else {
  //       button.classList.remove('active');
  //     }
  //   });
  // }
}

// function renderPrice() {
//   // Iteration 4: change the HTML of `<aside class="panel price">`
//   const listItems = document.querySelectorAll('.panel.price ul li');
//   const price = document.querySelector('.panel.price strong');
//   let total = 10;

//   if (!state.pepperoni) {
//     listItems[0].setAttribute('style', 'display: none');
//   } else {
//     listItems[0].setAttribute('style', 'display: list-item;');
//     total += 1;
//   }

//   if (!state.mushrooms) {
//     listItems[1].setAttribute('style', 'display: none');
//   } else {
//     listItems[1].setAttribute('style', 'display: list-item;');
//     total += 1;
//   }

//   if (!state.greenPeppers) {
//     listItems[2].setAttribute('style', 'display: none');
//   } else {
//     listItems[2].setAttribute('style', 'display: list-item;');
//     total += 1;
//   }

//   if (!state.whiteSauce) {
//     listItems[3].setAttribute('style', 'display: none');
//   } else {
//     listItems[3].setAttribute('style', 'display: list-item;');
//     total += 3;
//   }

//   if (!state.glutenFreeCrust) {
//     listItems[4].setAttribute('style', 'display: none');
//   } else {
//     listItems[4].setAttribute('style', 'display: list-item;');
//     total += 5;
//   }

//   price.innerHTML = `$${total}`;
// }

function renderPrice() {
  const listItems = document.querySelectorAll('.panel.price ul li');
  const price = document.querySelector('.panel.price strong');
  let total = 10;

  listItems.forEach((item, index) => {
    const priceValues = [1, 1, 1, 3, 5]; // Correspond aux valeurs des prix respectifs
    const display = state[Object.keys(state)[index]];

    item.style.display = display ? 'list-item' : 'none';

    if (display) {
      total += priceValues[index];
    }
  });

  price.innerHTML = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
