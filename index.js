var cardH6 = document.querySelectorAll('.buttonBar h6');
var navI = document.querySelectorAll(".card-footer>img");
var dustImg = document.querySelectorAll('.card-body img');
var pImg = document.querySelector('.profileImg');
var tabList = document.querySelector('.leftNav ul')

var arrow = document.querySelectorAll(".arrowSign");

arrow.forEach(div => {
    div.innerHTML = "<h6> > </h6>";
})

cardH6.forEach(h6 => 
    {h6.classList.add('text-secondary')
    }
);

navI.forEach(img => {
    img.classList.add('navIcon')
})

dustImg.forEach(img => {
    img.classList.add('tabContentImg')
})

pImg.addEventListener('click', function(){
    tabList.classList.toggle('slideIn')
})

var navBtn = document.querySelectorAll(".leftNav ul .nav-link");
navBtn.forEach(button =>{
    button.addEventListener('click', function(){
        tabList.classList.remove('slideIn')
    })
})
 
