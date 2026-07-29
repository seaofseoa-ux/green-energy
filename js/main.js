// Load images on page-load so they are cached before a user clicks a button
function preloader() {
  const imagesList = [
    "./img/img-1.jpg",
    "./img/img-2.jpg",
    "./img/img-3.jpg"
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }

  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);

// All buttons in a NODE LIST
const buttons = document.querySelectorAll(".button-group button");

// Resource object with 3 sub-objects — one per clean-energy solution
const solutions = {
  solar: {
    headingContent: "Community Solar Gardens",
    bodyText: "You don't need to own a roof, or thousands of dollars, to benefit from solar power. Community solar gardens let neighbours subscribe to a share of a local solar array and receive a credit on their electricity bill for the power it produces. Subscriptions are often available with no upfront cost, no installation, and no maintenance — making solar accessible to renters, apartment dwellers, and anyone whose roof isn't a good candidate for panels.",
    imgUrl: "./img/img-1.jpg",
    imgAlt: "Rooftop homes sharing power from a nearby community solar panel array"
  },
  rebates: {
    headingContent: "Rebates & Tax Incentives",
    bodyText: "Federal, provincial, and municipal programs regularly offer rebates, low-interest loans, and tax credits that cover a meaningful share of the cost of heat pumps, solar installations, and insulation upgrades. Stacking a rebate program with a utility incentive can turn a project that once felt out of reach into one that pays for itself within a few years through lower monthly bills.",
    imgUrl: "./img/img-2.jpg",
    imgAlt: "A rebate coin and approved incentive application form"
  },
  efficiency: {
    headingContent: "Home Efficiency Retrofits",
    bodyText: "Cutting energy waste is often the cheapest form of clean energy there is. Swapping to LED bulbs, sealing drafts, and adding attic insulation typically cost far less than generation projects but can lower a household's energy use by a fifth or more — freeing up the budget for bigger upgrades down the road.",
    imgUrl: "./img/img-3.jpg",
    imgAlt: "Cutaway of a home showing wall insulation, an LED bulb, and a thermometer"
  }
};

// Reference to the HTML container that gets swapped dynamically
const contentContainer = document.getElementById("content-container");

// handleSelection: swaps the active button styling and the displayed content
function handleSelection(event) {
  // Remove id "active-button" from whichever button currently has it
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].hasAttribute("id")) {
      buttons[i].removeAttribute("id");
    }
  }

  // Set id "active-button" on the button that was just clicked
  const clickedButton = event.currentTarget;
  clickedButton.setAttribute("id", "active-button");

  // Look up the matching content by the button's data-key attribute
  const key = clickedButton.getAttribute("data-key");
  const data = solutions[key];

  contentContainer.innerHTML = `
    <h2>${data.headingContent}</h2>
    <img src="${data.imgUrl}" alt="${data.imgAlt}">
    <p>${data.bodyText}</p>
  `;
}

// Register every button to listen for the click event
buttons.forEach(function (button) {
  button.addEventListener("click", handleSelection);
});
