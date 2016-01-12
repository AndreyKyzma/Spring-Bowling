/*initialization */
var ScoreBowling = function () {
    this.throwBall = [];
    this.currentThrowBall = 0;
    this.frame = 0;
    this.frameIndex = 0;
    this.totalScore = 0;
    this.strikeCounter = 0;
};

ScoreBowling.prototype.roll = function (pins) {
    this.throwBall[this.currentThrowBall++] = pins;
};

ScoreBowling.prototype.nextFrame = function () {
    this.frame++;
};

ScoreBowling.prototype.score = function () {
    debugger;
    var score = 0,
        self = this;
    /*calculate sum of Balls*/
    function sumOfBallsInGameFrame() {
        return (self.throwBall[self.frameIndex] + self.throwBall[self.frameIndex + 1]);
    }

    /*calculate strikeBonus*/
    function strikeBonus() {
        if (self.strikeCounter === 0) {
            return 0;
        }
        else if (self.strikeCounter === 1) {
            return self.throwBall[self.frameIndex];
        }
        else {
            return self.throwBall[self.frameIndex] + self.throwBall[self.frameIndex];
        }
    }

    /*calculate spareBonus*/
    function spareBonus() {
        if (self.frameIndex === 0 || self.frameIndex === 1) {
            return 0;
        }
        else {
            return self.throwBall[self.frameIndex];
        }
    }

    /*check method isStrike */
    function isStrike() {
        return self.throwBall[self.frameIndex] === 10;
    }

    /*check method isSpare*/
    function isSpare() {
        return self.throwBall[self.frameIndex] + self.throwBall[self.frameIndex + 1] === 10;
    }

    if (isStrike()) {
        score += 10 + strikeBonus();
        self.frameIndex++;
    }
    else if (isSpare()) {
        score += 10 + spareBonus();
        self.frameIndex += 2;
    }
    else {
        score += sumOfBallsInGameFrame();
        self.frameIndex += 2;
    }
    return score;
};

var player = new ScoreBowling();

var scoreButtons = $(".score-buttons input"),
    counter = 0;
/*Buttons logic*/
scoreButtons.each(function (j) {
    $(this).on("click", function () {
        debugger;
        var item = $(this).val(),
            max = 11,
            $frame = $(".half-frame");
        ++counter;
        if (counter % 2 === 1) {
            if (item !== "X") {
                $('.spare').css("visibility", "visible");
                $('.strike').css("visibility", "hidden");
                for (var i = max - item; i < max; i++) {
                    scoreButtons.eq(i - 1).hide();
                }
                $frame.eq(player.currentThrowBall).attr("value", item);
                player.roll(parseInt(item));
                player.strikeCounter = 0;
                if (player.frameIndex > 20) {
                    scoreButtons.hide();
                }
            }
            else {
                scoreButtons.show();
                $frame.eq(player.currentThrowBall + 1).attr("value", item);
                item = 10;
                player.roll(parseInt(item));
                var score = player.score();
                player.totalScore += score;
                $(".total input").eq(player.frame).attr("value", score);
                $(".total-score input").eq(0).attr("value", player.totalScore);
                player.nextFrame();
                counter = 0;
                player.currentThrowBall++;
                player.frameIndex++;
                player.strikeCounter++;
                if (player.frameIndex > 20) {
                    scoreButtons.hide();
                }
            }

        }
        else {
            scoreButtons.show();
            $('.spare').css("visibility", "hidden");
            $('.strike').css("visibility", "visible");
            $frame.eq(player.currentThrowBall).attr("value", item);
            if (item === "/") {
                item = 10 - $frame.eq(player.currentThrowBall - 1).val();
            }
            player.roll(parseInt(item));
            var score = player.score();
            player.totalScore += score;
            $(".total input").eq(player.frame).attr("value", score);
            $(".total-score input").eq(0).attr("value", player.totalScore);
            player.nextFrame();
            if (player.frameIndex > 20) {
                scoreButtons.hide();
            }
        }
    });
});
/* logic for NewGame button */
$(".new-game").on("click", function () {
    scoreButtons.show();
    $(".table input").attr("value", " ");
    player = new ScoreBowling();
}
);

/*logic for SaveGame button*/
$("save-game").on("click", function(){

});