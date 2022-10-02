let signInData=JSON.parse(localStorage.getItem("signUpDetails")) || [];

logInBtn.addEventListener("click",function(event)
{

    event.preventDefault();

    let email=document.querySelector("#mail").value;
    let psd=document.querySelector("#psd").value;
    console.log(email,psd)
    for(let i=0;i<signInData.length;i++)
    {   

        if(signInData[i].email==email && signInData[i].psd==psd)
        {
                alert("Login Success")
                window.open("index.html")
                return
        }
    }
            alert("Wrong Credentials")
            
})

