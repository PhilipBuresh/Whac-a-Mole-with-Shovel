const lobby = document.getElementById("lobby");
const mainStart= document.getElementById("mainStart");
const mainEnd= document.getElementById("mainEnd");
const krtecek1 = document.getElementById("krtecek1");
const big_krtecek1 = document.getElementById("big_krtecek1");
const krtecek1_freeze = document.getElementById("krtecek1_freeze");
const krtecek1_double = document.getElementById("krtecek1_double");
const krtecek1_thief = document.getElementById("krtecek1_thief");
const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const score = document.getElementById("score");
const best = document.getElementById("best");
const double_points = document.getElementById("double_points");
const time = document.getElementById("time");
const play = document.getElementById("play");
const newBest = document.getElementById("newBest");
const yourScore = document.getElementById("yourScore");
const thief = document.getElementById("thief");
const joke = document.getElementById("joke");
const end = document.getElementById("end");
const help = document.getElementById("help");
const paper = document.getElementById("paper");

 play.onmousedown = () =>{
    play.style.marginTop = "6px";
    play.style.marginLeft = "6px";
    play.style.color = "#d4d406";
    play.style.textShadow = "0px 0px black"
 }
 play.onmouseup = () =>{
    play.style.marginTop = "0px";
    play.style.marginLeft = "0px";
    play.style.color = "yellow";
    play.style.textShadow = "6px 6px black"
 }
 play.onmouseout = () =>{
    play.style.marginTop = "0px";
    play.style.marginLeft = "0px";
    play.style.color = "yellow";
    play.style.textShadow = "6px 6px black"
 }
 play2.onmousedown = () =>{
    play2.style.marginTop = "406px";
    play2.style.marginLeft = "6px";
    play2.style.color = "#d4d406";
    play2.style.textShadow = "0px 0px black"
 }
 play2.onmouseup = () =>{
    play2.style.marginTop = "400px";
    play2.style.marginLeft = "0px";
    play2.style.color = "yellow";
    play2.style.textShadow = "6px 6px black"
 }
 play2.onmouseout = () =>{
    play2.style.marginTop = "400px";
    play2.style.marginLeft = "0px";
    play2.style.color = "yellow";
    play2.style.textShadow = "6px 6px black"
 }

 
    song1 = () =>{
        music1.play();
        music2.pause();
    }

    song1Pause = () =>{
        music1.pause();
    }

    song2Pause = () =>{
        music2.pause();
    }

    song2 = () =>{
        music1.pause();
        music2.play();
    }

    loop1 = () =>{
        loopOne = setInterval(() => {
            song1();
    }, 22000);
    }

    loop2 = () =>{
        loopTwo = setInterval(() => {
            song2();
    }, 21500);
    }

    let unFreeze;
    let unMultiple;
    let freezedTime;
    let doubleTimeout;
    let doubleTimeOut;
    let colorTimeOut;

    increase = () =>{
        score.style.animationName = "increase";
        score.style.animationPlayState = "running";
        decrease = setTimeout(() => {
            score.style.animationName = "none";
            score.style.animationPlayState = "paused";
        }, 300);
    }

    freezeAnimation = () =>{
        time.style.animationName = "freeze";
        time.style.animationPlayState = "running";
        unFreeze = setTimeout(() => {
            time.style.animationName = "none";
            time.style.animationPlayState = "paused";
        }, 5000);
    }

    colorFunction = () =>{
        double_points.style.animationName = "rainbow";
        double_points.style.animationPlayState = "running";
        unMultiple = setTimeout(() => {
            double_points.style.animationName = "none";
            double_points.style.animationPlayState = "paused";
        }, 5000);
    }

now = setTimeout(() => {
    end.pause();
    song1();
    loop1();
}, 10);

resetRandom = () =>{
    randomHole = 0;
    randomMole = 0;
}
opacityPlay = () =>{
    opacity = setTimeout(() => {
        play2.style.display = "block";
        play2.style.animationName = "opacity";
        play2.style.animationPlayState = "running";
    }, 1000);
    

}

let robbed = false;
let actualScore = 0;

