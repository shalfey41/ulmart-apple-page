$(document).ready(function() {
    var pGetSlider = $("#js-bxslider"),
        setBxSlider = pGetSlider.bxSlider(),
        pBxSliderImagesLength = pGetSlider.children("li").length - 2,
        pBxSliderPager = pGetSlider.parent().next(".bx-controls");
      
    if (pBxSliderImagesLength == 1) {
      pBxSliderPager.css("display", "none");
    };
  });