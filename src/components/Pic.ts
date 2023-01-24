import $ from "jquery";

const Pic:JQuery<HTMLDivElement> = $('<div>', {
    css: {
        width: '250px',
        height: '250px',
        border: '5px solid black',
        borderRadius: '15px',
        marginTop: '25px'
    }
})

$('<img>', {
    id: 'catImage',
    width: '250px',
    height: '250px',
    css: {
        borderRadius: '15px',
        boxShadow: '5px 5px 5px black',
        cursor: 'pointer',
        transition: 'scale 2s ease-in-out'
    },
    click: function () {
        $.get('https://api.thecatapi.com/v1/images/search', (response) => {
            $('#catImage').attr({
                src: response[0].url,
            });
        })
    }
})
.on('mouseenter', function () {
    $(this).addClass('pic-hover')
})
.on('mouseleave', function () {
    $(this).removeClass('pic-hover')
})

.appendTo(Pic);

export default Pic;