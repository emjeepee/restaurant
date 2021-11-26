// 'import' and 'export' have to go at the top level:
import {makeLandingPageEls} from './landingPage.js'
import {makeMenuPageEls} from './menuPage.js'
import {makeContactPageEls} from './contactPage.js'
import './styles.css'
import empireState from './images/empireState1.jpg';


// The whole of this app's code is in the 
// following init function (or at least 
// the fn that follows does stuff as well 
// as calling fns from modules):

const init = () => {
    // First some variables for the three tabs.
    // Each one of these divs acts like a button
    // but without the press-button effect:
    let menuDiv = document.getElementById('menuDiv')
    let contactDiv = document.getElementById('contactDiv')
    let homeDiv = document.getElementById('homeDiv')

    // Now a variable for the hard-coded div (in the html doc)
    // and give it class "contentDiv". This is the div to which 
    // code will append elements dynamically as the user 
    // clicks on a tab: 
    const contentDiv = document.getElementById('content')
    // Give the div a class that sets its size and position
    // so that it's big enough to have appended to it lots
    // of stuff:
    contentDiv.classList.add("contentDiv")

// Now a div for the background. This will contain
// the image of the Empire State building:
const backgrDiv = document.createElement("div");
backgrDiv.classList.add("skyscraperDivClass", "redBorder", "backgroundBlue")
// Add the Emp St building image:
const empStImg = new Image();
empStImg.src = empireState;
backgrDiv.appendChild(empStImg);
document.body.appendChild(backgrDiv);



// Now define the callbacks for the evet listeners 
// for the clicks of the menu, contact and home
// tabs:
const showMenuPage = function(){
    
    makeMenuPageEls(contentDiv)
                               } // end callback showMenuPage

const showContactPage = function(){
    
    makeContactPageEls(contentDiv)
                                  } // end callback showContactPage

const showHomePage = function(){
    
    makeLandingPageEls(contentDiv)
                               } // end callback showHomePage

// Now set the event listeners for the clicks of the tabs:
menuDiv.addEventListener('click', showMenuPage)
contactDiv.addEventListener('click', showContactPage)
homeDiv.addEventListener('click', showHomePage)


    // On first startup create the landing page:
    makeLandingPageEls(contentDiv)

                   } // end init fn

window.onload = init;