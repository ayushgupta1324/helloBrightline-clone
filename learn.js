
let learnData=
[
    {
        imgLearn:"https://images.ctfassets.net/96gdpqkm7elu/3WitkjGbQ7G2AFZqkVinta/0581cfdfdd2cd2ddd40253d7c5d10fb4/Depression_Blog_Post_Blog_Hero_1200x628_27ac48bbf5.jpg?w=2501&h=1309&fit=crop&fm=webp&q=90",
        catLearn:`FOR EMPLOYERS & PLANS`, dateLearn:"JAN 11, 2022",
        linkHeading:`Children and depression: Why Brightline’s blended care model works`,
        siteLearn:"https://www.hellobrightline.com/blog/brightline-effective-pediatric-depression"
    },
    {
        imgLearn:"https://images.ctfassets.net/96gdpqkm7elu/7tw6sKHr3OrKk4uozn1HS/d2f6becc5f48bc46e66895eacba511e9/Brightline_Series_B_81e34e2e5d.jpg?w=1200&h=628&fit=crop&fm=webp&q=90",
        catLearn:`FOR EMPLOYERS & PLANS`, dateLearn:"AUG 24, 2021",
        linkHeading:`In an age of anxiety, Brightline can help families deal with fear and worry`,
        siteLearn:"https://www.hellobrightline.com/blog/anxiety-outcomes-pediatric"
    },
    {
        imgLearn:"https://images.ctfassets.net/96gdpqkm7elu/661TKtcwYkNU33aA5wAAtR/2a1cb2d7179f24ff8b5683b92d651561/Blog_Hero_d615bcaa68.png?w=1201&h=629&fit=crop&fm=webp&q=90",
        catLearn:`FOR FAMILIES`, dateLearn:"JAN 6, 2022",
        linkHeading:`Sleep Made Simple: How to get your kids (and yourself!) better sleep`,
        siteLearn:"https://www.hellobrightline.com/blog/sleep-made-simple-kids-families"
    },

]

let containerLearn=document.querySelector("#containerLearn");
containerLearn.className="containerLearn";


learnData.forEach(function(el)
{
let anchor=document.createElement("a");
anchor.href=el.siteLearn
anchor.style.textDecoration="none";
anchor.style.color="#2C333F"

let divChild=document.createElement("div")

let imgLearn=document.createElement("img")
imgLearn.src=el.imgLearn

let innerChild=document.createElement("div");
innerChild.className="innerChild";

let catLearn=document.createElement("p")
catLearn.innerText=el.catLearn

let dateLearn=document.createElement("p")
dateLearn.innerText=el.dateLearn;

let linkHeading=document.createElement("p")
linkHeading.innerText=el.linkHeading;

innerChild.append(catLearn,dateLearn);
divChild.append(imgLearn,innerChild,linkHeading);
anchor.append(divChild);
containerLearn.append(anchor);

})