var span1 = document.getElementsByClassName('span');
var div1 = document.getElementsByClassName('servicesss');
var l=0;
span1[1].onclick = ()=>{
    l++;
    for(var i of div1)
    {
        if(l==0) {i.style.left ="0px";}
        if(l==1) {i.style.left ="-320px";}
        if(l==2) {i.style.left ="-650px";}
        if(l==3) {i.style.left ="-980px";}
        if(l==4) {i.style.left ="-1310px";}
        if(l==5) {i.style.left ="-1640px";}
        if(l==6) {i.style.left ="-1970px";}
        if(l==7) {i.style.left ="-2300px";}
        if(l==8) {i.style.left ="-2630px";}
        if(l==9) {i.style.left ="-2960px";}
        if(l==10) {i.style.left ="-3290px";}
        if(l==11) {i.style.left ="-3620px";}
        if(l==12) {i.style.left ="-3950px";}
    

       // if(l>12) {l=13;}
       /* if(l==0) {i.style.left ="0px";}
        if(l==1) {i.style.left ="-740px";}
        if(l==2) {i.style.left ="-1480px";}
        if(l==3) {i.style.left ="-2220px";}
        if(l==4) {i.style.left ="-2960px";}
        if(l>4) {l=4;} */
    }
}

span1[0].onclick = ()=>{
    l--;
    for(var i of div1)
    {
        if(l==0) {i.style.left ="0px";}
        if(l==1) {i.style.left ="-320px";}
        if(l==2) {i.style.left ="-650px";}
        if(l==3) {i.style.left ="-980px";}
        if(l==4) {i.style.left ="-1310px";}
        if(l==5) {i.style.left ="-1640px";}
        if(l==6) {i.style.left ="-1970px";}
        if(l==7) {i.style.left ="-2300px";}
        if(l==8) {i.style.left ="-2630px";}
        if(l==9) {i.style.left ="-2960px";}
        if(l==10) {i.style.left ="-3290px";}
        if(l==11) {i.style.left ="-3620px";}
        if(l==12) {i.style.left ="-3950px";}
    

       // if(l>12) {l=13;}
       /* if(l==0) {i.style.left ="0px";}
        if(l==1) {i.style.left ="-740px";}
        if(l==2) {i.style.left ="-1480px";}
        if(l==3) {i.style.left ="-2220px";}
        if(l==4) {i.style.left ="-2960px";}
        if(l<0) {l=0;} */
    }
}