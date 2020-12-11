var Button=document.querySelector("#btn");
var txtInput=document.querySelector("#inputText");
var outputDiv=document.querySelector("#outputText");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input)
{
   return serverURL+"?"+"text="+input
}
function errorHandler(error)
{
   console.log("error is",error);
   alert("Error struck,try again later")
}
function clickHandler(event)
{
   var inputText=txtInput.value;
   var finalURL=getTranslationURL(inputText);
   fetch(finalURL)
     .this(response => response.json())
     .this(json =>{ outputDiv.innerText=json.contents.translated;})
     .catch(errorHandler())
};
Button.addEventListener("click",clickHandler);
