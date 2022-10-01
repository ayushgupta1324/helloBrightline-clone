let cardArr=
[
{dateFeatured:"JUL 13 2022", newsOutlet:"FEATURED IN MEDCITY NEWS",logo:"https://images.ctfassets.net/96gdpqkm7elu/4uB56VI83NNAa328OLhu83/f7f138f65d3fc724353f0156ea629d28/medcity_news_logo_2121a3af9c.png?w=629&h=159&fit=crop&fm=png&q=90",headline:`"Northwell pours $10M into Brightline as it, other providers aim to address pediatric mental health crisis"`, btn:"Read more", siteLink:`https://medcitynews.com/2022/07/northwell-pours-10m-into-brightline-as-it-other-providers-aim-to-address-pediatric-mental-health-crisis/`},

{dateFeatured:"JUL 6 2022", newsOutlet:"FEATURED IN FORBES",logo:"https://images.ctfassets.net/96gdpqkm7elu/1TtpfeBJdrC5yul2OrzE7E/1cfc31c9b3c72a864988aa8aed2fe8c0/5847e9aacef1014c0b5e4828.png?w=400&h=159&fit=crop&fm=png&q=90",headline:`"InnovationRx: Teens And Mental Health; Plus, ‘All-In-One’ Vaccine"`, btn:"Read more ", siteLink:`https://www.forbes.com/sites/katiejennings/2022/07/06/innovationrx-teens-and-mental-health-plus-all-in-one-vaccine/?sh=145e763157ec`},

{dateFeatured:"JUN 22 2022", newsOutlet:"FEATURED IN FORTUNE",logo:"https://images.ctfassets.net/96gdpqkm7elu/4HjPOqG6q7KRxl9URjiulz/e244d69d1a4d83858f4cf529ac1bdd30/logo.png?w=1500&h=358&fit=crop&fm=png&q=90",headline:`"Most Americans are still choosing virtual visits for their mental health care. Experts say that’s here to stay"`, btn:"Read more", siteLink:`https://fortune.com/2022/06/22/most-americans-prefer-virtual-visits-for-their-mental-health-care/`},

{dateFeatured:"JUL 6 2022", newsOutlet:"FEATURED IN FORBES",logo:"https://images.ctfassets.net/96gdpqkm7elu/1TtpfeBJdrC5yul2OrzE7E/1cfc31c9b3c72a864988aa8aed2fe8c0/5847e9aacef1014c0b5e4828.png?w=400&h=159&fit=crop&fm=png&q=90",headline:`"InnovationRx: Teens And Mental Health; Plus, ‘All-In-One’ Vaccine"`, btn:"Read more", siteLink:`https://fortune.com/2022/06/22/most-americans-prefer-virtual-visits-for-their-mental-health-care/`},
]

let gridCard=document.querySelector(".gridCard");


cardArr.forEach(function(el,i)
{


    let card=document.createElement("div");
    card.classList.add('card', 'swiper-wrapper')
    if(i%2==0)
    {
        card.style.backgroundColor="#FFD95D"
    }
    else{
        card.style.backgroundColor="#FFF28B"
 
    }
    
    let date=document.createElement("p");
    date.innerText=el.dateFeatured;

    let newsOutlet=document.createElement("p");
    newsOutlet.innerText=el.newsOutlet;

    let logo=document.createElement("img");
    logo.src=el.logo;
    logo.style.width="90%"
    logo.style.height="70px"
    
    let headline=document.createElement("p")
    headline.innerText=el.headline;
    headline.className="newsHeadline";
  

    let btn=document.createElement("button")
    btn.innerText=el.btn;
    btn.className="newsBtn"
    
    let siteLink=document.createElement("a");
    siteLink.href=el.siteLink;



    siteLink.append(btn);

    card.append(date,newsOutlet, logo, headline,siteLink);

    gridCard.append(card)
})
