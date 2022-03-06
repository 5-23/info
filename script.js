client = document.getElementById("main");
drow = client.getContext("2d");

client.width = 1925;
client.height = 9999;

/*<------------------------------------메인------------------------------------>*/
pointer = {
    "x" : 0,
    "y" : 0
}
mouse = {
    "x" : 0,
    "y" : 0
}
githubPOS = {
    "x" : 1750,
    "y" : 7000
}
youtubePOS = {
    "x" : 1750,
    "y" : 7000
}
discordPOS = {
    "x" : 1750,
    "y" : 7000
}
titlePOS = {
    "x" : 800,
    "y" : -500
}
titleBoxPOS = {
    "x" : 1.7,
    "y" : -500
}
linkBoxPOS = {
    "x" : -500,
    "y" : -300,
    "setX" : null,
    "setY" : null
}

pointerEvent = {}
var github = new Image();
var youtube = new Image();
var discord = new Image();
var titleIMG = new Image();

var speedG = 50;
var speedY = 50;
var speedD = 50;
var speedT = 50;
var speedTB = 30;
var speedLB = 50;
var showText = [];

function mousepointer(){
    drow.fillStyle = "red";
    pointer.x += (mouse.x - pointer.x)/10-0.5;
    pointer.y += (mouse.y - pointer.y)/10-0.5;
    drow.fillRect(
        pointer.x,
        pointer.y,
        10,
        10
    )
}

