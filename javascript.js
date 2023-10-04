CountDownTimer('11/02/2023 10:00 AM', 'countdown');
    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);
        var sec = 1000;
        var min = sec * 60;
        var hour = min * 60;
        var day = hour * 24;
        var timer;
        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {
                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';
                return;
            }
            var days = Math.floor(distance / day);
            var hours = Math.floor((distance % day) / hour);
            var minutes = Math.floor((distance % hour) / min);
            var seconds = Math.floor((distance % min) / sec);

            document.getElementById(id).innerHTML = days + 'jours ';
            document.getElementById(id).innerHTML += hours + 'heures ';
            document.getElementById(id).innerHTML += minutes + 'min ';
            document.getElementById(id).innerHTML += seconds + 'sec ';
        }

        timer = setInterval(showRemaining, 1000);
    }
    function onhover(){
    	var element = document.getElementById("hover");
    	element.style.backgroundColor = "#A5F3AD";
    }
    function notonhover(){
    	var element = document.getElementById("hover");
    	element.style.backgroundColor = "#FDAEEE";
    }