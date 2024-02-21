$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});

document.addEventListener("DOMContentLoaded", function() {
  // Check if the window width is greater than 992px (common breakpoint for desktop)
  if(window.innerWidth > 992) {
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  } else {
    // Remove AOS attributes on mobile
    var aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(function(el) {
        el.removeAttribute('data-aos');
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');

        setTimeout(() => {
          // Remove initial animation class if needed, e.g., 'animate'
          ctaButton.classList.remove('animate');

          // Add the class that triggers the infinite pulse animation
          ctaButton.classList.add('button-pulse');
      }, 3000); 
      }
    });
  });

  const ctaHeading = document.querySelector('.major-cta-heading');
  const ctaButton = document.querySelector('.major-cta-button');
  
  observer.observe(ctaHeading);
  observer.observe(ctaButton);
});