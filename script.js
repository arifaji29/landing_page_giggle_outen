
function toggleButton(){
    var menuToggle = document.querySelector('.menuToggle button');
    var nav = document.querySelector('nav ul');
    menuToggle.addEventListener('click', nav.classList.toggle('slide'));
}

function tombolRead(){
    var readM = document.getElementById('readMore')
    if (readM.style.display==='block'){
        readM.style.display='none';
    } else {
        readM.style.display='block'
        
    }
    
}

