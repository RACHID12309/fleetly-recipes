// script.js
const recipes = [
    // Array of recipe objects
];

const carouselInner = document.querySelector('.carousel-inner');
recipes.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}">
                      <h3>${recipe.title}</h3>
                      <p>Cooking Time: ${recipe.cookingTime} mins</p>`;
    carouselInner.appendChild(item);
});