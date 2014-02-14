var sliceCount = 30;

function makeItRain() {
    var w1 = $(window).width();
    var w2 = $('#raining-pizza').width();
    var w3 = (w1 - w2) / 2;

    var $slices = $(),
        createSlices = function () {
            for (var i = 0; i < sliceCount; ++i) {
                var $slice = $('<img class="slice" alt="*" src="images/pizza-slice-icon-1.png">');
                var sliceX = w3 + Math.random() * w2 * 0.9;

                $slice.css({
                    'left': sliceX + 'px',
                    'top': '65px'
                });

                $slices = $slices.add($slice);
            }

            $('#raining-pizza').prepend($slices);
        },

        rainPizza = function() {
            console.log('animating slices');
            $slices.each(function() {
                var singleAnimation = function($slice) {
                    $slice.animate({
                        top: "550px",
                        opacity: "0",
                    }, Math.random() * -2500 + 5000, function() {
                        var sliceX = w3 + Math.random() * w2 * 0.9;
                        $slice.css({
                            'left': sliceX + 'px',
                            'top': '65px',
                            'opacity': 1
                        });

                        singleAnimation($slice);
                    });
                };

                singleAnimation($(this));
            });
        };

        createSlices();
        rainPizza();
}

// makeItRain();
