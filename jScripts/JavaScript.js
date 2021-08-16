



//פןנקציה לעצירת הסרטון בסגירה

let videoStopper = function (id) {
    let containerElement = document.getElementById(id);
    let iframe_tag = containerElement.querySelector('iframe');
    let video_tag = containerElement.querySelector('video');
    if (iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc;
    }
    if (video_tag) {
        video_tag.pause();
    }
}

//פונקציה לפתיחת הראה עוד על הדמות
function openTab1() {
    document.getElementById("more1").style.display = "block";

    document.getElementById("more1").style.height = "100%";

}

function openTab2() {
    document.getElementById("more2").style.display = "block";

    document.getElementById("more2").style.height = "100%";

 }

//function openTab3() {
//    document.getElementById("more3").style.display = "block";

//    document.getElementById("more3").style.height = "100%";
   
//}

//function openTab4() {
//    document.getElementById("more4").style.display = "block";

//    document.getElementById("more4").style.height = "100%";
    
//}

//var moreClose1 = document.getElementById("closeMore1");


//moreClose1.addEventListener("click", function() {
//    console.log(moreClose1)
//    document.getElementById("more1").style.height = "0";
//})


function closeTab(evt, closemore) {
    //document.getElementById(closemore).style.display = "none";

    document.getElementById(closemore).style.height = "0";
    videoStopper("videoIdan");

}


////פונקציה לפתיחת התפריט איקונים לראה עוד
//function openMore1(evt, moreSection) {

//    var i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabcontent1");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//    tablinks = document.getElementsByClassName("tablinks1");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    document.getElementById(moreSection).style.display = "block";
//    evt.currentTarget.className += " active";

     
//}

//function openMore2(evt, moreSection) {

//    var i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabcontent2");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//    tablinks = document.getElementsByClassName("tablinks2");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    document.getElementById(moreSection).style.display = "block";
//    evt.currentTarget.className += " active";
//}

//function openMore3(evt, moreSection) {

//    var i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabcontent3");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//    tablinks = document.getElementsByClassName("tablinks3");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    document.getElementById(moreSection).style.display = "block";
//    evt.currentTarget.className += " active";
//}

//function openMore4(evt, moreSection) {

//    var i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabcontent");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//    tablinks = document.getElementsByClassName("tablinks4");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    document.getElementById(moreSection).style.display = "block";
//    evt.currentTarget.className += " active";
//}

function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//בר התקדמות עידן 
var rangeIdan = document.getElementById("volIdan");


rangeIdan.addEventListener("change", function (e) {
    console.log(e.target.value)
    doSomthingIdan(e.target.value)
})

function doSomthingIdan(value) {
    const arrowD = document.getElementById("arrowDI")
    const arrow = document.getElementById("arrowCarI")
    const text = document.getElementById("textI")
    switch (value) {
        case "0":
            text.innerHTML = "Move the car"
            text.style.marginLeft = "0%"
            arrow.style.marginLeft = "0%"
            arrowD.style.height = "0"
            break;
        case "1":
            text.innerHTML = "Idan lives in Tel Aviv with his parents and his twin brother."
            text.style.marginLeft = "12.5%"
            arrow.style.marginLeft = "12.5%"
            arrowD.style.height = "0"
            break;
        case "2":
            text.innerHTML = "He chose to study electrical engineering following his father, who specializes in the field."
            text.style.marginLeft = "25%"
            arrow.style.marginLeft = "25%"
            arrowD.style.height = "0"
                     break;
        case "3":
            text.innerHTML = "While everyone is asleep Idan gets up at 5am to run and exercise."
            text.style.marginLeft = "37.5%"
            arrow.style.marginLeft = "37.5%"
            arrowD.style.height = "0"
            break;
        case "4":
            text.innerHTML = "Idan volunteers at the 'Etgarim' organization, which engages in extreme sports activities for people with disabilities."
            text.style.marginLeft = "50%"
            arrow.style.marginLeft = "50%"
            arrowD.style.height = "0"
            break;
        case "5":
            text.innerHTML = "In his spare time he likes to read a book with a cup of tea in bed."
            text.style.marginLeft = "62.5%"
            arrow.style.marginLeft = "62.5%"
            arrowD.style.height = "0"
            break;
        case "6":
            text.innerHTML = "The song 'Maka afora' by Monica Sex talks about the crisis of People in the age of 30 in Tel Aviv."
            text.style.marginLeft = "75%"
            arrow.style.marginLeft = "75%"
            arrowD.style.height = "0"

            break;
        case "7":
            text.innerHTML = "Go watch the video!"
            text.style.marginLeft = "87.5%"
            arrow.style.marginLeft = "200%"
            arrowD.style.height = "100px"
            break;
        default:
            text.innerHTML = "Move the car";
            arrowD.style.height = "0"
    }

}


