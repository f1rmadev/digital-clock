
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');


    const relogio = setInterval(function time(){
        let dateToday = new Date();
        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let s = dateToday.getSeconds(); 

        if(hr == 0) hr = '0' + hr;

        if(min == 0) hr = '0' + min;

        if(s == 0) hr = '0' + s;

        hours.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = s;
    })