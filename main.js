 
let randomEqualizer=()=>{ return (Math.ceil(Math.random()*(60-20+20))+20)},
    list = document.getElementsByClassName("equalaizer_item"),
    x = -1,
    logo =document.getElementsByClassName("navbar_logo"),
    switcher = document.getElementsByClassName("navbar_switch"),
    navbarName = document.querySelectorAll(".navbar-wrapper>h6"),
    bigSwitcher = document.getElementsByClassName("second-photo_switch"),
    main = document.getElementsByClassName("main")[0],
    equalizer = document.getElementsByClassName("wrapper-equalaizer")[0],
    about = document.getElementsByClassName("about_photo")[0],
    aboutsecond = document.getElementsByClassName("about_second-photo")[0],
    contact = document.getElementsByClassName("contact")[0],
    portfolio = document.getElementsByClassName("wrapper-portfolio")[0],
    screenHeight = 0,
    switcherTurn=(switcher,min,max,color)=>{
        let colors = color || "#ff3333";
        if(min<screenHeight && screenHeight<max){
              switcher.style.background= colors
               switcher.style.transform ="rotate(60deg)"

        }
        else{
            switcher.style.background = "white"
            switcher.style.transform ="rotate(-60deg)"
        }
    },
    visability=(position,content)=>{
        if(position<screenHeight===true){
            content.classList.remove("invisible")
    }},
    nameVisible=(navbarnum)=>{
        navbarName[navbarnum].style.opacity="1"
        navbarName[navbarnum].style.left="0"
    }
    nameUnvisible=(navbarnum)=>{
        navbarName[navbarnum].style.opacity="0"
        navbarName[navbarnum].style.left="1vw"
    }
    note =(note)=>{
        notes = new Audio();
        notes.src=`note/${note}.mp3`;
        notes.volume =0.4;
       notes.play();
      }   
    window.onload = ()=>{
        main.classList.remove("invisible")
        equalizer.classList.remove("invisible")
      };
window.onscroll=()=>{
    screenHeight =Math.ceil(document.body.scrollTop/(document.documentElement.clientHeight )*100);
     if(screenHeight%4===0 ){
       x++
       list[x].style.width =randomEqualizer()
       if(x=== 26){
           x=-1
       }
    }
    if(10<screenHeight<30===true){
        visability(10,about),
        switcherTurn(switcher[0],20,60)
    } 
    if(30<screenHeight<60===true){
        visability(30,aboutsecond)
    }
    if(50<screenHeight<70===true){
        visability(50,portfolio)
        switcherTurn(bigSwitcher[0],40,55,"white")
        switcherTurn(switcher[1],60,71)
    } 
    if(70<screenHeight<90===true){
        switcherTurn(switcher[2],70,90)
    } 
}



