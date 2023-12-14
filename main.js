document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < document.querySelectorAll('.year').length; i++)
     document.querySelectorAll('.year')[i].style.display = 'none';
 for (let i = 0; i < document.querySelectorAll('.my-img').length; i++) {
     document.querySelectorAll('.my-img')[i].addEventListener('mouseenter', () => {
     for (let j = 0; j < document.querySelectorAll('.year').length; j++)
     if (i == j) {
        document.querySelectorAll('.year')[j].style.display = 'block';
    }});
    document.querySelectorAll('.my-img')[i].addEventListener('mouseleave', () => {
            for (let j = 0; j < document.querySelectorAll('.year').length; j++)
            if (i == j) {
                document.querySelectorAll('.year')[j].style.display = 'none';
            }});
 }

 var menu = document.querySelector('.menu');
 var dropdown = document.querySelector('.dropdown');
 var ceva = document.querySelector('.ceva');

 menu.addEventListener('mouseover', function () {
     dropdown.style.display = 'block';
     ceva.style.backgroundColor = '#39913c';
 });

 menu.addEventListener('mouseout', function () {
     dropdown.style.display = 'none';
     ceva.style.backgroundColor = '';
 });

 

});

