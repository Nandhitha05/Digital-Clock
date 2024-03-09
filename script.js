const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const day = document.getElementById('day');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const clock = setInterval(function() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
    day.textContent = `${d} ${months[m]} ${y}`;
    hour.textContent = h;
    min.textContent = minutes < 10 ? '0' + minutes : minutes; 
    sec.textContent = seconds < 10 ? '0' + seconds : seconds; 
}, 1000);
