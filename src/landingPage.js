// This module will declare (and export) an fn 
// that will create all of the elements for 
// the landing page.
// The fn must:



// 1) Create a div for the blurb, give it class blurbDiv.
// Create a <p> child of that div and give it class 
// "blurbP" and innerHTML "We're upper class in every 
// "respect: our restaurant is penthouse, our chefs 
// top-ranking and our clientele high society"
// Append <p> to div
// 2) Toast all elements in the passed in contentDiv
// 3) Append div of class blurbDiv to the passed-
// in content div

function makeLandingPageEls (contentDiv) {
    
    // 4) 
    const blurbDiv = document.createElement("div");
    blurbDiv.classList.add("blurbDiv")
    const blurbP = document.createElement("p");
    blurbP.classList.add("blurbP")
    blurbP.innerHTML = "Upper class in every way<br><br>§§ Our premises are in the penthouse of the Empire State building<br><br>§§ Our chefs are top-notch<br><br>§§ Our clientele is high society"
    blurbDiv.appendChild(blurbP);
    
    // 2)
    contentDiv.innerHTML = ""

    // 3) 
    contentDiv.appendChild(blurbDiv);
                                       } // end makeLandingPageEls

export { makeLandingPageEls };