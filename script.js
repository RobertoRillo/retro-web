// Smooth scrolling

$(function(){
    $("p").css({"font-family": "Copperplate"});
  });

$(function(){
    $("h1").css({"font-family": "Copperplate"});
  });
  
$(function(){
    $("h2").css({"font-family": "Copperplate"});
  });
  
$(function(){
    $("a").css({"font-family": "Copperplate"});
  });

var boton = document.querySelector('.spotify-button');
boton.addEventListener('click', function() {
  
});

var boton = document.querySelector('.apple-button');
boton.addEventListener('click', function() {

});

var boton = document.querySelector('.youtube-button');
boton.addEventListener('click', function() {

});

var boton = document.querySelector('.instagram-button');
boton.addEventListener('click', function() {

});
  

function loadImage(imagen) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    const img = document.createElement("img");
    img.src = imagen;
    document.getElementById("demo").appendChild(img);
    }
    };
    xhttp.open("GET", imagen, true);
    xhttp.send();
}

function loadImage1(imagen) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    const img = document.createElement("img");
    img.src = imagen;
    document.getElementById("demo1").appendChild(img);
    }
    };
    xhttp.open("GET", imagen, true);
    xhttp.send();
}

function loadImage2(imagen) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    const img = document.createElement("img");
    img.src = imagen;
    document.getElementById("demo2").appendChild(img);
    }
    };
    xhttp.open("GET", imagen, true);
    xhttp.send();
}

function loadImage3(imagen) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    const img = document.createElement("img");
    img.src = imagen;
    document.getElementById("demo3").appendChild(img);
    }
    };
    xhttp.open("GET", imagen, true);
    xhttp.send();
}


navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    const sectionOffset = section.offsetTop;

    window.scrollTo({
      top: sectionOffset - 100,
      behavior: 'smooth'
    });
  });
});

// Active nav link
window.addEventListener('scroll', e => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav ul li a');

  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionOffset - 100 && window.pageYOffset < sectionOffset + sectionHeight - 100) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});

