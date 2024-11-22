let comedogenicIngredients = {}; // Initialize an empty object

// Load the ingredients.json file
fetch('ingredients.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch ingredient data.');
    }
    return response.json();
  })
  .then((data) => {
    comedogenicIngredients = data; // Store the data in the global variable
    console.log('Ingredient data loaded:', comedogenicIngredients);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Event listener for the Analyze button
document.getElementById("analyze-button").addEventListener("click", () => {
  const input = document.getElementById("ingredients-input").value.toLowerCase();
  const ingredients = input.split(/,\s*/); // Split by commas and trim whitespace
  const resultsSection = document.getElementById("results-section");
  const resultMessage = document.getElementById("result-message");
  
  // Clear previous results
  resultMessage.innerHTML = "";

  let hasComedogenic = false;
  const formattedIngredients = ingredients.map((ingredient) => {
    if (comedogenicIngredients[ingredient]) {
      hasComedogenic = true;
      return `<span class="comedogenic">${ingredient} (Score: ${comedogenicIngredients[ingredient]})</span>`;
    } else {
      return `<span class="non-comedogenic">${ingredient}</span>`;
    }
  });

  if (hasComedogenic) {
    resultMessage.innerHTML = `
      Your product contains pore-clogging ingredients:<br><br>
      ${formattedIngredients.join(", ")}.
    `;
  } else {
    resultMessage.innerHTML = `
      Congrats! Your product is ComedoClear!<br><br>
      Ingredients: ${formattedIngredients.join(", ")}.
    `;
  }

  resultsSection.hidden = false;
});

// Event listener for the Clear button
document.getElementById("clear-button").addEventListener("click", () => {
  const inputField = document.getElementById("ingredients-input");
  inputField.value = ""; // Clear the text field
  const resultsSection = document.getElementById("results-section");
  resultsSection.hidden = true; // Hide the results section
});


/// menu 

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
