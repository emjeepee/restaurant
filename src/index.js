// 'import' and 'export' have to go at the top level:
import {makeLandingPageEls} from './landingPage.js'
import {makeMenuPageEls} from './menuPage.js'
import {makeContactPageEls} from './contactPage.js'

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
    // and give it class "contentDiv": 
    const contentDiv = document.getElementById('content')
    // Give the div a class that sets its size and position
    // so that it's big enough to have appended to it lots
    // of stuff:
    contentDiv.classList.add("contentDiv")

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