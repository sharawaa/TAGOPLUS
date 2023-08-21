document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContentContainer = document.querySelector(
      ".dropdown-content-container"
    );
  
    dropbtn.addEventListener("click", function () {
      if (dropdownContentContainer.style.display === "block") {
        dropdownContentContainer.style.display = "none";
      } else {
        dropdownContentContainer.style.display = "block";
      }
    });
  });