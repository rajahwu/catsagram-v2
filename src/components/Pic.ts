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
        boxShadow: '5px 5px 5px black'
    },
    click: function () {
        $.get('https://api.thecatapi.com/v1/images/search', (response) => {
            $('#catImage').attr({
                src: response[0].url,
            });
        })
    }
}).appendTo(Pic);

export default Pic;