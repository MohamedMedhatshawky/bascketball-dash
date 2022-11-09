let homeScorBtone =document.getElementById("home-score-btn-1")
let homeStore=document.getElementById("score-home")
let homeScore=0

function increaseHomeScoreOne(){

    homeScore +=1
    homeStore.textContent = homeScore
}



function increaseHomeScoreTwo(){

    homeScore +=2
    homeStore.textContent = homeScore
}


function increaseHomeScoreThree(){

    homeScore +=3
    homeStore.textContent = homeScore
}

//Guest-dashboard


let guestScorBtone =document.getElementById("guest-score-btn-1")
let guestStore=document.getElementById("score-guest")
let guestScore=0

function increaseGuestScoreOne(){
guestScore +=1
guestStore.textContent=guestScore

}




function increaseGuestScoreTwo(){
    guestScore +=1
    guestStore.textContent=guestScore
    
    }
    
    function increaseGuestScoreThree(){
        guestScore +=1
        guestStore.textContent=guestScore
        
        }
        
            