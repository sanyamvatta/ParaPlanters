$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

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