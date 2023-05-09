javascript:(function () {
const dialogStyles = `.dialog-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
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
const style = document.createElement('style');
style.textContent = dialogStyles;
document.head.appendChild(style);

// Create dialog container element
const dialogContainer = document.createElement('div');
dialogContainer.classList.add('dialog-container');
dialogContainer.style.display = 'block';

// Create dialog box element
const dialogBox = document.createElement('div');
dialogBox.classList.add('dialog-box');
dialogContainer.appendChild(dialogBox);

// Create dialog title element
const dialogTitle = document.createElement('h2');
dialogTitle.classList.add('dialog-title');
dialogTitle.textContent = 'Extended Executor';
dialogBox.appendChild(dialogTitle);

// Create dialog content element
const dialogContent = document.createElement('p');
dialogContent.classList.add('dialog-content');
dialogContent.innerHTML = `Javascript executor that can run scripts above the 2048 character limit of urls/bookmarklet <br> Made by <a href="https://www.github.com/xShadowBlade">xShadowBlade</a> <br> Paste script here: <br><input id = "inputWIJSJFN"></input><br><button id="initScriptJSALDKW">Run Script</button>`;
dialogBox.appendChild(dialogContent);

// Create close button element
const closeButton = document.createElement('button');
closeButton.classList.add('close-button');
closeButton.textContent = 'Close';
dialogBox.appendChild(closeButton);

// Add event listener to open dialog button
// const openDialogButton = document.getElementById('open-dialog-btn');
// openDialogButton.addEventListener('click', () => {
// dialogContainer.style.display = 'block';
// });

// Add event listener to close button
closeButton.addEventListener('click', () => {
dialogContainer.style.display = 'none';
});

// Add dialog container element to the document body
document.body.appendChild(dialogContainer);
document.getElementById("initScriptJSALDKW").addEventListener("click", () => {
    function decodeURISearchAndReplace(str) {
        const regex = /%([0-9A-Fa-f]{2})/g; // Regular expression to match URI-encoded characters
        const decoded = str.replace(regex, (match, p1) => String.fromCharCode(parseInt(p1, 16))); // Decode URI-encoded characters
        return decoded;
    }
    let input = inputWIJSJFN.value;
    console.log(input);
    input = decodeURISearchAndReplace(input);
    console.log(input);
    function cspEval(js) {
        var script = document.createElement("script");
    
        // No Blob ? No CSP !
        if (Blob) {
            var blob = new Blob([js], {"type": "application/javascript"});
            script.src = URL.createObjectURL(blob);
        } else {
            var dataUri = "data:application/javascript," + js;
            script.src = dataUri;
        }
    
        var callback = function() { document.body.appendChild(script) };
        document.readyState === "complete" ? callback() : window.onload = callback;
    }
    cspEval(input);
});
})();