// START THE GAME
$("#startButton").on("touchstart click", function(event){
    $("#start").hide();


    $("#game").show();
});


//ALIEN GAME DATA
var game = {
    started: false,
    score: 0,
    level: 0,
    question: 0,
    levels: [
        [
            {"word": "c_t", "correct": 0, answers: ["a","e","i"]},
            {"word": "_og", "correct": 2, answers: ["m","l","d"]}
        ]
    ],
    start: function () {
        this.score = 0;
        this.level = 0;
        this.question = 0;
        this.started = true;
    },
    finish: function () {
        this.started = false;
    }
};