// function difference(first,sec){
//     return Math.abs(first-sec);
//   }
  
//   document.getElementById("navbar").addEventListener("scroll", function() {
//     var diff = difference((this.scrollTop+this.clientHeight),(this.scrollHeight));
     
//      if(diff < 5) {
//         alert('Scroll Ends Here');
//       }
//   });

let about=document.querySelector("#about");
// let employer=document.querySelector("#employer");
// let families=document.querySelector("#families");
// let careers=document.querySelector("careers");

about.addEventListener("click", expandAbout);
let navbar=document.querySelector("#navbar");

function expandAbout()
{
    console.log("inside");
//create div
let aboutContainer=document.createElement("div");
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
aboutElements.append(btn1,btn2,btn3,btn4,btn5);

aboutContainer.append(aboutInfo,aboutElements);
aboutContainer.style.display="flex";



navbar.append(aboutContainer);

}