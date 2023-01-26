import $ from "jquery";
/**
 * Container for Main Pic Element
 */
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
    /**
     * Click handler on image makes an request to [thecatapi](https://thecatapi.com)
     */ 
    click: function () {
        $.get('https://api.thecatapi.com/v1/images/search', (response) => {
            $('#catImage').attr({
                src: response[0].url,
            });
            localStorage.setItem('catPic', response[0].url)
        })
    }
})
/**
 * Mouseenter event listener add pic-hover class for animation
 *  ```css
 * .pic-hover {
 * scale: 1.3;
 * margin-top: 7vh; 
 * }
 * ```
 */
.on('mouseenter', function () {
    $(this).addClass('pic-hover')
})
.on('mouseleave', function () {
    $(this).removeClass('pic-hover')
})

.appendTo(Pic);

export default Pic;