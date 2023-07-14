function changeImage()
{
    var pic=document.getElementById("bulb");
    if(pic.src.match("offbulb"))
    {
        console.log("OFF");
        pic.src="onbulb.jpg";
    }
    else
    {
        console.log("ON");
        pic.src="offbulb.jpg";
    }
}