javascript:(async function () {        
    await fetch("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js").then(res => res.text()).then(res => Function(res)())
    await fetch("https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.js").then(res => res.text()).then(res => Function(res)())           
    var myStylesLocation = "https://code.jquery.com/ui/1.13.0-alpha.1/themes/smoothness/jquery-ui.css";                
    $(`<link rel="stylesheet" type="text/css" href="${myStylesLocation}">`).appendTo("head");                
    $(`<div id='dialog'; title='General GUI'; style='border:none; background-color:white; font-size:80%'; <p>General all-purpose GUI with hacks for your favorite games ;) <br> Made by <a href="https://www.github.com/xShadowBlade">xShadowBlade</a> <br><button id="initGUIab">Initiate Script</button></p></div>`).appendTo("body");                
    $("#dialog").dialog();      
    $("#initGUIab").addEventListener("click", () => {

    });    
})();