
var el = $('.menu-btn');

$('.menu-icon').click(function() {
    // チェックされたとき
    if ($('.menu-icon__cheeckbox').prop('checked')) {
        $('.btn').css('animation', 'none');

        const a1 = anime.timeline(
        {
            targets: '.btn',
            duration: 1000,
            translateY: -200,
            easing: 'linear',
            borderRadius: ['50%', '0%'],
        }).add({
            targets: '.btn',
            duration: 1000,
            width: '75%',
            height: '75%',
            easing: 'linear',
        });
    } else {
        console.log('checked');

        const a2 = anime.timeline(
        {
            targets: '.btn',
            width: '70px',
            height: '70px',
            easing: 'linear',
            
        }).add({
            targets: '.btn',
            duration: 500,
            translateY: 0,
            easing: 'linear',
            borderRadius: ['0%', '50%']
        });
    }
}
);