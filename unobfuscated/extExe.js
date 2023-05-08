javascript:(async function () {        
    await fetch("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js").then(res => res.text()).then(res => Function(res)());
    await fetch("https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.js").then(res => res.text()).then(res => Function(res)());           
    var myStylesLocation = "https://code.jquery.com/ui/1.13.0-alpha.1/themes/smoothness/jquery-ui.css";
    const dialogStyles = `.dialog-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.dialog-box {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    width: 90%;
}

.dialog-title {
    margin-top: 0;
}

.dialog-content {
    margin: 20px 0;
}

.close-button {
    background-color: #e0e0e0;
    border: none;
    border-radius: 5px;
    color: #333;
    padding: 10px 20px;
    cursor: pointer;
}

.close-button:hover {
    background-color: #ccc;
}`;
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.type = "text/css";
    styles.href = myStylesLocation;
    document.head.appendChild(styles);

    const div = document.createElement("div");
    div.id = "dialog";
    div.title = "Extended Executer";
    div.style = "border:none; background-color:white; font-size:80%";
    document.body.appendChild(div);

    div.innerHTML = `Javascript executor that can run scripts above the 2048 character limit of urls/bookmarklet <br> Made by <a href="https://www.github.com/xShadowBlade">xShadowBlade</a> <br><input id = "input"></input><br><button id="initScript">Run Script</button>`;

    $("#dialog").dialog();
    document.getElementById("initScript").addEventListener("click", () => {
        
    });    
})();