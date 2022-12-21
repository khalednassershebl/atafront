$(document).ready(function () {

    // Input Active

$(".form-group .form-control").focusin(function () {

    $(this).parent().addClass("active-input");

});

$(".form-group .form-control").focusout(function () {

    if ($(this).val()) {
        $(this).parent().addClass("active-input");
    } else {
        $(this).parent().removeClass("active-input");
    }

});

$(".form-group .form-control").each(function () {

    if ($(this).val()) {
        $(this).parent().addClass("active-input");
    }

});


//----------------------------------------------------------------


//----------------------------------------------------------------
// Toggle Navbar
$(".navbar-actions .sidemenu-trigger svg").on("click", function () {
    $(".nav").toggleClass("nav-hiddin");
    $(".big-nav").toggleClass("big-nav-hiddin");
    $(".notification-container").removeClass("noti-open");
    $(".setting-container").removeClass("noti-open");
    $(".bag-container").removeClass("noti-open");
});
//----------------------------------------------------------------


//----------------------------------------------------------------
// Toggle Notification
$(".noti").on("click", function () {
    $(".notification-container").toggleClass("noti-open");
    $(".setting-container").removeClass("noti-open");
    $(".bag-container").removeClass("noti-open");
    if ($(window).innerWidth() <= 575.98) {
        $(".big-nav").addClass("big-nav-hiddin");
    }
});
//----------------------------------------------------------------

//----------------------------------------------------------------
// Toggle Bag
$(".bag").on("click", function () {
    $(".bag-container").toggleClass("noti-open");
    $(".setting-container").removeClass("noti-open");
    $(".notification-container").removeClass("noti-open");
    if ($(window).innerWidth() <= 575.98) {
        $(".big-nav").addClass("big-nav-hiddin");
    }
});
//----------------------------------------------------------------

// Toggle Setting
$(".setti").on("click", function () {
    $(".setting-container").toggleClass("noti-open");
    $(".notification-container").removeClass("noti-open");
    $(".bag-container").removeClass("noti-open");
    if ($(window).innerWidth() <= 575.98) {
        $(".big-nav").addClass("big-nav-hiddin");
    }
});
//----------------------------------------------------------------


//----------------------------------------------------------------
// Close Notification By Clicking Anywhere
// $(document).on('click', function(e) {
//     $(".notification-container").removeClass("noti-open");
// });
//----------------------------------------------------------------

//----------------------------------------------------------------
// Read Notification 
$(".notification-content a").on("click", function () {
    $(this).addClass("noti-read");
});

$(".dropdown-box-header-actions").on("click", function () {
    $(".notification-content a").addClass("noti-read");
});
//----------------------------------------------------------------

//----------------------------------------------------------------
// Loading Page

$(window).on("load", function () {

    $(".loading").fadeOut(1000);

});

$(".toggle-dark").on("click", function () {
    $("body").toggleClass("dark");
});

//----------------------------------------------------------------

// Get The First Name Of Name
var getFirstName = $(".user-action-info h3").text().split(' ')[0];
$(".user-action-info h3").text(getFirstName);

});
    
    // Toggle Full Screen 
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

// Secuirty
// document.addEventListener('contextmenu', event => event.preventDefault());
// document.onkeydown = function(e) {
// if(event.keyCode == 123) {
//  return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//  return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//  return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//  return false;
// }
// if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//  return false;
// }
// }

// document.addEventListener('dblclick', function(event) {
//     event.preventDefault();
//     event.stopPropagation();
// },
// true//capturing phase!!
// );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    