document.addEventListener("DOMContentLoaded", function() {


    // Znikanie i pojawianie się bloku z nazwą po najechaniu myszką na zdjęcie

    var elementName1 = document.querySelector(".box-name1");
    var elementName2 = document.querySelector(".box-name2");
    var elementBox1 = document.querySelector(".information-boxes--box1");
    var elementBox2 = document.querySelector(".information-boxes--box2");
    var elementBox1Block = document.querySelector(".box-block1");
    var elementBox2Block = document.querySelector(".box-block2");


    elementBox1.addEventListener("mouseover", function() {
        elementName1.style.display = "none";
        elementBox1Block.style.display = "none";
    });

    elementBox1.addEventListener("mouseout", function() {
        elementName1.style.display = "block";
        elementBox1Block.style.display = "block";
    });

    elementBox2.addEventListener("mouseover", function() {
        elementName2.style.display = "none";
        elementBox2Block.style.display = "none";
    });

    elementBox2.addEventListener("mouseout", function() {
        elementName2.style.display = "block";
        elementBox2Block.style.display = "block";
    });


    // Slider

    var slides = document.querySelectorAll(".banner-slide");
    var prev = document.querySelector(".banner-prev");
    var next = document.querySelector(".banner-next");

    var index = 2;

    slides[index].classList.add("banner-slide-active");

    prev.addEventListener("click", function() {
        slides[index].classList.remove("banner-slide-active");
        index--;
        if(index < 0) {
            index = slides.length - 1;
        }
        slides[index].classList.add("banner-slide-active");
    });

    next.addEventListener("click", function(e) {
        slides[index].classList.remove("banner-slide-active");
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        slides[index].classList.add("banner-slide-active");

    });

    console.log(slides);
    console.log(prev);
    console.log(next);

    // kalkulator

    var list1 = document.querySelector(".")


});