window.onload = function () {
    clockTimer()
    //stopWatch()
    //setTimeout("clockTimer()", 1000);
}


function setBackground(currentHour) {

    curTime = currentHour;

    let video = document.querySelector('.video__media');

    if (currentHour >= 0 && currentHour <= 5) {
        video.setAttribute("src", "video/" + "sleep.mp4");
    }
    if (currentHour >= 6 && currentHour <= 11) {
        video.setAttribute("src", "video/" + "morning.mp4");
    }
    else if (currentHour >= 12 && currentHour <= 17) {
        video.setAttribute("src", "video/" + "day.mp4");
    }
    else if (currentHour >= 18 && currentHour <= 20) {
        video.setAttribute("src", "video/" + "evening.mp4");
    }
    else if (currentHour >= 21 && currentHour <= 22) {
        video.setAttribute("src", "video/" + "sunset.mp4");
    }
    else if (currentHour >= 23 && currentHour <= 24) {
        video.setAttribute("src", "video/" + "night.mp4");
    }

}

var curTime = -1;
function clockTimer() {
    let date = new Date();

    let time = [date.getHours(), date.getMinutes(), date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
    let dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    let days = date.getDay();

    if (time[0] < 10) { time[0] = "0" + time[0]; }
    if (time[1] < 10) { time[1] = "0" + time[1]; }
    if (time[2] < 10) { time[2] = "0" + time[2]; }

    let current_time = [time[0], time[1], time[2]].join(':');
    let clock = document.getElementById("clock");
    let day = document.getElementById("dayOfWeek");

    clock.innerHTML = current_time;
    day.innerHTML = dayOfWeek[days];

    //curTime = time[0];

    if (time[0] != curTime) {
        setBackground(time[0]);
    }

    setTimeout("clockTimer()", 1000);

    let month = document.querySelector(".month");
    let Dateday = document.querySelector(".Dateday");
    let year = document.querySelector(".year");
    let dateNew = new Date();

    let months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ];
    month.innerHTML = dateNew.getDate() + " " + months[dateNew.getMonth()];
    // Dateday.innerHTML = dateNew.getDate() + " " + ;
    year.innerHTML = date.getFullYear() + " года";

}


var minutes = 0;
var seconds = 0;
var milliseconds = 0;

function tickStopWatch(status) {

    if (status == "play") {
        milliseconds += 100;
        if (milliseconds == 1000) {
            milliseconds = 0;

            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
        }

        let time = [minutes, seconds, milliseconds];

        if (milliseconds == 0) {
            var current_watchtime = [time[0], time[1], "000"].join(':');
        } else {
            var current_watchtime = [time[0], time[1], time[2]].join(':');
        }

        let stopWatch = document.getElementById("stopwatch");
        stopWatch.innerHTML = current_watchtime;

        setTimeout("tickStopWatch('play')", 100);
    }
    else if (status == "pause") {

    }
}


document.getElementById('start-stop').addEventListener('click', modeStopWatch);

var curMode = "play";
function modeStopWatch() {


    if (curMode == "play") {
        document.getElementById('flag-reset').className = "";

        tickStopWatch("play");
        curMode = "pause";
        //setTimeout(tickStopWatch("play"), 100);
    }
    else if (curMode == "pause") {
        tickStopWatch("pause");
        curMode = "play";
    }

}




// document.querySelector('.headerEl').addEventListener('click', chooseTab);

// function chooseTab() {

//     alert(this.innerHTML)
//     if (this.innerHTML.span == "Часы") {
//         alert("ДАДА")
//     }
//     //document.querySelector('.header__clock').className = 'header__clock headerEl activeTab';
//     // document.querySelector('.header__stopwatch ').className = 'header__stopwatch headerEl';
//     //document.querySelector('.header__timer').className = 'header__timer headerEl';
//     //alert(this);

// }



document.querySelector('.header__clock').addEventListener('click', chooseClock);

function chooseClock() {

    document.querySelector('.header__clock').className = 'header__clock headerEl activeTab';
    document.querySelector('.header__stopwatch ').className = 'header__stopwatch headerEl';
    document.querySelector('.header__timer').className = 'header__timer headerEl';
    //alert(this);

    document.querySelector('.main__clock').className = 'main__clock';
    document.querySelector('.main__stopwatch').className = 'main__stopwatch hiden';
    document.querySelector('.main__timer').className = 'main__timer hiden';
}

document.querySelector('.header__stopwatch').addEventListener('click', chooseStopwatch);

function chooseStopwatch() {

    document.querySelector('.header__clock').className = 'header__clock headerEl';
    document.querySelector('.header__stopwatch ').className = 'header__stopwatch headerEl activeTab';
    document.querySelector('.header__timer').className = 'header__timer headerEl';
    //alert(this);
    document.querySelector('.main__clock').className = 'main__clock hiden';
    document.querySelector('.main__stopwatch').className = 'main__stopwatch';
    document.querySelector('.main__timer').className = 'main__timer hiden';

}

document.querySelector('.header__timer').addEventListener('click', chooseTimer);

function chooseTimer() {

    document.querySelector('.header__clock').className = 'header__clock headerEl';
    document.querySelector('.header__stopwatch ').className = 'header__stopwatch headerEl';
    document.querySelector('.header__timer').className = 'header__timer headerEl activeTab';
    //alert(this);
    document.querySelector('.main__clock').className = 'main__clock hiden';
    document.querySelector('.main__stopwatch').className = 'main__stopwatch hiden';
    document.querySelector('.main__timer').className = 'main__timer';

}

document.querySelector('.footerEl').addEventListener('click', changeVideo);


function changeVideo() {
    document.querySelector('.footer__clock').className = 'footer__clock footerEl ativeTab';
    let video = document.querySelector('.video__media');
    video.setAttribute("src", "video/" + "night.mp4");
}
//element.setAttribute(name, value);


