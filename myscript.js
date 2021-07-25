// Selecting all the required elements
selectBox = $(".selectBox"),
selectXBtn = $(".XBtn"),
selectOBtn = $(".OBtn"),
selectPlayBoard = $(".playBoard"),
allBox = $("section span"),
players = $(".players"),
Xturn = $(".Xturn"),
Oturn = $(".Oturn"),
slider = $(".slider"),
resultBox = $(".resultBox"),
winText = document.querySelector(".winText"),
winnerName = document.querySelector(".winText .winnerName"),
replayBtn = document.querySelector(".replayBtn");


window.onload =()=>{

    for (let index = 0; index < allBox.length; index++) {
        allBox[index].setAttribute("onclick", "clickedBox(this)");
        
    }    


    selectXBtn.click(function () { // Click on XButton changes window
        selectBox.addClass('hide'),
        selectPlayBoard.addClass('show'),
        Xturn.addClass('active player activeSpan');
        slider.addClass("leftSlider"); // moves the slider to the left side
    });
    selectOBtn.click(function () { // Click on OButton changes window
        selectBox.addClass('hide'),
        selectPlayBoard.addClass('show'),
        Oturn.addClass('active player activeSpan');
        slider.addClass("rightSlider"); // moves the slider to right side
    });
}



// User Click Fucntions

function clickedBox(element) {
    // console.log(element)
    if (Oturn.hasClass("player")) {
        element.innerHTML = '<p style="font-family:Dancing Script; font-weight:900; color:#FF7600;">O</p>';
        slider.addClass("leftSlider")
        slider.removeClass("rightSlider");
        Oturn.removeClass("active player activeSpan");
        Xturn.addClass("active player activeSpan");
    }
    else{
        element.innerHTML = '<p style="font-family:Dancing Script; font-weight:900; color:#CD113B;">X</p>';
        slider.addClass("rightSlider")
        slider.removeClass("leftSlider");
        Xturn.removeClass("active player activeSpan");
        Oturn.addClass("active player activeSpan");
    }
    selectWinner();
    element.style.pointerEvents = "none"; // Once a box is selected, that box can't be selected again.

}


// Winning Function

function getId(idName) {
    return document.querySelector(".box" + idName).textContent; // Returning Id name
}

function checkThreeClasses(val1, val2, val3, sign) {
    if(getId(val1) == sign && getId(val2) == sign && getId(val3) == sign){
        return true;
    }
}

function selectWinner() {
    if(checkThreeClasses(1, 2, 3, 'X') || checkThreeClasses(4, 5, 6, 'X') || checkThreeClasses(7, 8, 9, 'X') || checkThreeClasses(1, 4, 7, 'X') || checkThreeClasses(2, 5, 8, 'X') || checkThreeClasses(3, 6, 9, 'X') || checkThreeClasses(1, 5, 9, 'X') || checkThreeClasses(3, 5, 7, 'X')){
        showResult('X');
    }
    else if(checkThreeClasses(1, 2, 3, 'O') || checkThreeClasses(4, 5, 6, 'O') || checkThreeClasses(7, 8, 9, 'O') || checkThreeClasses(1, 4, 7, 'O') || checkThreeClasses(2, 5, 8, 'O') || checkThreeClasses(3, 6, 9, 'O') || checkThreeClasses(1, 5, 9, 'O') || checkThreeClasses(3, 5, 7, 'O')){
        showResult('O');
    }
    else if(getId(1) != '' && getId(2) != '' && getId(3) != '' && getId(4) != '' && getId(5) != '' && getId(6) != '' && getId(7) != '' && getId(8) != '' && getId(9) != ''){
        showResult("NoBody")
    }
}

function showResult(winnerSign) {
    selectPlayBoard.removeClass("show");
    selectPlayBoard.addClass("hide");
    resultBox.removeClass("live");
    resultBox.addClass("show");
    winnerName.innerHTML = winnerSign;
    
}


replayBtn.onclick = ()=> {
    window.location.reload(); // reload the current page
}