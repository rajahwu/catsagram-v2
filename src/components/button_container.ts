import $ from "jquery";

const ButtonContainer: JQuery<HTMLDivElement> = $('<div>', {
    id: 'button_container',
    css: {
        width: '500px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
    }
})

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
    },
})


const downvoteBtn = button.clone()
    .addClass('downvoteBtn')
    .data("isUp", false)
    .css({
        left: '60px',
    })
    .append($('<img>', {
        src: '../dislike.png',
        width: '50px',
        height: '50px',
    }))
    .appendTo(ButtonContainer)
    .on('click', function () {
        let btnUp: boolean = downvoteBtn.data("isUp")

        if (!btnUp) {
            $(this).animate({
                bottom: '45vh',
                width: 1,
                marginLeft: '100px'
            }, 5000)

            downvoteBtn.data("isUp", true);
            btnUp = downvoteBtn.data("isUp")
            setTimeout(function () {
                $(downvoteBtn).addClass("downVote")
            }, 2000)
            $(this).addClass("up")
        }
        else if (btnUp) {
            $(this).animate({
                bottom: '0vh',
                width: 100,
                marginLeft: 0
            }, 5000)
            downvoteBtn.data("isUp", false);
            btnUp = downvoteBtn.data("isUp")
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

const upvoteBtn = button.clone()
    .addClass('upvoteBtn')
    .data("isUp", false)
    .css({
        left: '230px',
    })
    .append($('<img>', {
        src: '../heart.png',
        width: '50px',
        height: '50px'
    }))
    .appendTo(ButtonContainer)
    .on("click", function () {
        let btnUp: boolean = upvoteBtn.data("isUp")

        if (!btnUp) {
            $(this).animate({
                bottom: '45vh',
                width: 1,
            }, 5000)
            upvoteBtn.data("isUp", true);
            btnUp = upvoteBtn.data("isUp");
            $(this).addClass("up");

        }
        else if (btnUp) {
            $(this).animate({
                bottom: '0vh',
                width: 100
            }, 5000)
            upvoteBtn.data("isUp", false);
            btnUp = upvoteBtn.data("isUp");
            $(this).removeClass("up")
        }
    })

.on('mouseenter', function () {
    $(this).addClass('hover')

})
.on('mouseleave', function () {
    $(this).removeClass('hover')
})

export default ButtonContainer;