// בר התקדמות יוסף

var rangeYosef = document.getElementById("volYosef");

rangeYosef.addEventListener("change", function (e) {
    console.log(e.target.value)
    doSomthingYosef(e.target.value)
})

function doSomthingYosef(value) {
    const arrowD = document.getElementById("arrowDY")
    const arrow = document.getElementById("arrowCarY");
    const text = document.getElementById("textY")
    switch (value) {
        case "0":
            text.innerHTML = "Move the car"
            text.style.marginLeft = "0%"
            arrow.style.marginLeft = "0%"
            arrowD.style.height = "0"

            break;
        case "1":
            text.innerHTML = "Yosef grew up in the Druze village of Dalat al-Carmel and was educated on a kibbutz in the north of the country."
            text.style.marginLeft = "12.5%"
            arrow.style.marginLeft = "12.5%"
            arrowD.style.height = "0"

            break;
        case "2":
            text.innerHTML = "Yosef is a student of visual communication at the Holon Institute of Technology."
            text.style.marginLeft = "25%"
            arrow.style.marginLeft = "25%"
            arrowD.style.height = "0"

            break;
        case "3":
            text.innerHTML = "Yosef served in the Intelligence Corps in 8200."
            text.style.marginLeft = "37.5%"
            arrow.style.marginLeft = "37.5%"
            arrowD.style.height = "0"

            break;
        case "4":
            text.innerHTML = "Yosef lives in a shared apartment in Tel Aviv full of plants that makes him happy."
            text.style.marginLeft = "50%"
            arrow.style.marginLeft = "50%"
            arrowD.style.height = "0"

            break;
        case "5":
            text.innerHTML = "In his spare time he likes to work out in the gym and go to the beach."
            text.style.marginLeft = "62.5%"
            arrow.style.marginLeft = "62.5%"
            arrowD.style.height = "0"

            break;
        case "6":
            text.innerHTML = "Ravid Plotnik's song 'Harini' talks about self-acceptance, forgiveness and love for the other."
            text.style.marginLeft = "75%"
            arrow.style.marginLeft = "75%"
            arrowD.style.height = "0"

            break;
        case "7":
            text.innerHTML = "Go watch the video!"
            text.style.marginLeft = "87.5%"
            arrow.style.marginLeft = "200%"
            arrowD.style.height = "100px"
          

            break;
        
        
        default:
            text.innerHTML = "Move the car";
            arrowD.style.height = "0"
    }

}





////פונקיה לפתיחת הקרוסלה בלי בוטסטראפ
//var slideIndex = 1;
//showSlides(slideIndex);

//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}

//function currentSlide(n) {
//    showSlides(slideIndex = n);
//}

//function showSlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) { slideIndex = 1 }
//    if (n < 1) { slideIndex = slides.length }
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace("active", "");
//    }
//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += "active";
//}


//play when video is visible
var videos = document.getElementsByTagName("iframe"), fraction = 0.8;

function checkScroll() {

    for (var i = 0; i < videos.length; i++) {
        var video = videos[i];

        var x = 0,
            y = 0,
            w = video.width,
            h = video.height,
            r, //right
            b, //bottom 
            visibleX, visibleY, visible,
            parent;


        parent = video;
        while (parent && parent !== document.body) {
            x += parent.offsetLeft;
            y += parent.offsetTop;
            parent = parent.offsetParent;
        }

        r = x + parseInt(w);
        b = y + parseInt(h);


        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));


        visible = visibleX * visibleY / (w * h);


        if (visible > fraction) {
            playVideo();
        } else {
            pauseVideo();

        }
    }

};


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
};

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    window.addEventListener('scroll', checkScroll, false);
    window.addEventListener('resize', checkScroll, false);

    //check at least once so you don't have to wait for scrolling for the    video to start
    window.addEventListener('load', checkScroll, false);
};


