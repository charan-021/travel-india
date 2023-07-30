const icon = document.querySelector('.icon');
const arrow = document.querySelector('.arrow');
const back_text=document.getElementById("back_text");
back_text.onmouseover = back_arrow;
back_text.onmouseout = back_arrow_hide;
function back_arrow()
{
    back_text.style.marginLeft = "0.7rem";
    arrow.style.visibility = "visible"
    arrow.animate([{left: '0'},{left: '7px'},{left: '0'}],{duration: 700, iterations: 1})
    back_text.style.transition = "all 0.5s cubic-bezier(0.68,-0.55,0.265,1.55)";   
}
function back_arrow_hide(){
    arrow.style.visibility = "hidden"
    back_text.style.marginLeft = "0rem";
    back_text.style.transition = "all 0.5s cubic-bezier(0.68,-0.55,0.265,1.55)";
}