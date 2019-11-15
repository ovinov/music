let portfolioitem = [{
    "id": 1,
    "img": "pic/4.jpg",
    "text":"Участие в организации театральной постановки «История синего Морфо»"
},
{
    "id": 2,
    "img": "pic/5.jpg",
    "text":"Музыкальный альбом <br>«Люблю Бетмена»"
},
{
    "id": 3,
    "img": "pic/6.jpg",
    "text":"Работа со звуком в фильме «Типа крутые легавые»"
},
{
    "id": 4,
    "img": "pic/7.jpg",
    "text":"Работа на концерте <br> Enrico Matassa"
},
{
    "id": 5,
    "img": "pic/8.jpg",
    "text":"Саунд дизайн для игры <br>«Grace Of Pain»"
},
{
    "id": 6,
    "img": "pic/9.jpg",
    "text":"Игра на бас гитаре в группе «Неглубокая могилка»"
},
{
    "id": 7,
    "img": "pic/6.jpg",
    "text":"Игра на бас гитаре в группе «Неглубокая могилка»"
},
{
    "id": 8,
    "img": "pic/4.jpg",
    "text":"Участие в организации театральной постановки «История синего Морфо»"
},
{
    "id": 9,
    "img": "pic/8.jpg",
    "text":"Саунд дизайн для игры <br> «Grace Of Pain»"
},
{
    "id": 10,
    "img": "pic/9.jpg",
    "text":"Работа со звуком в фильме «Типа крутые легавые»"
},
{
    "id": 11,
    "img": "pic/7.jpg",
    "text":"Музыкальный альбом <br> «Люблю Бетмена»"
},
{
    "id": 12,
    "img": "pic/5.jpg",
    "text":"Работа на концерте <br> Enrico Matassa"
}
],
div = document.getElementsByClassName("portfolio_photo"),
p = document.querySelectorAll(".portfolio_photo>div>p"),
adding = 0,
uploadPotfolio =(pos)=>{
    adding = adding + pos
   if(adding > 6){
     adding = 0
   }
   if(adding<0){
       adding = 6
   }
    for (let i = 0; i < div.length; i++) {
 div[i].style.backgroundImage =`url(${portfolioitem[i+adding].img})`
 p[i].innerHTML =`${portfolioitem[i+adding].text}`
 
}}
  uploadPotfolio(0)