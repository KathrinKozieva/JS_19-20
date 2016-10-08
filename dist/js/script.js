(function($) {
    $(function() {
    	var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
            })
            .jcarousel({
                wrap: 'circular'
            });
        $('.jcarousel').jcarousel();

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
     $('.jcarousel').jcarouselAutoscroll({
            interval: 7000,
            target: "+=1",
            autostart: true
        });
    });

    $(function() {
        $(".accordion__btn").on('click', function() {
            $('.accordion__panel').css("display", "none");
            $(".accordion__btn").removeClass('accordion__btn__active');
            $(".accordion__btn span").html('+');
            $(this).children('span').html('-');
            $(this).addClass('accordion__btn__active').next().toggle(350);
        })
    });

    $(function() {
        $(".service__image").hover(
            function(){
                $(this).next('.myhover').stop().fadeIn(200);
            },
            function(){
                $(this).next('.myhover').stop().fadeOut(200);
            })
    });


/*SECOND TASK WITH UNDERSCORE*/
var newInfo = localStorage.getItem('myData');
var myInfo = JSON.parse(newInfo);
console.log("Массив объектов из DATA JSON", myInfo);

var skills  = [];
myInfo.forEach(function (people) {
    skills = _.concat(skills, people.skills);
    skills = _.uniq(skills);
    skills = _.sortBy(skills);
  });

var name = [];
myInfo.forEach(function (people) {
    name = _.sortBy(myInfo, 'friends.length');
    name = _.map(name, 'name');
})

var friends = [];
myInfo.forEach(function (people) {
    friends = _.flattenDeep(_.map(myInfo, 'friends'));
    friends = _.uniq(_.map(friends, 'name'));
    friends = _.sortBy(friends);
})

/*results*/
console.log('skills =', skills);
console.log('name =', name);
console.log('friends =', friends);
})(jQuery);