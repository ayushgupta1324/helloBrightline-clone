// function difference(first,sec){
//     return Math.abs(first-sec);
//   }
  
//   document.getElementById("navbar").addEventListener("scroll", function() {
//     var diff = difference((this.scrollTop+this.clientHeight),(this.scrollHeight));
     
//      if(diff < 5) {
//         alert('Scroll Ends Here');
//       }
//   });

let nav=document.querySelector("#navbar")

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) 
    {
        nav.className = '';
    }
     else
     {
        nav.className = 'scroll';
     }
  };



let employer=document.querySelector("#careers");
// let employer=document.querySelector("#employer");
// let families=document.querySelector("#families");
// let careers=document.querySelector("careers");

employer.addEventListener("click", expandAbout);
let navbar=document.querySelector("#navbar");

function expandAbout()
{
    console.log("inside");
//create div
let aboutContainer=document.createElement("div");
aboutContainer.style.padding="25px 1325px 25px 0"
aboutContainer.style.marginLeft="-60px"
aboutContainer.style.backgroundColor="#FFD95D";
aboutContainer.style.display="flex";
aboutContainer.style.justifyContent="flex-start";

let aboutInfo=document.createElement("div");
let aboutElements=document.createElement("div");

//about heading
let aboutHeading=document.createElement("h1")
aboutHeading.innerText="About"

//about para
let aboutPara=document.createElement("p");
aboutPara.innerText="Learn more about the leading family mental health solution."

//button 1
let btn1=document.createElement("button")
btn1.innerText="The Bright Experience";

//button 1
let btn2=document.createElement("button");
btn2.innerText="Our Approach";

//button 1
let btn3=document.createElement("button")
btn3.innerText="Our Research";

//button 1
let btn4=document.createElement("button")
btn4.innerText="About Us";

//button 1
let btn5=document.createElement("button")
btn5.innerText="Blog";


//append
aboutInfo.append(aboutHeading,aboutPara);
aboutElements.append(btn1,btn2,btn3);

aboutContainer.append(aboutInfo,aboutElements);



navbar.append(aboutContainer);

}