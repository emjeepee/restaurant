// This module consists of one function, 
// which it exports.
// This function has to:
// 1) Make the div for the Shah's feast menu
// and give it classes menuDiv and menuOnePos.
// Make the <p> for the menu heading and give it class
// menuHead and innerHTML "The Shah's feast -- $456".
// Make the <p> that describes the menu. Give it class 
// menuText and innerHTML 
// "Starter: Baby quails stewed in champagne. 
// Main course: Salted dormice rolled in caviar. 
// Dessert: chocolate pudding."

// 2) Do as above for the menu Princess
// Margaret's ruin
// Use texts "Princess Margaret's ruin -- $546" and 
// "A meal heavy on alcohol. Starter: Baby ostrich 
// steaks braised in whisky. Main course: 
// Flame-grilled warthog fillet mignon 
// with vodka sauce. Dessert: doughnuts and jam."

// 3) Do the same as above for the last menu. Use
// texts "The Emperor's shame -- $534" and 
// "Starter course: Poachers' fingers stewed in 
// oil of pomegranate. Main course: Live baby
// squid in iguana bile. Dessert: Sticky 
// toffee pudding."

// 4) Toast every element in contentDiv

// 5) Append the menu divs to the 
// content div (which code will pass in)

// First import image files:
import quail from './images/quail.jpg';
import ostrich from './images/ostrich.jpg';
import squid from './images/squid.jpg';


function makeMenuPageEls(contentDiv){
    
// 1)
const shahMenuDiv = document.createElement("div");
shahMenuDiv.classList.add("menuDiv", "menuOnePos")
const shahMenuHeadP = document.createElement("p");
shahMenuHeadP.classList.add("menuHead")
shahMenuHeadP.innerHTML = "The Shah's feast -- $456"
const shahMenuBodyP = document.createElement("p");
shahMenuBodyP.classList.add("menuText")
shahMenuBodyP.innerHTML = "Starter: Baby quails stewed in champagne. Main course: Salted dormice rolled in caviar. Dessert: chocolate pudding."
shahMenuDiv.appendChild(shahMenuHeadP);
shahMenuDiv.appendChild(shahMenuBodyP);
const quailsImageDiv = document.createElement("div");
quailsImageDiv.classList.add("foodImageDiv", "quail")
// Add the food image:
const quailImg = new Image();
quailImg.src = quail;
quailsImageDiv.appendChild(quailImg);
shahMenuDiv.appendChild(quailsImageDiv);


// 2)
const margMenuDiv = document.createElement("div");
margMenuDiv.classList.add("menuDiv", "menuTwoPos")
const margMenuHeadP = document.createElement("p");
margMenuHeadP.classList.add("menuHead")
margMenuHeadP.innerHTML = "Princess Margaret's ruin -- $546"
const margMenuBodyP = document.createElement("p");
margMenuBodyP.classList.add("menuText")
margMenuBodyP.innerHTML = "A meal heavy on alcohol. Starter: Baby ostrich steaks braised in whisky. Main course: Flame-grilled warthog filet mignon with vodka sauce. Dessert: doughnuts and jam."
margMenuDiv.appendChild(margMenuHeadP);
margMenuDiv.appendChild(margMenuBodyP);
const ostrichImageDiv = document.createElement("div");
ostrichImageDiv.classList.add("foodImageDiv", "ostrich")
margMenuDiv.appendChild(ostrichImageDiv);
// Add the food image:
const ostrichImg = new Image();
ostrichImg.src = ostrich;
ostrichImageDiv.appendChild(ostrichImg);
margMenuDiv.appendChild(ostrichImageDiv);

// 3)
const empMenuDiv = document.createElement("div");
empMenuDiv.classList.add("menuDiv", "menuThreePos")
const empMenuHeadP = document.createElement("p");
empMenuHeadP.classList.add("menuHead")
empMenuHeadP.innerHTML = "The Emperor's shame -- $534"
const empMenuBodyP = document.createElement("p");
empMenuBodyP.classList.add("menuText")
empMenuBodyP.innerHTML = "Starter: Poachers' fingers stewed in oil of pomegranate. Main course: Live baby squid in iguana bile. Dessert: Sticky toffee pudding."
empMenuDiv.appendChild(empMenuHeadP);
empMenuDiv.appendChild(empMenuBodyP);
const squidImageDiv = document.createElement("div");
squidImageDiv.classList.add("foodImageDiv", "squid")
empMenuDiv.appendChild(squidImageDiv);
// Add the food image:
const squidImg = new Image();
squidImg.src = squid;
squidImageDiv.appendChild(squidImg);
empMenuDiv.appendChild(squidImageDiv);

// 4)
contentDiv.innerHTML = ""


// 5)
contentDiv.appendChild(shahMenuDiv)
contentDiv.appendChild(margMenuDiv)
contentDiv.appendChild(empMenuDiv)

                                    } // end fn makeMenuPageEls

export { makeMenuPageEls };