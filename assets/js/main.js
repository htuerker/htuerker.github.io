function Slider(id) {
  this.slider = document.querySelector(id);
  this.wrapper = slider.querySelector("#slider-wrapper");
  this.sliderItems = this.wrapper.querySelectorAll(".slider-item");
  this.prevButton = this.slider.querySelector("#prev-button");
  this.nextButton = this.slider.querySelector("#next-button");
  this.currentIndex = 0;
  this.init();
}	

Slider.prototype = {
  init: function() {
    this.updateButtons();
    var self = this;
    this.nextButton.addEventListener("click", function(e) {
      if(self.currentIndex < self.sliderItems.length - 1) {
        self.currentIndex += 1;
        self.wrapper.style.left = "-" + self.sliderItems[self.currentIndex].offsetLeft + "px";
        self.updateButtons();
      }
    });
    this.prevButton.addEventListener("click", function(e) {
      if(self.currentIndex > 0) {
        self.currentIndex -= 1;
        self.wrapper.style.left = "-" + self.sliderItems[self.currentIndex].offsetLeft + "px";
        self.updateButtons();
      }
    });
  },
  updateButtons() {
    if(this.currentIndex === 0) {
      this.prevButton.style.display = "none";
    } else {
      this.prevButton.style.display = "block";
    }
    if(this.currentIndex >= this.sliderItems.length - 1) {
      this.nextButton.style.display = "none";
    } else {
      this.nextButton.style.display = "block";
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  new Slider("#portfolio");
});
	
