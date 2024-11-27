function FontColorRed(){
    let t = document.getElementById("myH1");
    t.style.color="red";
}
function FontColorBlue(){
    let t = document.getElementById("myH1");
    t.style.color="Blue";
}
function FontColorGreen(){
    let t = document.getElementById("myH1");
    t.style.color="Green";
}
function FontColorPurple(){
    let t = document.getElementById("myH1");
    t.style.color="purple";
}
function FontColorYellow(){
    let t = document.getElementById("myH1");
    t.style.color="Yellow";
}
function FontColorCyan(){
    let t = document.getElementById("myH1");
    t.style.color="Cyan";
}
function FontColorOrange(){
    let t = document.getElementById("myH1");
    t.style.color="Orange";
}
function FontColorWhite(){
    let t = document.getElementById("myH1");
    t.style.color="White";
}
function FontColorGray(){
    let t = document.getElementById("myH1");
    t.style.color="Gray";
}
function FontColorIndigo(){
    let t = document.getElementById("myH1");
    t.style.color="Lightblue";
}
function FontColorBlack(){
    let t = document.getElementById("myH1");
    t.style.color="Black";
}
function FontColorPink(){
    let t = document.getElementById("myH1");
    t.style.color="Pink";
}
//background

function BackRed() {
    let t = document.getElementById("myH1");
    t.style.backgroundColor="red";
}
function BackBlue(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Blue";
}
function BackGreen(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Green";
}
function BackPurple(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="purple";
}
function BackYellow(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Yellow";
}
function BackCyan(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Cyan";
}
function BackOrange(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Orange";
}
function BackWhite(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="White";
}
function BackGray(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Gray";
}
function BackIndigo(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Lightblue";
}
function BackBlack(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Black";
}
function BackPink(){
    let t = document.getElementById("myH1");
    t.style.backgroundColor="Pink";
}

//styles
function Style1(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Jokerman";
}
function Style2(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Harrington";
}
function Style3(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Imprint MT Shadow";
}
function Style4(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Kristen ITC";
}
function Style5(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Magneto";
}
function Style6(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="STENCIL";
}
function Style7(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Tw Cen MT";
}
function Style8(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Segoe Print";
}
function Style9(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Rockwell Extra Bold";
}
function Style10(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Poor Richard";
}
function Style11(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="MV Boli";
}
function Style12(){
    let s = document.getElementById("myH1");
    s.style.fontFamily="Lucida Calligraphy";
}



function changeColorFromPicker() {
    let color = document.getElementById("colorPicker").value;
    let c = document.getElementById("myH1");
    c.style.color = color;
}

function changeColorFromPickers() {
    let color = document.getElementById("colorPickers").value;
    let c = document.getElementById("myH1");
    c.style.backgroundColor = color;
}

document.getElementById('Download1').addEventListener('click', function() {
    // Capture the content of the editable h1 element as an image
    html2canvas(document.getElementById('myH1')).then(function(canvas) {
        // Convert the canvas to a data URL (PNG format)
        var dataURL = canvas.toDataURL('image/png');
        
        // Create a temporary link to trigger the download
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'editable_text_image.png'; // Name of the downloaded image file
        
        // Simulate a click on the link to start the download
        link.click();
    });
});