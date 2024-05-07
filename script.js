// Get all links within your subject page (update the selector if needed)
const links = document.querySelectorAll('.subject-links a'); 

// Add click listeners to all the links
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (opening new tab)

        const miniBrowser = document.getElementById('miniBrowser');
        miniBrowser.src = this.href;  // Set the iframe 'src' to the clicked link's URL 
    });
});
