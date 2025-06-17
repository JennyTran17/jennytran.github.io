/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// JavaScript to handle dropdown selection
const dropdown = document.getElementById("project-type");


// Function to display the selected section
function showSection() {
  const selectedValue = dropdown.value;
  const activeSection = document.getElementById(selectedValue);
  // Hide all sections
  // Show the selected section
  if(selectedValue === "games") {
  
  activeSection.style.display = "block";
  document.getElementById("modelling").style.display = "none";
  document.getElementById("art").style.display = "none";
  document.getElementById("software").style.display = "none";
  }
  else if(selectedValue === "modelling") {
    activeSection.style.display = "block";
    document.getElementById("games").style.display = "none";
    document.getElementById("art").style.display = "none";
    document.getElementById("software").style.display = "none";
  }
  else if(selectedValue === "art") {
    activeSection.style.display = "block";
    document.getElementById("games").style.display = "none";
    document.getElementById("modelling").style.display = "none";
    document.getElementById("software").style.display = "none";
  }
  else if(selectedValue === "software") {
    activeSection.style.display = "block";
    document.getElementById("games").style.display = "none";
    document.getElementById("modelling").style.display = "none";
    document.getElementById("art").style.display = "none";
  }
  // else {
  //   document.getElementById("games").style.display = "none";
  //   document.getElementById("modelling").style.display = "none";
  //   document.getElementById("art").style.display = "none";
  //   document.getElementById("software").style.display = "none";
  // }


}
