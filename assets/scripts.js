$(function() {

    // Always start page at top
    /*window.onbeforeunload = function(){
        window.scrollTo(0,0);
    }*/

    // Scroll function to animate the meters in
    // Function from Travis Neilson's YouTube channel. http://travisneilson.com/
    var meter_class = ["drums", "hockey", "games", "tech"],
    skills_class = ["html", "css", "js", "liquid", "github"];

    $(window).scroll(function() {
        var vp_scroll = $(this).scrollTop();
        if(vp_scroll > $(".meter-fill").offset().top - ($(window).height() / 1.1)) {
            $(".meter-fill").each(function (i) {
                setTimeout(function() {
                    $(".meter-fill").eq(i).addClass(meter_class[i]);
                }, 150 * (i+1));
            });
        }
    });
    $(window).scroll(function() {
        var vp_scroll = $(this).scrollTop();
        if(vp_scroll > $(".skills-list-item").offset().top - ($(window).height())) {
            $(".skills-list-item").each(function (i) {
                setTimeout(function() {
                    $(".skills-list-item").eq(i).addClass(skills_class[i]);
                }, 150 * (i+1));
            });
        }
    });
});
