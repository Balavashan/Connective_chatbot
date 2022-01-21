function getBotResponse(input) {
    //rock paper scissors
    if(input=="can we play a game"){
        return "sure,but I only know rock paper scissor,can we play it?";
    }else if(input=="yes"){
        return "You can start the game just say rock / paper /scissor";
    }else if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input=="how are you"){
        return "I am good,What about you?";
    } else if(input=="what is your name"){
        return "I have no specific name you can call me a BOT";
    }else {
        return "Try asking something else!";
    }
}
