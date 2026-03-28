
function openTab(event, tabName) {
    event.preventDefault(); 
    
   
    let tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => {
        tab.classList.remove("active-tab");
    });

   
    let tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => {
        link.classList.remove("active");
    });

    
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active");
}

const contactForm = document.querySelector('.contact-form');

if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const form = event.target;
        const data = new FormData(form);
        
        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Super! Your message has been sent successfully!");
                form.reset(); 
            } else {
                alert("Oops! Something went wrong.");
            }
        }).catch(error => {
            alert("Error sending message. Please try again.");
        });
    });
}


function toggleContacts() {
    const details = document.querySelector('.profile-details');
    if (details) {
        details.classList.toggle('show-details');
    }
}