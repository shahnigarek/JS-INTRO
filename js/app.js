var hour=new Date().getHours();
console.log(hour)

if(hour>=6 && hour<=12){
    alert('Good morning :)')
    document.body.style.backgroundColor="lightblue"
}
else if(hour>12 && hour<=18){
    alert('Good afternoon')
    document.body.style.backgroundColor='yellow'

}
else if(hour>18 || hour<6){
    alert('Good evening')
    document.body.style.backgroundColor='black'

}