class githubBUTTON{
    constructor (x , y , width , height){
        this.x = githubPOS.x;
        this.y = githubPOS.y;
        githubPOS.y += (y-githubPOS.y)/speedG
        githubPOS.x += (x-githubPOS.x)/speedG
        this.width = width;
        this.height = height;

        github.src = "img/github.png";
        if (pointer.x > this.x){
            if (pointer.x < this.x+this.width){
                if (pointer.y > this.y){
                    if (pointer.y < this.y+this.height){
                        github.src = "img/githubON.png";
                        showText = ["깃허브" , 100];
                        if (pointerEvent["on"] == 1){github.src = "img/githubPUSH.png";}
                        if (pointerEvent["click"] == 1){
                            window.open("https://github.com/5-23/just-square", '_blank')
                        }
                    }
                }
            }
        }
        drow.drawImage(
            github,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}
class youtubeBUTTON{
    constructor (x , y , width , height){
        this.x = youtubePOS.x;
        this.y = youtubePOS.y;
        youtubePOS.y += (y-youtubePOS.y)/speedY
        youtubePOS.x += (x-youtubePOS.x)/speedY

        this.width = width;
        this.height = height;
        youtube.src = "img/youtube.png";

        if (pointer.x > this.x){
            if (pointer.x < this.x+this.width){
                if (pointer.y > this.y){
                    if (pointer.y < this.y+this.height){
                        youtube.src = "img/youtubeON.png";
                        showText = ["유튜브" , 100];
                        if (pointerEvent["on"] == 1){youtube.src = "img/youtubePUSH.png";}
                        if (pointerEvent["click"] == 1){
                            window.open("https://www.youtube.com/c/SCRATCHER523/", '_blank')
                        }
                    }
                }
            }
        }
        drow.drawImage(
            youtube,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}
class discordBUTTON{
    constructor (x , y , width , height){
        this.x = discordPOS.x;
        this.y = discordPOS.y;
        discordPOS.y += (y-discordPOS.y)/speedD
        discordPOS.x += (x-discordPOS.x)/speedD

        this.width = width;
        this.height = height;
        discord.src = "img/discord.png";

        if (pointer.x > this.x){
            if (pointer.x < this.x+this.width){
                if (pointer.y > this.y){
                    if (pointer.y < this.y+this.height){
                        discord.src = "img/discordON.png";
                        showText = ["디스코드" , 100];
                        if (pointerEvent["on"] == 1){discord.src = "img/discordPUSH.png";}
                        if (pointerEvent["click"] == 1){
                            window.open("https://discord.com/invite/xNr9ykDU4f", '_blank')
                        }
                    }
                }
            }
        }
        drow.drawImage(
            discord,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}



class title{
    constructor (x , y , size){
        this.x = titlePOS.x;
        this.y = titlePOS.y;
        titlePOS.y += (y-titlePOS.y)/speedT
        titlePOS.x += (x-titlePOS.x)/speedT

        this.size = size;
        drow.fillStyle = "black";

        drow.font = '100px mian';

        drow.fillText(
            "5-23",
            this.x,
            this.y,
            this.size,
        )
    }
}
class titleBox{
    constructor (x , y , width , height){
        this.x = titleBoxPOS.x;
        this.y = titleBoxPOS.y;
        titleBoxPOS.y += (y-titleBoxPOS.y)/speedTB
        titleBoxPOS.x += (x-titleBoxPOS.x)/speedTB

        this.width = width;
        this.height = height;
        var cornerRadius = 100;

        drow.lineJoin = "round";
        drow.lineWidth = cornerRadius;

        drow.beginPath();

        drow.strokeStyle = '#5865f2';
        drow.fillStyle = '#5865f2';

        drow.strokeRect(titleBoxPOS.x+(cornerRadius/2), titleBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillRect(titleBoxPOS.x+(cornerRadius/2), titleBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
    }
}
class linkBox{
    constructor (x , y , width , height){
        if (linkBoxPOS.setY == null){linkBoxPOS.setY = y}
        if (linkBoxPOS.setX == null){linkBoxPOS.setX = x}

        this.x = linkBoxPOS.x;
        this.y = linkBoxPOS.y;
        linkBoxPOS.y += (linkBoxPOS.setY-linkBoxPOS.y)/speedLB
        linkBoxPOS.x += (linkBoxPOS.setX-linkBoxPOS.x)/speedLB

        this.width = width;
        this.height = height;
        var cornerRadius = 100;
        linkBoxPOS.setY = y;

        linkBoxPOS.setY = y
        if (this.x > 1740){
            if (pointer.x > this.x){
                if (pointer.x < this.x+this.width){
                    if (pointer.y > this.y){
                        if (pointer.y < this.y+this.height){
                            linkBoxPOS.setY = y+400
                        }
                    }
                }
            }
        }
        console.log(this.x)

        drow.lineJoin = "round";
        drow.lineWidth = cornerRadius;

        drow.beginPath();

        drow.strokeStyle = '#6976f3';
        drow.fillStyle = '#6976f3';

        drow.strokeRect(linkBoxPOS.x+(cornerRadius/2), linkBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillRect(linkBoxPOS.x+(cornerRadius/2), linkBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillStyle = '#ff0000';
    }
}
class textBox{
    constructor (text , width = 0){
        this.x = pointer.x;
        this.y = pointer.y-50;

        // this.width = width;
        this.width = 110;
        this.height = 42;
        this.size = 100;
        var cornerRadius = 35;

        drow.lineJoin = "round";
        drow.lineWidth = cornerRadius;


        drow.strokeStyle = "#4753f1";
        drow.fillStyle = "#4753f1";

        drow.strokeRect(this.x+(cornerRadius/2), this.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillRect(this.x+(cornerRadius/2), this.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);


        drow.font = "40px myfont";
        drow.fillStyle = "white";

        drow.fillText(
            text,
            this.x+6,
            this.y+36,
            this.size,
        )
    }
}


inputKey = null
inputKeys = {}

time = 0;

function frame(){
    time++;

    drow.clearRect(0 , 0 , client.width , client.height);
    if (time > 60){
        new linkBox(1750 , -300 , 120 , 500);
    }
    if (time > 90){
        new githubBUTTON(linkBoxPOS.setX+11 , linkBoxPOS.setY+330 , 100 , 100);
    }
    if (time > 100){
        new youtubeBUTTON(linkBoxPOS.setX+11 , linkBoxPOS.setY+220 , 100 , 100);
    }
    if (time > 110){
        new discordBUTTON(linkBoxPOS.setX+11 , linkBoxPOS.setY+110 , 100 , 100);
    }
    new titleBox(1.7 , -100 , 1920 , 250);
    new title(800 , 110 , 1500);
    if (showText[0] != undefined){if(showText[1] != undefined){new textBox(showText[0] , showText[1]);}}


    
    mousepointer();
    
    requestAnimationFrame(frame);

    
    delete pointerEvent["click"];
    showText = [];
}

frame()

client.addEventListener("mousemove" , function (pos) {
        mouse.x = pos.x;
        mouse.y = pos.y;
    }
)
client.addEventListener("mousedown" , function (input){
    pointerEvent["on"] = 1;
    }
)
client.addEventListener("mouseup" , function (input){
        pointerEvent["click"] = 1;
        delete pointerEvent["on"];
    }
)
document.addEventListener('keydown' , function(key){
        inputKeys[key.key] = 1;
    }
)
document.addEventListener('keyup' , function(key){
        delete inputKeys[key.key];
    }
)