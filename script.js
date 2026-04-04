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

function toggleContacts() {
    const details = document.querySelector('.profile-details');
    if (details) {
        details.classList.toggle('show-details');
    }
}
