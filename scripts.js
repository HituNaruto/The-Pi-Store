function toggleSliderMenu() {
    var sliderMenu = document.getElementById("slider-menu");
    if (sliderMenu.classList.contains("closed")) {
      sliderMenu.style.left = "0";
      sliderMenu.classList.remove("closed");
    } else {
      sliderMenu.style.left = "-200px";
      sliderMenu.classList.add("closed");
    }
  }
  