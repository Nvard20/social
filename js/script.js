let lang = document.documentElement.lang;
let temp = true;
let text_1 =  document.querySelector('#text_1');
let text_2 =  document.querySelector('#text_2');
let text_3 =  document.querySelector('#text_3');

let arrow = document.getElementById("arrow");

if(lang === 'ko'){
    document.getElementById("arrow").style.display = "flex";
    document.querySelector('.menu').style.display = "none";
    text_1.innerHTML = "충전";
    text_2.innerHTML = "스포츠배팅룰";
    arrow.addEventListener("click", function(){
         temp = !temp; 
      if(!temp){ 
        document.querySelector('.menu').style.display = "block";
        document.querySelector('.korean-soc').style.display = "flex";
        document.querySelector(".arrow-img").classList.add("rotate");
      }else{
        document.querySelector('.menu').style.display = "none";
        document.querySelector('.korean-soc').style.display = "none";
        document.querySelector(".arrow-img").classList.remove("rotate");

      } 
    });
    text_1.classList.add("link-ko");
    text_2.classList.add("link-ko");
    text_3.classList.add("link-ko");


}
