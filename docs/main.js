await fetch("https://raw.githubusercontent.com/xShadowBlade/school-cheats/main/README.md")
    .then(response => response.text())
    .then(markdown => {
        const container = document.getElementById("markdown-container");
        container.innerHTML = DOMPurify.sanitize(marked.parse(markdown));
    })
    .catch(error => console.error("Error fetching or rendering Markdown:", error));