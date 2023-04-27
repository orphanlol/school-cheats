(function() {
    // To get favicon urls, visit https://s2.googleusercontent.com/s2/favicons?domain={Domain Here}
    const presets = [
        {
            name: "Classes",
            icon: ""
        },
        {
            name: "New Tab",
            icon: ""
        }
    ];
    function changeIcon(src) {
        var link = document.createElement('link'),
            oldLink = document.getElementById('dynamic-favicon');
        link.id = 'dynamic-favicon';
        link.rel = 'shortcut icon';
        link.href = src;
        if (oldLink) {
            document.head.removeChild(oldLink);
        }
        document.head.appendChild(link);
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
    const prompt1 = prompt(`What should the title be? (type numbers for presets) ${presetPrompt} \n More coming soon (make suggestions!)`);
    if (!isNaN(parseInt(prompt1))) {
        disguise(presets[parseInt(prompt1)]["name"], presets[parseInt(prompt1)]["icon"]);
    } else {
    const prompt2 = prompt("What should the icon url be? (leave blank for nothing)");
    disguise(prompt1, prompt2);
    }
})();