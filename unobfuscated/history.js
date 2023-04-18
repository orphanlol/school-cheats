let num = 3;
done = false;
x = "https://www.youtube.com";
for (let i = 1; i <= num; i++) {
    history.pushState(0, 0, i == num ? x : i.toString());
    if (i == num) done = true;
}
if (done == true) {
    // alert("History Flooding Successful!\n "+window.location.href+" \nNow Appears In Your History "+num+(num==1?" time.":" Times. \nMade By: Utopia"))
    let a = document.createElement("a");
    a.href = "https://www.youtube.com/watch?v=xMHJGd3wwZk";
    document.body.appendChild(a);
    a.click(); 
}