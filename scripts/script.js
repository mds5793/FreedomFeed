//FreedomFeed™ and HTML, CSS, and JQuery Code Copyright (c) 2022-2025 Matthew D. Swift & Swift Enterprises LLC

$(document).ready(function () {
    $(".rel").hide();

    //Slow "lazy-river" animation translates unpinned flashcards from left to right across feed.
    $(".container").not(".pinned").css({ "animation": "translate 60s infinite linear" });

    //Pauses translation animation when hovering over flashcard.
    $(".flashcard").hover(function () {
        $(".container").not(".pinned").css({ "animation-play-state": "paused" });
    }, function () {
        $(".container").not(".pinned").css({ "animation-play-state": "running" });
    });

    //Fadein Animation when hovering over flashcard.
    //Issue: Fade-in/Fade-out triggers too many times per second, if repeatedly hovering on/off flashcard...
    $('.flashcard').hover(
        function () {
            $(this).find(".rel").stop(true, false).fadeIn();
        },
        function () {
            $(this).find(".rel").stop(true, false).fadeOut();
        }
    );

    let isAnimated = false;
    let animStateSearch = false;
    let animStateMOTD = false;

    $("#options, #notifications, #messages, #dashboard, .add-feed, #usn").on('click', function () {
        //Use Cases:
        //1. Sidebar is hidden:
        //   a. If sidebar is hidden and you click on a nav-bar link, show the sidebar and load the content for that nav-link.
        //2. Sidebar is visible:
        //   a. If clicking on the nav-link that loaded the sidebar, close sidebar.
        //   b. If clicking on a nav-link that didn't trigger the sidebar to open, then:
        //      i. Close sidebar and reopen with the new content.
        // Please Note: When clicking on the plus button to create a new feed, the streamer's dashboard should be opened.
        slideout();
    });

    //Slideout animation for sidebar for selectors above.
    function slideout() {
        if (!isAnimated) {
            isAnimated = true;
            $(".sidebar").animate({
                right: 'toggle',
                width: 'toggle'
            }, 500, function () {
                isAnimated = false;
            });
        }
    }

    //Slideout animation for the searchbar.
    $("#search").click(function () {
        if (!animStateSearch) {
            animStateSearch = true;
            $("#search-id").animate({
                width: 'toggle',
                padding: 'toggle'
            }, 500, function () {
                animStateSearch = false;
            });
        }
    });

    //Slideout animation for Message of the Day (for admins only).
    $("#motd").click(function () {
        if (!animStateMOTD) {
            animStateMOTD = true;
            $("#motd-id").animate({
                width: 'toggle',
                padding: 'toggle'
            }, 500, function () {
                animStateMOTD = false;
            });
        }
    });

    //Remove/Add Class to parent flashcard div of clicked button.
    $(".pin-button").on("click", function(){
        /**
         * Find any flashcard with 'pinned' remove the 'pinned' class then,
         * add the 'pinned' class to the flashcard that triggered this click event and then,
         * disable/enable the 'lazy-river' animation.
         */

        $(this).closest(".container").addClass("pinned");
    });
});