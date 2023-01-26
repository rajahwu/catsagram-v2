import $ from "jquery";
/**
 * Container for upvote and downvote buttons
 */
const VoteButtons: JQuery<HTMLDivElement> = $('<div>', {
    id: 'button_container',
    css: {
        width: '500px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
    }
})
/**
 * Local jQuery Button component
 */
const button = $('<div>', {
    css: {
        width: '100px',
        height: '100px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '3px solid black',
        borderRadius: '50%',
        boxShadow: '5px 5px 5px black',
        cursor: 'pointer'
    },
})
/**
 * Downvote Button cloned from local jQuery button component
 */
const downvoteBtn = button.clone()
    .addClass('downvoteBtn')
    /**
     * Add data attribute to button
     * Use to check if button if up
     *      for click animations 
     */
    .data("isUp", false)
    .css({
        left: '60px',
    })
    .append($('<img>', {
        src: '../dislike.png',
        width: '50px',
        height: '50px',
    }))
    .appendTo(VoteButtons)
    /**
     * Click event handler to toggle button animations
     */
    .on('click', function () {
        let btnUp: boolean = downvoteBtn.data("isUp")

        if (!btnUp) {
            // triggers click on upvote if upvote button isUp
            if (upvoteBtn.data("isUp")) upvoteBtn.trigger('click')
            $(this).stop()
                .animate({
                    bottom: '45vh',
                    width: 0,
                    height: 0,
                    marginLeft: '100px',
                }, 5000).fadeOut("slow").fadeIn("slow")

            downvoteBtn.data("isUp", true);
            localStorage.setItem('downvoteBtn', downvoteBtn.data('isUp'))

            btnUp = downvoteBtn.data("isUp")
            /**
           * setTImeout to remove class for button rotation
           */
            setTimeout(function () {
                $(downvoteBtn).addClass("downVote")
            }, 2000)
            $(this).addClass("up")
        }
        else if (btnUp) {
            $(this).stop()
                .animate({
                    bottom: '0vh',
                    width: 100,
                    height: 100,
                    marginLeft: 0,
                }, 5000)
            downvoteBtn.data("isUp", false);
            localStorage.setItem('downvoteBtn', downvoteBtn.data('isUp'))
            btnUp = downvoteBtn.data("isUp")
            /**
             * setTImeout to remove class for button rotation
             */
            setTimeout(function () {
                $(downvoteBtn).removeClass("downVote")
            }, 2500)
            $(this).removeClass("up")
        }
    })

    .on('mouseenter', function () {
        $(this).addClass('hover')
    })
    .on('mouseleave', function () {
        $(this).removeClass('hover')
    })
/**
 * Upvote Button cloned from local jQuery button component
 */
const upvoteBtn = button.clone()
    .addClass('upvoteBtn')
    /**
    * Add data attribute to button
    * Use to check if button if up
    *      for click animations 
    * */
    .data("isUp", false)
    .css({
        left: '230px',
    })
    .append($('<img>', {
        src: '../heart.png',
        width: '50px',
        height: '50px'
    }))
    .appendTo(VoteButtons)
    /**
    * Click event handler to toggle button animations
    */
    .on("click", function () {
        let btnUp: boolean = upvoteBtn.data("isUp")

        if (!btnUp) {
            // triggers click on downvote if downvote button isUp
            if (downvoteBtn.data("isUp")) downvoteBtn.trigger('click')
            $(this).stop()
                .animate({
                    bottom: '45vh',
                    width: 1,
                    height: 0
                }, 5000)
                .fadeOut("slow").fadeIn("slow")

            upvoteBtn.data("isUp", true);
            btnUp = upvoteBtn.data("isUp");
            localStorage.setItem('upvoteBtn', upvoteBtn.data('isUp'))
            $(this).addClass("up");

        }
        else if (btnUp) {
            $(this).stop()
                .animate({
                    bottom: '0vh',
                    width: 100,
                    height: 100
                }, 5000)
            upvoteBtn.data("isUp", false);
            btnUp = upvoteBtn.data("isUp");
            localStorage.setItem('upvoteBtn', upvoteBtn.data('isUp'))
            $(this).removeClass("up")
        }
    })

    .on('mouseenter', function () {
        $(this).addClass('hover')

    })
    .on('mouseleave', function () {
        $(this).removeClass('hover')
    })


export default VoteButtons;