
var myVar = setInterval(explode, 1000);

function explode() {
    $("#ballon").explodeRestore();
    setTimeout(function () {
        $("#ballon").explode({
            maxWidth: 12,
            minWidth: 3,
            radius: 631,
            release: false,
            recycle: false,
            explodeTime: 400,
            canvas: true,
            maxAngle: 360,
            gravity: false,
        });
    }, 300)
    
}
