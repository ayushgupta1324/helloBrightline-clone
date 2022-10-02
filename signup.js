let form=document.querySelector("form");

let formDetails=JSON.parse(localStorage.getItem("signUpDetails")) || []

form.addEventListener("submit",addDetails)
form.addEventListener("submit",newWindow)
function newWindow()
{
    window.open("index.html");
}


function addDetails(event)
{
    event.preventDefault();
    let signUpDetails=
    {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        psd:document.querySelector("#psd").value,
    }
    formDetails.push(signUpDetails);
    localStorage.setItem("signUpDetails", JSON.stringify(formDetails));
}