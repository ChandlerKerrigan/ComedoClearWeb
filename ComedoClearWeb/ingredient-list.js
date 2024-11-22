// Comedogenic ingredients data
const comedogenicIngredients = {
    "Acetylated lanolin": 4,
    "acetylated Lanolin Alcohol": 4,
    "algae extract": 5,
    "algin": 4,
    "almond oil": 2,
    "apricot kernel oil": 2,
    "ascorbyl palmitate": 2,
    "avocado oil": 2,
    "benzoic acid": 2,
    "beta carotene": 1,
    "beeswax": 2,
    "butyl stearate": 3,
    "butylene glycol": 1,
    "calendula": 1,
    "camphor": 2,
    "candelilla wax": 1,
    "capric acid": 2,
    "caprylic acid": 1,
    "carnuba wax": 1,
    "carrageenan": 5,
    "cetearyl alcohol": 2,
    "cetyl alcohol": 2,
    "cocoa butter": 4,
    "coconut butter": 4,
    "coconut oil": 4,
    "colloidal sulfur": 3,
    "corn oil": 3,
    "d&c red # 17": 3,
    "d&c red # 19": 2,
    "d&c red # 21": 3,
    "d&c red # 3": 3,
    "d&c red # 4": 1,
    "d&c red # 6": 1,
    "d&c red # 7": 1,
    "d&c red # 9": 1,
    "dimethicone": 1,
    "dioctyl succinate": 3,
    "evening primrose oil": 2,
    "glyceryl stearate nse": 1,
    "glyceryl stearate se": 3,
    "isocetyl stearate": 5,
    "isopropyl isostearate": 5,
    "isopropyl myristate": 4,
    "isopropyl palmitate": 4,
    "jojoba oil": 2,
    "lanolin alcohol": 2,
    "lanolin oil": 1,
    "lanolin wax": 1,
    "laureth 23": 3,
    "laureth 4": 5,
    "lauric acid": 4,
    "lithiumm stearate": 1,
    "magnesium stearate": 1,
    "myristic acid": 3,
    "octyl palmitate": 4,
    "octyl stearate": 5,
    "oleth-3": 5,
    "oleth-10": 2,
    "olive oil": 2,
    "peanut oil": 2,
    "peg 75 lanolin": 3,
    "peg 100 stearate": 1,
    "peg 16 lanolin": 4,
    "peg 8 stearate": 3,
    "palmitic acid": 2,
    "polyethylene glycol (peg 400)": 1,
    "propylene glycol monostearate": 4,
    "red algea": 5,
    "safflower oil": 2,
    "simethicone": 1,
    "sodium chloride": 5,
    "sodium laureth sulfate": 3,
    "sodium lauryl sulfate": 5,
    "soybean oil": 3,
    "squalenet": 1,
    "stearic acid": 2,
    "stearyl alcohol": 2,
    "sulfated castor oil": 3,
    "sulfated jojoba oil": 3,
    "syearyl heptanoate": 4,
    "talc": 1,
    "tocopherol (vitamin e)": 2,
    "vitamin a palmitate": 2,
    "wheat germ oil": 5,
    "zinc oxide": 1
  };
  
  // Function to capitalize each word
  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
  // Transform and capitalize ingredient keys
  const transformedIngredients = {};
  Object.entries(comedogenicIngredients).forEach(([key, value]) => {
    transformedIngredients[capitalizeWords(key)] = value;
  });
  
  // Sort ingredients alphabetically
  const sortedIngredients = Object.entries(transformedIngredients).sort(([a], [b]) =>
    a.localeCompare(b)
  );
  
  // Group ingredients by their first letter
  const groupedIngredients = sortedIngredients.reduce((acc, [ingredient, rating]) => {
    const letter = ingredient[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push({ ingredient, rating });
    return acc;
  }, {});
  
  // Render ingredients on the page
  const ingredientsList = document.getElementById("ingredients-list");
  
  Object.keys(groupedIngredients).forEach((letter) => {
    const section = document.createElement("section");
  
    // Create and style the letter heading
    const heading = document.createElement("h1");
    heading.textContent = letter;
    heading.style.fontWeight = "bold";
  
    // Create a container for the ingredients
    const list = document.createElement("ul");
    groupedIngredients[letter].forEach(({ ingredient, rating }) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${ingredient} (Score: ${rating})`;
      list.appendChild(listItem);
    });
  
    section.appendChild(heading);
    section.appendChild(list);
    ingredientsList.appendChild(section);
  });
  