gameOver = () =>{
    if(score.innerHTML == bestPoints){
        newBest.style.display = "block";
        console.log(score.innerHTML);
        console.log(bestPoints);
    }
    if(robbed == true){
        thief.style.display = "block";
        joke.style.display = "block";
          haha = setInterval(() => {
            thief.style.transform = "scaleX(-1)"
            }, 300);
        haha2 = setTimeout(() => {
            hahaha = setInterval(() => {
                thief.style.transform = "scaleX(1)"
                }, 600);
        }, 300);
    }
    end.play();
    music2.currentTime = 0;
    music2.pause();
    clearInterval(loopTwo);
    yourScore.innerHTML = "Your Score: " + score.innerHTML;
    opacityPlay();
    resetRandom();
    double_points.style.animationName = "none";
    double_points.style.animationPlayState = "paused";
    start2.style.display = "flex";
    lobby.style.display = "none";
    mainEnd.style.display = "flex";
    jsTime = 60;
    time.innerHTML = jsTime + "s";
    plusScore = 0;
    score.innerHTML = plusScore;
    clearTimer();
    clearInterval(random);
    clearInterval(jumpMole);
    clearInterval(stopNow);
    clearTimeout(unFreeze);
    clearTimeout(unMultiple);
    clearTimeout(freezedTime);
    clearTimeout(doubleTimeout);
    clearTimeout(colorTimeOut);
    clearTimeout(doubleTimeOut);
    alreadyDoubled = false;
    krtecek1.style.animationName = "none";
    big_krtecek1.style.animationName = "none";
    krtecek1_freeze.style.animationName = "none";
    krtecek1_freeze.style.animationPlayState = "paused";
    krtecek1_double.style.animationName = "none";
    krtecek1_thief.style.animationName = "none";
    time.style.animationName = "none";
    time.style.animationPlayState = "paused";
    freeze = false;
    alreadyFreezed = false;
    doublePoints = 1;
}
        let plusScore = 0
        let timer
        let jsTime = 60;
        let doublePoints = 1;
        let bestPoints = 0;
        let randomHole;
        let randomMole;
    
        let freeze = false;
        let alreadyFreezed = false;
        let alreadyDoubled = false;

        clearTimer = () =>{
            clearInterval(timer);
        }

        startTimer = () =>{
            timer = setInterval(() => {
                    jsTime--
                    time.innerHTML = jsTime + "s";
                    freeze = false;
                    if(jsTime == 0){
                        gameOver();
                    }
            }, 1000);
        }
    
        activeDouble = () => {
            doubleTimeout = setTimeout(() => {
                doublePoints = 1;
                alreadyDoubled = false;
            }, 5000);
        }
