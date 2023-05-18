fetch("https://api.ipify.org/?format=json")
.then((response) => response.json())
.then((data) => {
    const ipAddress = data.ip;
    alert("Your IP address is: " + ipAddress);
})