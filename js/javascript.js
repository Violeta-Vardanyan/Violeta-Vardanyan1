let th=document.querySelectorAll("th")
let month=document.querySelector(".month")
let td=document.querySelectorAll("td")
let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")
let main=document.querySelector("main")
let p=document.querySelector("p")

class Calendar {
  
    constructor(year, month){
        this.year=year;
        this.month=month;
             
    }
    
    get_days(){
       let date = new Date(this.year, this.month, 1);
      
        let days = [];
        while (date.getMonth() === this.month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
        
        }
        return days;
       
   }
           
  create(){
    let date = new Date(this.year, this.month, 1);
   
    p.innerHTML=this.year
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    month.innerHTML=months[date.getMonth()];

    let weather=["jen.jpg", "feb.jpg", "march.jpg", "april.jpg", "may.jpg", "jun.jpg", "juli.jpg", "ogos.jpg", "sep.jpg", "octob.jpg", "novem.png", "dec.jpg" ]
    for(let j=1; j<weather.length; j++){
      if(month.innerHTML==months[j]){
        //console.log(weather[j]=="feb.jpg");
        main.style.backgroundImage="url(img/weather[j]";
        main.style.backgroundSize="100% 100%";
        main.style.backgroundRepeat="no-repeat";
      }  
     
    }
      

    let dayss = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            for(let i=0; i<dayss.length; i++){
      th[i].innerHTML=dayss[i]  
}   

    for(let i=0; i<this.get_days().length; i++){
      td[date.getDay()-1+i].innerHTML=date.getDate()+i;
console.log(date.getDay());
      }    
     
 }

  }
  

let cal=new Calendar(2022,0)
cal.create()

//btn1.addEventListener("click", func1)  
btn2.addEventListener("click", func2) 

// function func1(){
  
// }
function func2(){
  let i=1;
  let cal=new Calendar(2022,i)
 
   cal.create()
   i++
   
}

