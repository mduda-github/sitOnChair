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

    // Drop-down

    var lists = document.querySelectorAll(".panel-list");
    var arrows = document.querySelectorAll(".panel-list");


    var list1 = document.querySelectorAll(".panel-list")[0];
    var list2 = document.querySelectorAll(".panel-list")[1];
    var list3 = document.querySelectorAll(".panel-list")[2];

    console.log(list1, list2, list3);

    var arr1 = document.querySelectorAll(".list-arrow")[0];
    var arr2 = document.querySelectorAll(".list-arrow")[1];
    var arr3 = document.querySelectorAll(".list-arrow")[2];

    console.log(arr1, arr2, arr3);

    arr1.addEventListener("click", function () {
        if (list1.style.visibility === "visible") {
            list1.style.visibility = "hidden";
            list1.style.opacity = "0";
        } else {
            list1.style.visibility = "visible";
            list1.style.opacity = "1";
        }
    });

    arr2.addEventListener("click", function () {
        if (list2.style.visibility === "visible") {
            list2.style.visibility = "hidden";
            list2.style.opacity = "0";
        } else {
            list2.style.visibility = "visible";
            list2.style.opacity = "1";
        }
    });

    arr3.addEventListener("click", function () {
        if (list3.style.visibility === "visible") {
            list3.style.visibility = "hidden";
            list3.style.opacity = "0";
        } else {
            list3.style.visibility = "visible";
            list3.style.opacity = "1";
        }
    });


    // Transport checkbox

    var checkbox = document.querySelector(".checkbox");

    checkbox.addEventListener("click", function () {
        if (checkbox.style.backgroundImage === "") {
            checkbox.style.backgroundImage = "url('./images/form_ok.jpg')";
            checkbox.style.backgroundPosition = "center";
            checkbox.style.backgroundRepeat = "no-repeat";
        } else {
            checkbox.style.backgroundImage = "";
    }})


});