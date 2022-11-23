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

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept' : 'application/json'
    }

  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Agradecemos o contato!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error
          ["message"]).join(", ")
        } else {
          status.innerHTML = "Opa! Houve um erro no envio do seu formulário"
        }
      })
    }
  }).catch(error => {
          status.innerHTML = "Opa! Houve um erro no envio do seu formulário"
  });
}

form.addEventListener("submit", handleSubmit)