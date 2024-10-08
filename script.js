// General function to remove classes from a container or its children
function removeFlexClasses(container, isChild) {
  if (isChild) {
    const firstChild = container.querySelector(".flex-item-1");
    if (firstChild) {
      firstChild.classList.forEach((className) => {
        if (className.startsWith("flexjs-")) {
          firstChild.classList.remove(className);
        }
      });
    }
  } else {
    container.classList.forEach((className) => {
      if (className.startsWith("flexjs-")) {
        container.classList.remove(className);
      }
    });
  }
}

// Event delegation for button or dropdown selection
document.addEventListener("change", function (event) {
  if (event.target.matches(".dropdown")) {
    const containerId = event.target.getAttribute("data-id");
    const flexValue = event.target.value;
    const targetType = event.target.getAttribute("data-target"); // 'container' or 'child'
    const container = document.querySelector(
      `.flex-container[data-id="${containerId}"]`
    );

    const isChild = targetType === "child";

    // Remove any existing flex-related classes
    removeFlexClasses(container, isChild);

    // Apply the new flex class to the container or its children
    if (isChild) {
      const firstChild = container.querySelector(".flex-item-1");
      if (firstChild) {
        firstChild.classList.add(`flexjs-${flexValue}`);
      }
    } else {
      container.classList.add(`flexjs-${flexValue}`);
    }
  }
});

// //WRAP SLIDER
// Function to handle width adjustment for any container
function updateContainerWidth(sliderId, containerId) {
  document.getElementById(sliderId).addEventListener("input", function () {
    const container = document.querySelector(
      `.flex-container[data-id="${containerId}"]`
    );
    if (container) {
      container.style.width = this.value + "%";
    }
  });
}

// Initialize sliders for flex-wrap and flex-flow
updateContainerWidth("width-slider-wrap", "container-flex-wrap");