//----------------------------------------------------------------------------------------
play.onclick = () => {
    game = () =>{
        start.style.display = "none";
        mainStart.style.display = "none";
        lobby.style.display = "block";
    
        clearInterval(loopOne);
        song1Pause();

        song2();
        loop2();
    
        startTimer();
        random = setInterval(() => {
    
            randomHole = Math.floor(Math.random() * 6 + 1);
    
            randomMole = Math.floor(Math.random() * 100 + 1);
    
        }, 2000);
    
        jumpMole = setInterval(() => {
            krtecek1.style.transform = "rotate(0deg)"
            big_krtecek1.style.transform = "rotate(0deg)"
            krtecek1_freeze.style.transform = "rotate(0deg)"
            krtecek1_double.style.transform = "rotate(0deg)"
            if(randomMole > 0 && randomMole <= 40){
                krtecek1.style.display = "block";
                big_krtecek1.style.display = "none";
                krtecek1_freeze.style.display = "none";
                krtecek1_double.style.display = "none";
                krtecek1_thief.style.display = "none";
            }else if(randomMole >= 41 && randomMole <= 70){
                big_krtecek1.style.display = "block";
                krtecek1.style.display = "none";
                krtecek1_freeze.style.display = "none";
                krtecek1_double.style.display = "none";
                krtecek1_thief.style.display = "none";
            }else if(randomMole >= 71 && randomMole <= 85){
                krtecek1_freeze.style.display = "block";
                big_krtecek1.style.display = "none";
                krtecek1.style.display = "none";
                krtecek1_double.style.display = "none";
                krtecek1_thief.style.display = "none";
            }
            else if(randomMole >= 86 && randomMole <= 95){
                krtecek1_double.style.display = "block";
                big_krtecek1.style.display = "none";
                krtecek1.style.display = "none";
                krtecek1_freeze.style.display = "none";
                krtecek1_thief.style.display = "none";
            }
            else if(randomMole > 95){
                krtecek1_thief.style.display = "block";
                big_krtecek1.style.display = "none";
                krtecek1.style.display = "none";
                krtecek1_freeze.style.display = "none";
                krtecek1_double.style.display = "none";
            }
            if(randomHole == 1){
                krtecek1.style.visibility = "visible";
                krtecek1.style.animationName = "jump1";
                krtecek1.style.animationPlayState = "running";
                krtecek1.style.zIndex = "3";
    
                big_krtecek1.style.visibility = "visible";
                big_krtecek1.style.animationName = "jump1";
                big_krtecek1.style.animationPlayState = "running";
                big_krtecek1.style.zIndex = "3";
    
                krtecek1_freeze.style.visibility = "visible";
                krtecek1_freeze.style.animationName = "jump1";
                krtecek1_freeze.style.animationPlayState = "running";
                krtecek1_freeze.style.zIndex = "3";
    
                krtecek1_double.style.visibility = "visible";
                krtecek1_double.style.animationName = "jump1";
                krtecek1_double.style.animationPlayState = "running";
                krtecek1_double.style.zIndex = "3";
    
                krtecek1_thief.style.visibility = "visible";
                krtecek1_thief.style.animationName = "jump1";
                krtecek1_thief.style.animationPlayState = "running";
                krtecek1_thief.style.zIndex = "3";
            }else if(randomHole == 2){
                krtecek1.style.visibility = "visible";
                krtecek1.style.animationName = "jump2";
                krtecek1.style.animationPlayState = "running";
                krtecek1.style.zIndex = "3";
    
                big_krtecek1.style.visibility = "visible";
                big_krtecek1.style.animationName = "jump2";
                big_krtecek1.style.animationPlayState = "running";
                big_krtecek1.style.zIndex = "3";
    
                krtecek1_freeze.style.visibility = "visible";
                krtecek1_freeze.style.animationName = "jump2";
                krtecek1_freeze.style.animationPlayState = "running";
                krtecek1_freeze.style.zIndex = "3";
    
                krtecek1_double.style.visibility = "visible";
                krtecek1_double.style.animationName = "jump2";
                krtecek1_double.style.animationPlayState = "running";
                krtecek1_double.style.zIndex = "3";
    
                krtecek1_thief.style.visibility = "visible";
                krtecek1_thief.style.animationName = "jump2";
                krtecek1_thief.style.animationPlayState = "running";
                krtecek1_thief.style.zIndex = "3";
            }
            else if(randomHole == 3){
                krtecek1.style.visibility = "visible";
                krtecek1.style.animationName = "jump3";
                krtecek1.style.animationPlayState = "running";
                krtecek1.style.zIndex = "3";
    
                big_krtecek1.style.visibility = "visible";
                big_krtecek1.style.animationName = "jump3";
                big_krtecek1.style.animationPlayState = "running";
                big_krtecek1.style.zIndex = "3";
    
                krtecek1_freeze.style.visibility = "visible";
                krtecek1_freeze.style.animationName = "jump3";
                krtecek1_freeze.style.animationPlayState = "running";
                krtecek1_freeze.style.zIndex = "3";
    
                krtecek1_double.style.visibility = "visible";
                krtecek1_double.style.animationName = "jump3";
                krtecek1_double.style.animationPlayState = "running";
                krtecek1_double.style.zIndex = "3";
    
                krtecek1_thief.style.visibility = "visible";
                krtecek1_thief.style.animationName = "jump3";
                krtecek1_thief.style.animationPlayState = "running";
                krtecek1_thief.style.zIndex = "3";
            }
            else if(randomHole == 4){
                krtecek1.style.visibility = "visible";
                krtecek1.style.animationName = "jump4";
                krtecek1.style.animationPlayState = "running";
                krtecek1.style.zIndex = "1";
    
                big_krtecek1.style.visibility = "visible";
                big_krtecek1.style.animationName = "jump4";
                big_krtecek1.style.animationPlayState = "running";
                big_krtecek1.style.zIndex = "1";
    
                krtecek1_freeze.style.visibility = "visible";
                krtecek1_freeze.style.animationName = "jump4";
                krtecek1_freeze.style.animationPlayState = "running";
                krtecek1_freeze.style.zIndex = "1";
    
                krtecek1_double.style.visibility = "visible";
                krtecek1_double.style.animationName = "jump4";
                krtecek1_double.style.animationPlayState = "running";
                krtecek1_double.style.zIndex = "1";
    
                krtecek1_thief.style.visibility = "visible";
                krtecek1_thief.style.animationName = "jump4";
                krtecek1_thief.style.animationPlayState = "running";
                krtecek1_thief.style.zIndex = "1";
            }
            else if(randomHole == 5){
                krtecek1.style.visibility = "visible";
                krtecek1.style.animationName = "jump5";
                krtecek1.style.animationPlayState = "running";
                krtecek1.style.zIndex = "1";
    
                big_krtecek1.style.visibility = "visible";
                big_krtecek1.style.animationName = "jump5";
                big_krtecek1.style.animationPlayState = "running";
                big_krtecek1.style.zIndex = "1";
    
                krtecek1_freeze.style.visibility = "visible";
                krtecek1_freeze.style.animationName = "jump5";
                krtecek1_freeze.style.animationPlayState = "running";
                krtecek1_freeze.style.zIndex = "1";
    
                krtecek1_double.style.visibility = "visible";
                krtecek1_double.style.animationName = "jump5";
                krtecek1_double.style.animationPlayState = "running";
                krtecek1_double.style.zIndex = "1";
    
                krtecek1_thief.style.visibility = "visible";
                krtecek1_thief.style.animationName = "jump5";
                krtecek1_thief.style.animationPlayState = "running";
                krtecek1_thief.style.zIndex = "1";
            }
            else if(randomHole == 6){
                krtecek1.style.visibility = "visible";
                krtecek1.style.animationName = "jump6";
                krtecek1.style.animationPlayState = "running";
                krtecek1.style.zIndex = "1";
    
                big_krtecek1.style.visibility = "visible";
                big_krtecek1.style.animationName = "jump6";
                big_krtecek1.style.animationPlayState = "running";
                big_krtecek1.style.zIndex = "1";
    
                krtecek1_freeze.style.visibility = "visible";
                krtecek1_freeze.style.animationName = "jump6";
                krtecek1_freeze.style.animationPlayState = "running";
                krtecek1_freeze.style.zIndex = "1";
    
                krtecek1_double.style.visibility = "visible";
                krtecek1_double.style.animationName = "jump6";
                krtecek1_double.style.animationPlayState = "running";
                krtecek1_double.style.zIndex = "1";
    
                krtecek1_thief.style.visibility = "visible";
                krtecek1_thief.style.animationName = "jump6";
                krtecek1_thief.style.animationPlayState = "running";
                krtecek1_thief.style.zIndex = "1";
            }
            bestFunction = () =>{
                if(bestPoints <= plusScore){
                    bestPoints = plusScore;
                    best.innerHTML = "Best: " + plusScore;
                }
                    
            }
            

            krtecek1.onclick = () => {
                krtecek1.style.transform = "rotate(-30deg)"
                increase();
                plusScore = plusScore + 1 * doublePoints;
                score.innerHTML = plusScore;
                bestFunction();
                krtecek1.onclick = () => {
                    score.innerHTML = plusScore;
                }
            }
            big_krtecek1.onclick = () => {
                big_krtecek1.style.transform = "rotate(-30deg)"
                increase();
                plusScore = plusScore + 3 * doublePoints;
                score.innerHTML = plusScore;
                bestFunction();
                big_krtecek1.onclick = () => {
                    score.innerHTML = plusScore;
                }
            }
            krtecek1_freeze.onclick = () => {
                krtecek1_freeze.style.transform = "rotate(-30deg)"
                increase();
                if(alreadyFreezed == false){
                    freezeAnimation();
                    alreadyFreezed = true;
                    clearTimer();
                    freeze = true;
                    plusScore = plusScore + 1 * doublePoints;
                        score.innerHTML = plusScore;
                        bestFunction();
                        krtecek1_freeze.onclick = () => {
                        score.innerHTML = plusScore;
                        }
                    if(freeze == true){
                        freezedTime = setTimeout(() => {
                            freeze = false;
                            alreadyFreezed = false;
                            startTimer();
                        }, 5000);
                    }
                }else{
                    time.style.animationName = "none";
                    time.style.animationPlayState = "running";
                    clearTimeout(unFreeze);
                    
                    freezeTimeOut = setTimeout(() => {
                        freezeAnimation();
                    }, 1);
                    plusScore = plusScore + 1 * doublePoints;
                    score.innerHTML = plusScore;
                    bestFunction();
                    krtecek1_freeze.onclick = () => {
                    score.innerHTML = plusScore;
                    }
                    clearTimeout(freezedTime);   
                    freezedTime = setTimeout(() => {
                        freeze = false;
                        alreadyFreezed = false;
                        startTimer();
                    }, 5000);
                } 
            }
            krtecek1_double.onclick = () => {
                krtecek1_double.style.transform = "rotate(-30deg)"
                increase();
                if(alreadyDoubled == false){
                    alreadyDoubled = true;
                        colorFunction();
                        doublePoints = 2;
                        activeDouble();
                        plusScore = plusScore + 1 * doublePoints;
                        score.innerHTML = plusScore;
                        bestFunction();
                        krtecek1_double.onclick = () => {
                        score.innerHTML = plusScore;
                        }
                }else if(alreadyDoubled == true){
                    clearTimeout(unMultiple);
                    double_points.style.animationName = "none";
                    double_points.style.animationPlayState = "paused";
                    colorTimeOut = setTimeout(() => {
                        colorFunction();
                    }, 1);
                    clearTimeout(doubleTimeout);
                    doubleTimeOut = setTimeout(() => {
                        activeDouble();
                    }, 1);
                    plusScore = plusScore + 1 * doublePoints;
                    score.innerHTML = plusScore;
                    bestFunction();
                    krtecek1_double.onclick = () => {
                    score.innerHTML = plusScore;
                    }
                }
                }
                
            krtecek1_thief.onclick = () => {
                robbed = true;
                gameOver();
            }
            

        }, 1000);
        stopNow = setInterval(() => {
            krtecek1.style.visibility = "hidden";
            krtecek1.style.animationName = "none";
            krtecek1.style.animationPlayState = "paused";
    
            big_krtecek1.style.visibility = "hidden";
            big_krtecek1.style.animationName = "none";
            big_krtecek1.style.animationPlayState = "paused";
    
            krtecek1_freeze.style.visibility = "hidden";
            krtecek1_freeze.style.animationName = "none";
            krtecek1_freeze.style.animationPlayState = "paused";
    
            krtecek1_double.style.visibility = "hidden";
            krtecek1_double.style.animationName = "none";
            krtecek1_double.style.animationPlayState = "paused";
    
            krtecek1_thief.style.visibility = "hidden";
            krtecek1_thief.style.animationName = "none";
            krtecek1_thief.style.animationPlayState = "paused";
        }, 2000);
    }

    game();
}

play2.onclick = () =>{
    mainEnd.style.display = "none";
        game();
        clearInterval(haha);
        clearInterval(hahaha);
        clearTimeout(haha2);
        thief.style.display = "none";
        joke.style.display = "none";
        time.style.animationName = "none";
        robbed = false;
        start2.style.display = "none";
        play2.style.display = "none";
        play2.style.animationName = "none";
        play2.style.animationPlayState = "paused";
        newBest.style.display = "none";
}

