class RandomFood {
  constructor(food) {
    this.food = food
  }
};

class EntireMeal {
  constructor(side, main, dessert) {
    this.side = side;
    this.main = main;
    this.dessert = dessert;
  }
};

var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'
];

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'
];

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'
];

var entireMeals = [sides, mains, desserts];

var sideSelection = document.querySelector('#side');
var mainSelection = document.querySelector('#main-dish');
var dessertSelection = document.querySelector('#dessert');
var entireMealSelection = document.querySelector('#entire-meal');

var textHeaderFood = document.querySelector('h3');
var textRandomFood = document.querySelector('h2');
var cookpot = document.querySelector('.right-view');

var btnClear = document.querySelector('.button-clear');
var btnLetsCook = document.querySelector('.button-cook');
var currentFood;

btnClear.addEventListener('click', clearButton);
btnLetsCook.addEventListener('click', getRandomFood);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomFood() {
  event.preventDefault();
  if (sideSelection.checked) {
    cookpot.classList.add('hidden');
    showSides();
  } else if (mainSelection.checked) {
    cookpot.classList.add('hidden');
    showMains();
  } else if (dessertSelection.checked) {
    cookpot.classList.add('hidden');
    showDesserts();
  } else if (entireMealSelection.checked) {
    cookpot.classList.add('hidden');
    showEntireMeals();
  }
};

function showSides() {
  currentFood = new RandomFood(sides[getRandomIndex(sides)]);
  textRandomFood.innerText = `${currentFood.food}!`;
  textHeaderFood.innerText = 'You should make:';
  btnClear.classList.remove('hidden');
};

function showMains() {
  currentFood = new RandomFood(mains[getRandomIndex(mains)]);
  textRandomFood.innerText = `${currentFood.food}!`;
  textHeaderFood.innerText = 'You should make:';
  btnClear.classList.remove('hidden');
};

function showDesserts() {
  currentFood = new RandomFood(desserts[getRandomIndex(desserts)]);
  textRandomFood.innerText = `${currentFood.food}!`;
  textHeaderFood.innerText = 'You should make:';
  btnClear.classList.remove('hidden');
};

function showEntireMeals() {
  currentFood = new EntireMeal(entireMeals[0][getRandomIndex(entireMeals[0])], entireMeals[1][getRandomIndex(entireMeals[1])], entireMeals[2][getRandomIndex(entireMeals[2])]);
  textRandomFood.innerText = `${currentFood.main} with a side of ${currentFood.side}, and ${currentFood.dessert} for dessert!`;
  textHeaderFood.innerText = 'You should make:';
  btnClear.classList.remove('hidden');
};

function clearButton() {
  event.preventDefault()
  textRandomFood.innerText = '';
  textHeaderFood.innerText = '';
  cookpot.classList.remove('hidden');
  btnClear.classList.add('hidden');
};
