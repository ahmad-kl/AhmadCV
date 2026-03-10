// Tab Switching Logic Mathram
function openTab(event, tabName) {
    event.preventDefault(); 
    
    // Hide all tab content
    let tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => {
        tab.classList.remove("active-tab");
    });

    // Remove active class from all links
    let tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Show clicked tab and activate link
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active");
}

// Form submit cheyyumbol site maari pokathirikkan ulla code
const contactForm = document.querySelector('.contact-form');

if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Page maari pokathirikkan
        
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
                form.reset(); // Type cheytha karyangal maychu kalayan
            } else {
                alert("Oops! Something went wrong.");
            }
        }).catch(error => {
            alert("Error sending message. Please try again.");
        });
    });
}