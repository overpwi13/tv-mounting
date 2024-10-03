// Display the popup form 3-4 seconds after the page loads
window.onload = function() {
    setTimeout(function() {
        document.getElementById("popupForm").style.display = "flex";
    }, 2000); // Show the form 3 seconds after the page loads
};

// Close popup when 'X' is clicked
document.getElementById("closePopup").onclick = function() {
    document.getElementById("popupForm").style.display = "none";
};

// To ensure it displays properly even if the JavaScript runs before the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
});
