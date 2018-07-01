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
        clearTimeout(timer);
        timeoutNextSlide();
    });

    next.addEventListener("click", function() {
        slides[index].classList.remove("banner-slide-active");
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        slides[index].classList.add("banner-slide-active");
        clearTimeout(timer);
        timeoutNextSlide();
    });


    // Automatyczna zmiana slajdów

    var timer = null;
    var timeoutNextSlide = function() {
        timer = setTimeout(function() {
            next.click();
        }, 5000);
    };

    timeoutNextSlide();

    // Drop-down

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
            list2.style.visibility = "hidden";
            list2.style.opacity = "0";
            list3.style.visibility = "hidden";
            list3.style.opacity = "0";
        }
    });

    arr2.addEventListener("click", function () {
        if (list2.style.visibility === "visible") {
            list2.style.visibility = "hidden";
            list2.style.opacity = "0";
        } else {
            list2.style.visibility = "visible";
            list2.style.opacity = "1";
            list1.style.visibility = "hidden";
            list1.style.opacity = "0";
            list3.style.visibility = "hidden";
            list3.style.opacity = "0";
        }
    });

    arr3.addEventListener("click", function () {
        if (list3.style.visibility === "visible") {
            list3.style.visibility = "hidden";
            list3.style.opacity = "0";
        } else {
            list3.style.visibility = "visible";
            list3.style.opacity = "1";
            list1.style.visibility = "hidden";
            list1.style.opacity = "0";
            list2.style.visibility = "hidden";
            list2.style.opacity = "0";
        }
    });

    //

    var chair1 = document.querySelector(".panel-list--chair1");
    var chair2 = document.querySelector(".panel-list--chair2");
    var chair3 = document.querySelector(".panel-list--chair3");

    var col1 = document.querySelector(".panel-list--color1");
    var col2 = document.querySelector(".panel-list--color2");
    var col3 = document.querySelector(".panel-list--color3");

    var material1 = document.querySelector(".panel-list--material1");
    var material2 = document.querySelector(".panel-list--material2");


    var label1 = document.querySelectorAll(".list-label")[0];
    var label2 = document.querySelectorAll(".list-label")[1];
    var label3 = document.querySelectorAll(".list-label")[2];

    var productChair = document.querySelector(".calc-products--chair");
    var productColor = document.querySelector(".calc-products--color");
    var productMaterial = document.querySelector(".calc-products--material");

    var priceChair = document.querySelector(".calc-price--chair");
    var priceSpace = document.querySelector(".calc-price--space");
    var priceMaterial = document.querySelector(".calc-price--material");

    var total = document.querySelector(".calc-summary-sum");


    chair1.addEventListener("click", function(event) {
        event.preventDefault();

        label1.innerText = chair1.innerText;
        label1.style.color = "rgb(89,89,89)";
        productChair.innerText = "Chair " + chair1.innerText;
        priceChair.innerText = chair1.dataset.price;
        total.innerText = parseInt(priceChair.innerText);
        list1.style.visibility = "hidden";
        list1.style.opacity = "0";

    });

    chair2.addEventListener("click", function(event) {
        event.preventDefault();

        label1.innerText = chair2.innerText;
        label1.style.color = "rgb(89,89,89)";
        productChair.innerText = "Chair " + chair2.innerText;
        priceChair.innerText = chair2.dataset.price;
        total.innerText = parseInt(priceChair.innerText);
        list1.style.visibility = "hidden";
        list1.style.opacity = "0";

    });

    chair3.addEventListener("click", function(event) {
        event.preventDefault();

        label1.innerText = chair3.innerText;
        label1.style.color = "rgb(89,89,89)";
        productChair.innerText = "Chair " + chair3.innerText;
        priceChair.innerText = chair3.dataset.price;
        total.innerText = parseInt(priceChair.innerText);
        list1.style.visibility = "hidden";
        list1.style.opacity = "0";

    });

    col1.addEventListener("click", function(event) {

        event.preventDefault();

        productColor.innerText = col1.innerText;

        priceSpace.style.display = "inline-block";

        label2.innerText = col1.innerText;
        label2.style.color = "rgb(89,89,89)";
        list2.style.visibility = "hidden";
        list2.style.opacity = "0";

    });

    col2.addEventListener("click", function(event) {
        event.preventDefault();

        productColor.innerText = col2.innerText;

        priceSpace.style.display = "inline-block";

        label2.innerText = col2.innerText;
        label2.style.color = "rgb(89,89,89)";
        list2.style.visibility = "hidden";
        list2.style.opacity = "0";

    });

    col3.addEventListener("click", function(event) {
        event.preventDefault();

        productColor.innerText = col3.innerText;

        priceSpace.style.display = "inline-block";

        label2.innerText = col3.innerText;
        label2.style.color = "rgb(89,89,89)";
        list2.style.visibility = "hidden";
        list2.style.opacity = "0";

    });

    material1.addEventListener("click", function(event) {
        event.preventDefault();

        productMaterial.innerText = material1.innerText;
        priceMaterial.innerText = "0";
        total.innerText = parseInt(priceChair.innerText) + parseInt(priceMaterial.innerText);
        label3.innerText = material1.innerText;
        label3.style.color = "rgb(89,89,89)";
        list3.style.visibility = "hidden";
        list3.style.opacity = "0";

    });

    material2.addEventListener("click", function(event) {
        event.preventDefault();

        productMaterial.innerText = material2.innerText;
        priceMaterial.innerText = "100";
        total.innerText = parseInt(priceChair.innerText) + parseInt(priceMaterial.innerText);
        label3.innerText = material2.innerText;
        label3.style.color = "rgb(89,89,89)";
        list3.style.visibility = "hidden";
        list3.style.opacity = "0";


    });

    // Transport checkbox

    var checkbox = document.querySelector(".checkbox");
    var productTransport = document.querySelector(".calc-products--transport");
    var priceTransport = document.querySelector(".calc-price--transport");

    checkbox.addEventListener("click", function () {
        if (checkbox.style.backgroundImage === "") {
            checkbox.style.backgroundImage = "url('./images/form_ok.jpg')";
            checkbox.style.backgroundPosition = "center";
            checkbox.style.backgroundRepeat = "no-repeat";
            productTransport.innerText = "Transport";
            priceTransport.innerText = "80";
            total.innerText = parseInt(priceChair.innerText) + parseInt(priceMaterial.innerText) + parseInt(priceTransport.innerText);
        } else {
            checkbox.style.backgroundImage = "";
            productTransport.innerText = "";
            priceTransport.innerText = "";
            total.innerText = parseInt(priceChair.innerText) + parseInt(priceMaterial.innerText);
        }


    });









});