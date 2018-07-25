let hands = ['rock', 'paper', 'scissors']
let beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

let getHand = ()  => {
    return hands[(parseInt(Math.random() * 10) % 3)]
}

let player1 = {
    name: 'Mike',
    hand: getHand
}


let player2 = {
    name: 'Jim',
    hand: getHand
}

let playRound = (player1, player2) => {
    let p1h = player1.hand()
    let p2h = player2.hand()
    let beatsValue = beats[p1h]

    if (p1h == p2h) {
        console.log('TIE')
        return playRound(player1, player2)
    } else if (beatsValue == p2h) {
        console.log(`${player1.name} wins`)
        return player1
    } else {
        console.log(`${player2.name} wins`)
        return player2
    }
}


let playGame = (player1, player2, winCount) => {
    let p1Count = 0
    let p2Count = 0
    let winner = false
    let checkEndGame = (a, winCount) => {
        if(a == winCount) {
            winner = true
        }
    }
    
    let round = 1

    while(!winner) {
        console.log(`Round: ${round}`)
        let w = playRound(player1, player2)
        if(w == player1) {
            p1Count += 1
            checkEndGame(p1Count, winCount)
        } else {
            p2Count += 1
            checkEndGame(p2Count, winCount)
        }
        round++
    }

    if(p1Count > p2Count) {
        console.log(`${player1.name} has the most wins`)
    } else {
        console.log(`${player2.name} has the most wins`)
    }
}

console.log("Game 1 to 5")
playGame(player1, player2, 5)