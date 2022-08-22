let code = document.querySelector(".code")
let style = document.querySelector(".style")
let str =
    `
/* 您好，我准备 show 一下我的前端功底
先搞个 div 框框出来*/
.effect {
    display: flex;
    border: 1px black solid;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    box-sizing: border-box;
}
/* 接下来要在框框里画一个圆，并填充一个渐变色 */
.circle{
    border: 1px black solid;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: linear-gradient(90deg, #FFFFFF 0%,#FFFFFF 50%,#000000 50%,#000000 100%);
}
/* 现在准备画出太极的轮廓 */
.blackCircle {
    position: relative;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background: black;
    transform: translate(50%);
}
.whiteCircle {
    position: relative;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background: white;
    transform: translate(50%);
}
/* 再搞两个小球上去 */
.whiteBall {
    position: relative;
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.blackBall {
    position: relative;
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background: black;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
`
let content = ""
let i = 1;
let speed = 50;
let step = () => {
    if (str[i] === "\n") {
        content += "<br>";
    } else {
        content += str[i]
    }
    if (i < str.length) {
        setTimeout(() => {
            code.innerHTML = content;
            style.innerHTML = str.substring(0, i);
            i++;
            code.scroll(0,9999)
            window.scroll(0,9999)
            step();
        }, speed);
    } else {
        return 0;
    }
}

step();

function changeSpeed(){
    speed = speed === 0 ? 50 : 0;
}
let button = document.querySelector(".button")
button.addEventListener("click",changeSpeed)
