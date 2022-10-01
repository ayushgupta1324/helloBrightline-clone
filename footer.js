let containerFooter=document.querySelector("#containerFooter")

let divLeft=document.createElement("div");

let divRight=document.createElement("div");


let divL1=document.createElement("div")
divL1.style.backgroundColor="pink"
divL1.style.height="100px";


let h2=document.createElement("h2");
h2.innerText="Join our newsletter";

let p=document.createElement("p");
p.innerText="We're growing fast.Sign up for news and updates!"

let subEmail=document.createElement("input")
subEmail.type="email";
subEmail.placeholder="Your email";

subEmail.placeholder.innerHTML=<i class="fa-duotone fa-greater-than"> </i>;


divL1.append(h2,p,subEmail);



/************************************************** */
/******************************************************* */

let iconDiv=document.createElement("div")
iconDiv.className="iconDiv"


let iconArr=
[
    {logo:`<i class="fa-brands fa-square-facebook"></i>`,link:"https://www.facebook.com/hellobrightline"},
    {logo:`<i class="fa-brands fa-square-twitter"></i>`,link:"https://twitter.com/hellobrightline"},
    {logo:`<i class="fa-brands fa-square-instagram"></i>`,link:"https://www.instagram.com/hellobrightline/"},
    {logo:`<i class="fa-brands fa-linkedin"></i>`,link:"https://www.linkedin.com/company/hellobrightline/"}

]


iconArr.forEach(function(el)
{
    

    let btn=document.createElement("button");
    btn.innerHTML=el.logo
    btn.style.backgroundColor="transparent";
    btn.style.border="none";
    
    let anchor=document.createElement("a")
    anchor.href=el.link;

    anchor.append(btn);
    iconDiv.append(anchor);
})

divLeft.append(divL1,iconDiv)
containerFooter.append(divLeft,divRight)