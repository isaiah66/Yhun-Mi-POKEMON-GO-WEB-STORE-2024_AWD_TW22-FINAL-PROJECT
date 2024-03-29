window.addEventListener('scroll', function() {
    var header = document.querySelector('.header_section');
    var scrollPosition = window.scrollY;
    var colors = [
        { position: 0, color: 'rgba(0, 0, 0, 0.5)'},
        { position: 100, color: '#000000'},
        /// //////Add more color stops as needed
    ];

    /////// Find the appropriate color based on scroll position
    var targetColor = colors[0].color; // Default color
    for (var i = 0; i < colors.length; i++) {
        if (scrollPosition > colors[i].position) {
            targetColor = colors[i].color;
            targetBorder = '1px solid ' + colors[i].color;
        }
    }

    header.style.backgroundColor = targetColor; // Set the background color

});

//////////slider vid
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("videoPlayer");
    video.style.border = "2px solid black";
    video.setAttribute("width", "690");
    video.setAttribute("height", "auto");
  });

//////// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//////////// add to cart
function addToCart() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    setTimeout(function() {
        modal.style.display = "none";
    }, 2000); // Adjust the time for how long you want the message to appear
}

//////////service section owl carousel
$(".service_owl-carousel").owlCarousel({
    autoplay: false,
    center: true,
    nav: true,
    loop: false,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
        },
        991: {
            items: 3
        }
    }
});

//////// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


////////// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})


// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

document.getElementById("back1").addEventListener("click", function() {
    window.location.href = "cart.html";
  });