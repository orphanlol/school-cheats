(function() {
    // To get favicon urls, visit https://s2.googleusercontent.com/s2/favicons?domain={Domain Here} or add favicon.ico to the end ex. 
    const presets = [
        {
            name: "New Tab",
            icon: ""
        },
        {
            name: "Classes",
            icon: "https://ssl.gstatic.com/classroom/favicon.png"
        },
        {
            name: "My Drive - Google Drive",
            icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"
        },
        {
            name: "Google Docs",
            icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico"
        },
        {
            name: "Google Slides",
            icon: "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico"
        }
    ];
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
    let presetPrompt = ``;
    for (let i = 0; i < presets.length; i++) {
        const x = presets[i];
        presetPrompt += `\n ${i}: ${x.name}` // Ex. \n 1: Google Classroom
    }
    const prompt1 = prompt(`What should the title be? (type numbers for presets) ${presetPrompt}`);
    if (!isNaN(parseInt(prompt1))) {
        disguise(presets[parseInt(prompt1)]["name"], presets[parseInt(prompt1)]["icon"]);
    } else {
        const prompt2 = prompt("What should the icon url be? (leave blank for nothing)");
        disguise(prompt1, prompt2);
    }
    alert("To get icon urls, visit https://s2.googleusercontent.com/s2/favicons?domain={Domain Here}. Note icons may take a bit to load.");
})();