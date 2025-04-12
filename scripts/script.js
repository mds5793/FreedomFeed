//FreedomFeed™ and HTML, CSS, and JQuery Code Copyright (c) 2022-2025 Matthew D. Swift & Swift Enterprises LLC

$(document).ready(function(){
    $(".large, .half, .quarter-wrapper").css({"animation":"translate 60s infinite linear"});
    $(".flashcard").hover(function(){
        $(".large, .half, .quarter-wrapper").css({"animation-play-state":"paused"});
    }, function(){
        $(".large, .half, .quarter-wrapper").css({"animation-play-state":"running"});
    });

    $("#options, #notifications, #messages").click(function(){
        $(".sidebar").animate({
            right: 'toggle',
            width: 'toggle'
        }, 500);
    });

    $("#search").click(function(){
        $("#search-id").animate({
            width: 'toggle',
            padding: 'toggle'
        }, 500)
    });

    $("#motd").click(function(){
        $("#motd-id").animate({
            width: 'toggle',
            padding: 'toggle'
        });
    });

    function bindEvent(){
        $(".add-feed").one('click', function(){
            $(".add-feed-popup").animate({
                width: 'toggle',
                height: 'toggle'
            });
        });
    }

    bindEvent();
    
    $(".cancel").click(function(){
        $(".add-feed-popup").animate({
            width: 'toggle',
            height: 'toggle'
        }, bindEvent());
    });
});