function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        //console.log("event played");
    } else {
        //console.log("event paused");
    }
};

function stopVideo() {
    player.stopVideo();
};

function playVideo() {
    player.playVideo();
};

function pauseVideo() {
    player.pauseVideo();
};



$(document).ready(function () {

    //מעבר עכבר הפעלת סרטון קצר במהילך מהיר
    var $sortVideoHeader = $('#sortHeader');

    $sortVideoHeader.on('mouseenter', function () {
        $sortVideoHeader.get(0).play();

    });

    //חזרה לתמונה סטטית ביציאת עכבר
    $sortVideoHeader.on('mouseout', function () {
        $sortVideoHeader.get(0).load();

    });

    
    //מעבר עכבר הפעלת סרטון קצר במהילך מהיר
    var $sortVideo = $('#sortIdan');

    $sortVideo.on('mouseenter', function () {
        $sortVideo.get(0).play();
        
    });

    //חזרה לתמונה סטטית ביציאת עכבר
    $sortVideo.on('mouseout', function () {
        $sortVideo.get(0).load();
       
           });


    
    //מעבר עכבר הפעלת סרטון קצר במהילך מהיר
    var $sortVideoY = $('#sortYosef');

    $sortVideoY.on('mouseenter', function () {
        $sortVideoY.get(0).play();

    });

    //חזרה לתמונה סטטית ביציאת עכבר
    $sortVideoY.on('mouseout', function () {
        $sortVideoY.get(0).load();
       

    });

    //$('.round').click(function (e) {
    //    e.preventDefault();
    //    e.stopPropagation();
    //    $('.arrow').toggleClass('bounceAlpha');
    //});

    ////בלחיצה על הסרטון מעבר לעמוד הדמות
    //$("#videoDivOne").click(function () {
    //    $('#openChars').removeClass("hidden");
    //    $('#divChar1').addClass("active");
    //    $('#divChar2').removeClass("active");
    //    $('#divChar3').removeClass("active");
    //    $('#divChar4').removeClass("active");
    //    videoStopper("idanVideo");
    //});
    ////לחיצה כל הכפתור של  דמות 1 ומעבר לדמות 
    //$("#btnChar1").click(function () {
    //    $('#openChars').removeClass("hidden");
    //    $('#divChar1').addClass("active");
    //    $('#divChar2').removeClass("active");
    //    $('#divChar3').removeClass("active");
    //    $('#divChar4').removeClass("active");
    //    videoStopper("idanVideo");

    //});

    //$("#btnChar2").click(function () {
    //    $('#openChars').removeClass("hidden");
    //    $('#divChar2').addClass("active");
    //    $('#divChar1').removeClass("active");
    //    $('#divChar3').removeClass("active");
    //    $('#divChar4').removeClass("active");
    //    videoStopper("idanVideo");
    //});


    //$("#btnChar3").click(function () {
    //    $('#openChars').removeClass("hidden");
    //    $('#divChar3').addClass("active");
    //    $('#divChar1').removeClass("active");
    //    $('#divChar2').removeClass("active");
    //    $('#divChar4').removeClass("active");
    //    videoStopper("idanVideo");
    //});


    //$("#btnChar4").click(function () {
    //    $('#openChars').removeClass("hidden");
    //    $('#divChar4').addClass("active");
    //    $('#divChar1').removeClass("active");
    //    $('#divChar2').removeClass("active");
    //    $('#divChar3').removeClass("active");
    //    videoStopper("idanVideo");
    //});

    //Event for pushed the video
        $('#carouselExampleControls').carousel({
        pause: true,
            interval: false

        });
    $('#myCarousel').on('slide.bs.carousel', function () {
        direction: "left";
    })




$('.round').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});

});




