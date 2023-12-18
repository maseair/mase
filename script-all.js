function showSelect() {
    var trigger = document.getElementById("cs");
    var secondSelect = document.getElementById("oa-sub");
    var thirdSelect = document.getElementById("dev-sub");
    var fourthSelect = document.getElementById("u-sub")

    if (trigger.value === 'oa') {
        secondSelect.style.display = 'block';
        thirdSelect.style.display = 'none';
        fourthSelect.style.display = 'none';
    } else if (trigger.value === 'dev') {
        thirdSelect.style.display = 'block';
        secondSelect.style.display = 'none';
        fourthSelect.style.display = 'none';
    } else if (trigger.value === 'u') {
        fourthSelect.style.display = 'block';
        thirdSelect.style.display = 'none';
        secondSelect.style.display = 'none';
    } else {
        secondSelect.style.display = 'none';
        thirdSelect.style.display = 'none';
        fourthSelect.style.display = 'none';
    }
}

//slider section//

var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.slider-btn');
let currentSlide = 1;

//manual
var manualNav = function(manual) {
    slides.forEach(function (slide) {
        slide.classList.remove('arc');

        buttons.forEach((btn) => {
            btn.classList.remove('arc');
        });
    });

    slides[manual].classList.add('arc');
    buttons[manual].classList.add('arc');
}

buttons.forEach(function(btn, i) {
    btn.addEventListener('click', function() {
        manualNav(i);
        currentSlide = i;
    })
})

//auto
var repeat = function(arcClass) {
    let arc = document.
    getElementsByClassName('arc');
    let i = 1;
    var repeater = function() {
    setTimeout(function() {
    [...arc].forEach(function(arcSlide) {
    arcSlide.classList.remove('arc');
    });
    slides[i].classList.add('arc');
    buttons[i].classList.add('arc');
    i++
    if(slides.length == i) {
    i = 0;
    }
    if(i >= slides.length) {
    return;
    }
    repeater();
    }, 5000);
    }
    repeater();
    }
    repeat();