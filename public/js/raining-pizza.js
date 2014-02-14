sliceCount = 0;

function makeItRain() {
    if (sliceCount > 10)
        return false
    else {
        var randomTime = Math.floor(Math.random() * (500) * 2);
        setTimeout(function () {
            sliceCount++;
            rainPizza();
            makeItRain();
        }, randomTime);
    }
}

function rainPizza() {
    var slice = $('<img class="slice" alt="*" src="images/pizza-slice-icon-1.png">');
    $('#raining-pizza').prepend(slice);

    var w1 = $(window).width();
    var w2 = $('#raining-pizza').width();
    sliceX = ((w1 - w2) / 2) + (Math.floor(Math.random() * w2)) - 20;
    sliceSpd = Math.floor(Math.random() * (500) * 20);

    slice.css({
        'left': sliceX + 'px',
        'top': '65px'
    });

    slice.animate({
        top: "550px",
        opacity: "0",
    }, 2000, function () {
        $(this).remove();
        rainPizza();
    });
}

// makeItRain();
