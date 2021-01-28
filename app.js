var but=document.querySelectorAll("button");
var winner,clicked,random,comp,user,images,computer,u=0,c=0;
for(var i=0;i<but.length;i++){
    but[i].addEventListener("click",function(){
        clicked=this.innerHTML;
        handleClick();
    })
}
function handleClick(){
    user=clicked+".png";
    images=document.querySelectorAll("img");
    images[0].setAttribute("src",user);
    random=Math.floor(Math.random()*3);
    handleComp();
}
function handleComp(){
    switch(random){
        case 0:
            comp="Rock";
            break;
        case 1:
            comp="Paper";
            break;
        case 2: 
            comp="Scissor";
            break; 
    }
    computer=comp+".png";
    images[1].setAttribute("src",computer);
    if((comp==="Rock" && clicked==="Scissor") || (comp==="Scissor" && clicked==="Paper") || (comp==="Paper" && clicked==="Rock"))
        {winner="Computer Wins!!";
        c++;
        document.querySelector("#compScore").innerHTML="Computer "+c;
        }
    else if(comp===clicked) winner="Draw";
    else {winner="User Wins!!";
    u++;
    document.querySelector("#userScore").innerHTML="User "+u;}
    document.querySelector("#winner").innerHTML=winner;
    
}