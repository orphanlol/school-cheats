(function() {
    const presets = [
        {
            name: "Google Classroom",
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
    const prompt1 = prompt("What should the title be? (type numbers for presets) \n");
})();