document.addEventListener("DOMContentLoaded", () => {
  const facts = [
    "Honey never spoils — archaeologists found 3,000-year-old honey still edible!",
    "Bananas are berries, but strawberries aren’t.",
    "Octopuses have three hearts.",
    "A group of flamingos is called a 'flamboyance'.",
    "Your nose can remember 50,000 different scents.",
    "The shortest war in history lasted only 38 minutes.",
    "Sharks existed before trees did.",
    "An ostrich’s eye is bigger than its brain.",
    "Sea otters hold hands when they sleep so they don’t drift apart.",
    "There are more stars in the universe than grains of sand on Earth."
  ];

  const factText = document.getElementById("fact");
  const newFactBtn = document.getElementById("newFactBtn");

  newFactBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
  });
});