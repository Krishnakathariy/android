// Add some interactivity
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header h1");

    // Add a hover effect to the header
    header.addEventListener("mouseover", () => {
        header.style.color = "#0077b5";
        header.style.transition = "color 0.3s ease";
    });

    header.addEventListener("mouseout", () => {
        header.style.color = "#333";
    });

    // Add a simple alert when the page loads
    setTimeout(() => {
        alert("Welcome to my personal website! Feel free to explore.");
    }, 1000);
});
