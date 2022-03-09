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
linkBoxPOS = {
    "x" : -500,
    "y" : -300,
    "setX" : null,
    "setY" : null
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
imgPOS = {
    "x" : -500,
    "y" : 10,
    "setX" : null,
    "setY" : null
}
imgBoxPOS = {
    "x" : -500,
    "y" : 10,
    "setX" : null,
    "setY" : null
}
descriptionBoxPOS = {
    "x" : 1.7,
    "y" : 1000,
    "setX" : null,
    "setY" : null
}
descriptionPOS = {
    "x" : 2,
    "y" : 1000
}

linkBoxPOS2 = {
    "x" : 2000,
    "y" : 100,
    "setX" : null,
    "setY" : null
}
githubPOS2 = {
    "x" : 1750,
    "y" : 7000
}
youtubePOS2 = {
    "x" : 1750,
    "y" : 7000
}
discordPOS2 = {
    "x" : 1750,
    "y" : 7000
}

pointerEvent = {}
var github = new Image();
var youtube = new Image();
var discord = new Image();
var titleIMG = new Image();
var loc;
var locOld;
var icon = document.getElementById("icon");

var speed = 50;

var showText = [];

function mousepointer(){
    drow.fillStyle = "white";
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
        githubPOS.y += (y-githubPOS.y)/speed
        githubPOS.x += (x-githubPOS.x)/speed
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
                            location.href = "?github"
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
        youtubePOS.y += (y-youtubePOS.y)/speed
        youtubePOS.x += (x-youtubePOS.x)/speed

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
                            location.href = "?youtube"
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
        discordPOS.y += (y-discordPOS.y)/speed
        discordPOS.x += (x-discordPOS.x)/speed

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
                            location.href = "?discord"
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
class linkBox{
    constructor (x , y , width , height){
        if (linkBoxPOS.setY == null){linkBoxPOS.setY = y}
        if (linkBoxPOS.setX == null){linkBoxPOS.setX = x}

        this.x = linkBoxPOS.x;
        this.y = linkBoxPOS.y;
        linkBoxPOS.y += (linkBoxPOS.setY-linkBoxPOS.y)/speed
        linkBoxPOS.x += (linkBoxPOS.setX-linkBoxPOS.x)/speed

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


class title{
    constructor (x , y , size , text){
        this.x = titlePOS.x;
        this.y = titlePOS.y;
        titlePOS.y += (y-titlePOS.y)/speed
        titlePOS.x += (x-titlePOS.x)/speed

        this.size = size;
        drow.fillStyle = "white";

        drow.font = '100px mian';

        drow.fillText(
            text,
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
        titleBoxPOS.y += (y-titleBoxPOS.y)/speed
        titleBoxPOS.x += (x-titleBoxPOS.x)/speed

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

class imgBox{
    constructor (x , y , width , height){
        if (imgBoxPOS.setY == null){imgBoxPOS.setY = y}
        if (imgBoxPOS.setX == null){imgBoxPOS.setX = x}

        this.x = imgBoxPOS.x;
        this.y = imgBoxPOS.y;
        imgBoxPOS.y += (imgBoxPOS.setY-imgBoxPOS.y)/speed
        imgBoxPOS.x += (imgBoxPOS.setX-imgBoxPOS.x)/speed

        this.width = width;
        this.height = height;
        var cornerRadius = 100;
        imgBoxPOS.setY = y;

        imgBoxPOS.setY = y
        if (this.x > 1740){
            if (pointer.x > this.x){
                if (pointer.x < this.x+this.width){
                    if (pointer.y > this.y){
                        if (pointer.y < this.y+this.height){
                            imgBoxPOS.setY = y+400
                        }
                    }
                }
            }
        }

        drow.lineJoin = "round";
        drow.lineWidth = cornerRadius;

        drow.beginPath();

        drow.strokeStyle = '#6976f3';
        drow.fillStyle = '#6976f3';

        drow.strokeRect(imgBoxPOS.x+(cornerRadius/2), imgBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillRect(imgBoxPOS.x+(cornerRadius/2), imgBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillStyle = '#ff0000';
    }
}
class img{
    constructor (x , y , width , height , imgSRC , open){
        var image = new Image();
        image.src = imgSRC;
        
        if (imgPOS.setY == null){imgPOS.setY = y}
        if (imgPOS.setX == null){imgPOS.setX = x}

        this.x = imgPOS.x;
        this.y = imgPOS.y;
        imgPOS.y += (imgPOS.setY-imgPOS.y)/speed
        imgPOS.x += (imgPOS.setX-imgPOS.x)/speed

        this.width = width;
        this.height = height;
        var cornerRadius = 100;
        imgPOS.setY = y;

        imgPOS.setY = y
        if (pointer.x > this.x){
            if (pointer.x < this.x+this.width){
                if (pointer.y > this.y){
                    if (pointer.y < this.y+this.height){
                        showText = ["바로가기" , 50];
                        if (pointerEvent["click"] == 1){
                            window.open(open, '_blank')
                        }
                    }
                }
            }
        }

        drow.drawImage(
            image,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}
class descriptionBox{
    constructor (x , y , width , height){
        if (descriptionBoxPOS.setY == null){descriptionBoxPOS.setY = y}
        if (descriptionBoxPOS.setX == null){descriptionBoxPOS.setX = x}

        this.x = descriptionBoxPOS.x;
        this.y = descriptionBoxPOS.y;
        descriptionBoxPOS.y += (descriptionBoxPOS.setY-descriptionBoxPOS.y)/speed
        descriptionBoxPOS.x += (descriptionBoxPOS.setX-descriptionBoxPOS.x)/speed

        this.width = width;
        this.height = height;
        var cornerRadius = 100;
        descriptionBoxPOS.setY = y;

        descriptionBoxPOS.setY = y
        if (this.x > 1740){
            if (pointer.x > this.x){
                if (pointer.x < this.x+this.width){
                    if (pointer.y > this.y){
                        if (pointer.y < this.y+this.height){
                            descriptionBoxPOS.setY = y+400
                        }
                    }
                }
            }
        }

        drow.lineJoin = "round";
        drow.lineWidth = cornerRadius;

        drow.beginPath();

        drow.strokeStyle = '#6976f3';
        drow.fillStyle = '#6976f3';

        drow.strokeRect(descriptionBoxPOS.x+(cornerRadius/2), descriptionBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillRect(descriptionBoxPOS.x+(cornerRadius/2), descriptionBoxPOS.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillStyle = '#ff0000';
    }
}
class description{
    constructor (x , y , size , text){
        this.x = descriptionPOS.x;
        this.y = descriptionPOS.y;
        descriptionPOS.y += (y-descriptionPOS.y)/speed
        descriptionPOS.x += (x-descriptionPOS.x)/speed

        this.size = size;
        drow.fillStyle = "white";

        drow.font = '100px mian';

        drow.fillText(
            text,
            this.x,
            this.y,
            this.size,
        )
    }
}

class githubBUTTON2{
    constructor (x , y , width , height){
        this.x = githubPOS2.x;
        this.y = githubPOS2.y;
        githubPOS2.y += (y-githubPOS2.y)/speed
        githubPOS2.x += (x-githubPOS2.x)/speed
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
                            location.href = "?github"
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
class youtubeBUTTON2{
    constructor (x , y , width , height){
        this.x = youtubePOS2.x;
        this.y = youtubePOS2.y;
        youtubePOS2.y += (y-youtubePOS2.y)/speed
        youtubePOS2.x += (x-youtubePOS2.x)/speed

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
                            location.href = "?youtube"
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
class discordBUTTON2{
    constructor (x , y , width , height){
        this.x = discordPOS2.x;
        this.y = discordPOS2.y;
        discordPOS2.y += (y-discordPOS2.y)/speed
        discordPOS2.x += (x-discordPOS2.x)/speed

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
                            location.href = "?discord"
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
class linkBox2{
    constructor (x , y , width , height){
        if (linkBoxPOS2.setY == null){linkBoxPOS2.setY = y}
        if (linkBoxPOS2.setX == null){linkBoxPOS2.setX = x}

        this.x = linkBoxPOS2.x;
        this.y = linkBoxPOS2.y;
        linkBoxPOS2.y += (linkBoxPOS2.setY-linkBoxPOS2.y)/speed
        linkBoxPOS2.x += (linkBoxPOS2.setX-linkBoxPOS2.x)/speed

        this.width = width;
        this.height = height;
        var cornerRadius = 100;
        linkBoxPOS2.setY = y;

        linkBoxPOS2.setX = x
        if (pointer.x > this.x){
            if (pointer.x < this.x+this.width){
                if (pointer.y > this.y){
                    if (pointer.y < this.y+this.height){
                        linkBoxPOS2.setX = x-150
                    }
                }
            }
        }

        drow.lineJoin = "round";
        drow.lineWidth = cornerRadius;

        drow.beginPath();

        drow.strokeStyle = '#6976f3';
        drow.fillStyle = '#6976f3';

        drow.strokeRect(linkBoxPOS2.x+(cornerRadius/2), linkBoxPOS2.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillRect(linkBoxPOS2.x+(cornerRadius/2), linkBoxPOS2.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        drow.fillStyle = '#ff0000';
    }
}


inputKey = null
inputKeys = {}

time = 0;

function frame(){
    loc = location.href.split("?")[1];
    if (loc != locOld){
        time = 0;
        if (loc == undefined){
            titlePOS = {
                "x" : 800,
                "y" : -500
            }
        }else if (loc == undefined){
            titlePOS = {
                "x" : 800,
                "y" : -500
            }
        }else{
            titlePOS = {
                "x" : 650,
                "y" : -500
            }
        }
    }

    time++;
    drow.clearRect(0 , 0 , client.width , client.height);
    if (loc == undefined){
        document.title = "SCRATCHER 5-23♪";
        icon.href = "https://github.com/5-23/info/blob/main/img/icon.png?raw=true";
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
    }else if (loc == ""){
        document.title = "SCRATCHER 5-23♪";
        icon.href = "https://github.com/5-23/info/blob/main/img/icon.png?raw=true";
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
        new title(800 , 110 , 1500 , "5-23");
    }else if (loc == "youtube"){
        document.title = "유튜브";
        icon.href = "https://github.com/5-23/info/blob/main/img/youtube.png?raw=true";

        new imgBox(12 , 10 , 500 , 500);
        new img(12 , 10 , 500 , 500 , "img/youtube.png" , "https://www.youtube.com/c/SCRATCHER523/");

        new linkBox2(1850 , 100 , 500 , 500);
        new githubBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+330 , 100 , 100);
        new youtubeBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+220 , 100 , 100);
        new discordBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+110 , 100 , 100);

        if (time > 60){
            new descriptionBox(1.7 , 700 , 1920 , 300);
        }
        if (time > 100){
            new description(2 , 800 , 2000 , "5-23이 반접한 유튜브다");
        }
    }else if (loc == "github"){
        document.title = "깃허브";
        icon.href = "https://github.com/5-23/info/blob/main/img/github.png?raw=true";

        new imgBox(12 , 10 , 500 , 500);
        new img(12 , 10 , 500 , 500 , "img/github.png" , "https://github.com/5-23");

        new linkBox2(1850 , 100 , 500 , 500);
        new githubBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+330 , 100 , 100);
        new youtubeBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+220 , 100 , 100);
        new discordBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+110 , 100 , 100);

        if (time > 60){
            new descriptionBox(1.7 , 700 , 1920 , 300);
        }
        if (time > 100){
            new description(2 , 800 , 2000 , "5-23이 코드를 공유하는 곳이다");
        }
    }else if (loc == "discord"){
        document.title = "디스코드";
        icon.href = "https://github.com/5-23/info/blob/main/img/discord.png?raw=true";

        new imgBox(12 , 10 , 500 , 500);
        new img(12 , 10 , 500 , 500 , "img/server.png" , "https://discord.com/invite/xNr9ykDU4f");

        new linkBox2(1850 , 100 , 500 , 500);
        new githubBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+330 , 100 , 100);
        new youtubeBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+220 , 100 , 100);
        new discordBUTTON2(linkBoxPOS2.setX+100 , linkBoxPOS2.setY+110 , 100 , 100);

        if (time > 60){
            new descriptionBox(1.7 , 700 , 1920 , 300);
        }
        if (time > 100){
            new description(2 , 800 , 2000 , "개발을하는 디스코드 서버다");
        }
    }else{
        document.title = "404 not found";
        icon.href = null;
        new titleBox(1.7 , -100 , 1920 , 250);
        new title(650 , 110 , 1500 , "404 not found");
    }


    if (showText[0] != undefined){if(showText[1] != undefined){new textBox(showText[0] , showText[1]);}}
    mousepointer();
    
    requestAnimationFrame(frame);

    
    delete pointerEvent["click"];
    showText = [];
    locOld = location.href.split("?")[1];
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
