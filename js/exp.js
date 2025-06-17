document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});

document.addEventListener("mousemove", (event) => {
    const dot = document.getElementById("moving-dot");
    const timelineContainer = document.querySelector(".timeline-container");

    // Get the timeline container boundaries
    const containerRect = timelineContainer.getBoundingClientRect();

    // Restrict the dot movement to the timeline container's vertical range
    if (event.clientY >= containerRect.top && event.clientY <= containerRect.bottom) {
        dot.style.top = `${event.clientY - containerRect.top}px`; // Set the dot's vertical position
    }
});

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  