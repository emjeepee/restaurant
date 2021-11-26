// This module consists of one function, 
// which it exports.
// This function has to:
// 1) Make the div for the contacts box and give it 
// classes menuDiv and contactBoxPos.
// 2) Make a <p> for the address head and give it class
// menuHead. Make a <p> for the address text and give it class
// menuText
// 3) Make a <p> for the phone head and give it class
// menuHead. Make a <p> for the phone text and give it class
// menuText
// 4) Make a <p> for the email bookings head and give it class
// menuHead. Make a <p> for the email bookings text and give it class
// menuText
// 5) Make a <p> for the opening hours head and give it class
// menuHead. Make a <p> for the opening hours text and give it class
// menuText
// 6) Append all <p>s to the contact div
// 7) Toast all child elements of the passed-in contentsDiv
// 8) Append the contact div to the 
// content div (which code will pass in)

function makeContactPageEls(contentDiv){
    // 1)
    const contactBoxDiv = document.createElement("div");
    contactBoxDiv.classList.add("menuDiv", "contactBoxPos")
    // 2)
    const addressHeadP = document.createElement("p");
    addressHeadP.classList.add("menuHead")
    addressHeadP.innerHTML = "Address"
    const addressTextP = document.createElement("p");
    addressTextP.classList.add("menuText")
    addressTextP.innerHTML = "Empire Heights restaurant, penthouse, 20 W 34th St, New York, NY 10001, USA"
    // 3)
    const phoneHeadP = document.createElement("p");
    phoneHeadP.classList.add("menuHead")
    phoneHeadP.innerHTML = "Phone"
    const phoneTextP = document.createElement("p");
    phoneTextP.classList.add("menuText")
    phoneTextP.innerHTML = "+1 555 123 5564"
    // 4)
    const emailHeadP = document.createElement("p");
    emailHeadP.classList.add("menuHead")
    emailHeadP.innerHTML = "Email bookings"
    const emailTextP = document.createElement("p");
    emailTextP.classList.add("menuText")
    emailTextP.innerHTML = "bookings@eh.com"
    // 5)
    const hoursHeadP = document.createElement("p");
    hoursHeadP.classList.add("menuHead")
    hoursHeadP.innerHTML = "Opening hours"
    const hours1TextP = document.createElement("p");
    const hours2TextP = document.createElement("p");
    hours1TextP.classList.add("menuText")
    hours2TextP.classList.add("menuText")
    hours1TextP.innerHTML = "Mon-Fri: noon-midnight"
    hours2TextP.innerHTML = "Sat, Sun & holidays: noon-11pm"
    // 6) 
    contactBoxDiv.appendChild(addressHeadP);
    contactBoxDiv.appendChild(addressTextP);
    contactBoxDiv.appendChild(phoneHeadP);
    contactBoxDiv.appendChild(phoneTextP);
    contactBoxDiv.appendChild(emailHeadP);
    contactBoxDiv.appendChild(emailTextP);
    contactBoxDiv.appendChild(hoursHeadP);
    contactBoxDiv.appendChild(hours1TextP);
    contactBoxDiv.appendChild(hours2TextP);
    
        // 7)
        contentDiv.innerHTML = ""

        // 8) 
        contentDiv.appendChild(contactBoxDiv);
        
                                        } // end fn makeMenuPageEls
    
    export { makeContactPageEls };