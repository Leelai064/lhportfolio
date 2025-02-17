//Type.js descriptions
var typed = new Typed("#typed",{
    strings:[
        'Full Stack Developer',
        'Mechanical Engineer',
        'CAD Designer',
        'Aspiring UX/UI Developer',
        'Florida Institue of Technology alumni'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

//Scrollable Landing Banner

$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window),scrollTop()>280){
            $('#navBar').addClass('fixedNavbar');
        }
        if($(window),scrollTop()>280){
            $('#navBar').removeClass('fixedNavbar');
        }
    });
});
var magicLinks = document.querySelectorAll(".magic a");
for(var i =0; i < magicLinks.length; i++){
magicLinks[i].addEventListener('click',(event)=>{
    event.preventDefault();
    showAndHideOthers(event.target.getAttribute("href"));

    document.querySelector(".magic .is-active a").parentElement.classList.remove("is-active");
    event.target.parentElement.classList.add("is-active");
});
}

//button variables
function showAndHideOthers(shownID){
  var containerArray = ["#Overview","#About","#Experience","#Skills","#Projects"];
  for (var i = 0; i < containerArray.length; i++){
//hides everything
    document.querySelector(containerArray[i]).style.display = "none";

  }
//shows only one of the containers
  document.querySelector(shownID).style.display = "block";

}

// project photo gallery for UPENN

var projectMagicLinks = document.querySelectorAll(".projectmagic a");
for (var i=0; i< projectMagicLinks.length; i++){
projectMagicLinks[i].addEventListener('click',(event)=>{
    event.preventDefault();
    showAndHideProjects(event.target.getAttribute("href"));

    document.querySelector(".projectmagic .is-active a").parentElement.classList.remove("is-active");
    event.target.parentElement.classList.add("is-active");
});
}
// Project array variables
function showAndHideProjects(shownID){
    var containerProjectArray = ['#webDev', '#fitEng', '#projects'];
    for (var i = 0; i< containerProjectArray.length; i++){
        document.querySelector(containerProjectArray[i]).style.display = "none";
    }
    document.querySelector(shownID).style.display = "block";
}

// Project Gallery ends here

//Burger Menu function

const toggleBurgerMenu = () => {
    let burgerIcon = document.getElementById('burgerMenu');
    let dropDownMenu = document.getElementById('navbarMenuHeroA');
    burgerIcon.classList.toggle('is-active');
    dropDownMenu.classList.toggle('is-active');
};


//Skills Page starts here

// const buttons = document.querySelectorAll('.project');
// const overlay = document.querySelector('.overlay');
// const overlayImage = document.querySelector('.overlay__inner img');

// function open(e) {
//   overlay.classList.add('open');
//   const src= e.currentTarget.querySelector('img').src;
//   overlayImage.src = src;
// }

// function close() {
//   overlay.classList.remove('open');
// }

// buttons.forEach(button => button.addEventListener('click', open));
// overlay.addEventListener('click', close);
