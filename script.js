function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav"){
    x.className += " responsive ";
  } else {
    x.className = "topnav";
  }
}

$(document).on('ready', function() {
      
    $(".carrosel").slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      fade: true,

    });
  });

  const year = document.querySelector('#current-year')
   
  year.innerHTML = new Date(). getFullYear()

