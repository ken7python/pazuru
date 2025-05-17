var hk = document.getElementById("game");
var sk = hk.getContext('2d');
sk.fillStyle = '#000000';
sk.strokeStyle = "#ffffff";
sk.lineWidth = 3;
var oto = 0;

var seikai = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", " "],
];

const size = 150;
const fontSize = size / 2;

sk.font = fontSize + "px 'ＭＳ ゴシック'";
datak = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", " "],
];
data = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", " "],
];

function byouga() {
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 3; i++) {
            sk.fillRect(10 + i * size, 10 + j * size, size, size);
            sk.strokeRect(10 + i * size, 10 + j * size, size, size);
            if (data[j][i] == seikai[j][i]) {
                sk.fillStyle = '#5f5';
            } else {
                sk.fillStyle = '#ffffff';
            }
            sk.fillText(data[j][i], i * size + fontSize/1.4, (j+1) * size - fontSize / 2);
            sk.fillStyle = '#000000';
        }
    }
    if (oto == 1) {
        if (data.toString() == seikai.toString()) {
            console.log("クリア");
            music.pause();
            var kuria = new Audio('src/clear.mp3');
            kuria.play();

            document.getElementById("view").innerHTML = "<h1 id='clear'>クリア</h1>"
            g = false;
        }
    }
}

function ugo(kazu) {
    if (kazu == " ") {

    } else {
        if (data.indexOf(kazu)) {
            var basx;
            var basy;
            for (var j = 0; j < 3; j++) {
                for (var i = 0; i < 3; i++) {
                    if (data[j][i] == kazu) {
                        basx = j;
                        basy = i;
                    }
                }
            }
            km(basx, basy);
        }
    }
}

function idou(x, y, x2, y2) {
    data[x2][y2] = data[x][y];
    data[x][y] = " ";
    if (oto == 1) {
        byouga();
    }
}

function km(x, y) {
    if (data[x][y] == " ") {

    } else {
        if (y < 2) {
            if (data[x][y + 1] == " ") {
                idou(x, y, x, y + 1);
            }
        }
        if (y > 0) {
            if (data[x][y - 1] == " ") {
                idou(x, y, x, y - 1);
            }
        }
        if (x > 0) {
            if (data[x - 1][y] == " ") {
                idou(x, y, x - 1, y);
            }
        }
        if (x < 2) {
            if (data[x + 1][y] == " ") {
                idou(x, y, x + 1, y);
            }
        }

    }
}

function gs() {
    oto = 0;
    var a;
    var b;
    var r;
    var di = [];
    for (i = 0; i < 40; i++) {
        var min = 0;
        var max = 8;

        var a = Math.floor(Math.random() * (max + 1 - min)) + min;
        ugo(a);
    }
    byouga();
    oto = 1;
    start()
}

/*
for (var j = 0; j < 3; j++) {
    for (var i = 0; i < 3; i++) {
        sk.fillRect(10 + i * 87, 10 + j * 87, 80, 80);
        sk.strokeRect(10 + i * 87, 10 + j * 87, 80, 80);

        sk.fillStyle = '#ffffff';
        sk.fillText(data[j][i], 40 + i * 87, 60 + j * 87, 80);
        sk.fillStyle = '#000000';
    }
}
*/
byouga();

document.getElementById("game").onclick = function(event){
    if (g){
        var x = parseInt( event.pageX / size );
        var y = parseInt(event.pageY / size ) - 1;

        var n = data[y][x];
        console.log(n);
        if (n != undefined || n!= " "){
            n = parseInt(n);
            ugo(n);
        }
    }
}