


$(() => {
  $('.slider').slick({    
    
  });
 
  $('.burger').slick({
    dots:true,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
    
        }
      }
    ]
  });
});