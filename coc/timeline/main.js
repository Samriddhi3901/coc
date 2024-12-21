window.sr = ScrollReveal();
sr.reveal('.dark-overlay', {
  duration: 2500,
  delay: 1000,
});

sr.reveal('#chat1', {
  viewFactor: 0,
  duration: 2000,
  origin: 'top',
  distance: '20px',
  delay: 1000,
});

sr.reveal('#chat2', {
  viewFactor: 0,
  duration: 2000,
  origin: 'bottom',
  distance: '20px',
  delay: 2000,
});

sr.reveal('#chat3', {
  viewFactor: 0,
  duration: 2000,
  origin: 'top',
  distance: '20px',
  delay: 3000,
});

sr.reveal('#chat4', {
  viewFactor: 0,
  duration: 2000,
  origin: 'bottom',
  distance: '20px',
  delay: 4000,
});

sr.reveal('#chat5', {
  viewFactor: 0,
  duration: 2000,
  origin: 'top',
  distance: '20px',
  delay: 5000,
});

sr.reveal('#chat6', {
  viewFactor: 0,
  duration: 2000,
  origin: 'bottom',
  distance: '20px',
  delay: 6000,
});

sr.reveal('#chat7', {
  viewFactor: 0,
  duration: 2000,
  origin: 'top',
  distance: '20px',
  delay: 7000,
});

    sr.reveal('h2', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'left',
      distance: '200px',
      reset: true,
    })

    sr.reveal('.container p', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'right',
      distance: '200px',
      reset: true,
    })

    sr.reveal('i', {
      duration: 8000,
      viewFactor: 0.2,
      rotate: {x: 0, y: 900, z: 0}
    });
    $('#carouselExampleIndicators').carousel({
      interval: 2000, // Auto-slide every 2 seconds
      pause: false // Prevent pausing on hover
    });
    
    // Add click event to advance to the next slide
    $('.carousel-item').on('click', function () {
      $('#carouselExampleIndicators').carousel('next');
    });
    // Reveal animations
sr.reveal('.dark-overlay', {
  duration: 2500,
  delay: 1000,
});

// Image changing every 2 seconds in carousel
$('#carouselExampleIndicators').carousel({
  interval: 2000, // Change image every 2 seconds
  pause: 'hover'
});

// Change image on click
$('#carouselExampleIndicators').on('click', function () {
  $('#carouselExampleIndicators').carousel('next');
});