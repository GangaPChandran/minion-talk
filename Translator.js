var button=document.querySelector("#btn");
var txtInput=document.querySelector("#inputText");
var outputDiv=document.querySelector("#outputText");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function clickHandler(event)
{
   fetch(getTranslationURL(txtInput.value))
     .then(response => response.json())
     .then(json => {
          outputDiv.innerText=json.contents.translated;
         })
     .catch(() =>  alert("Error struck,try again later"))
}
function getTranslationURL(input)
{
    return serverURL+"?"+"text="+input
}
button.addEventListener("click",clickHandler);
