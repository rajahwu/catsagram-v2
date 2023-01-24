import $ from "jquery";

const Comment = $('<li>', {
    css: {
        display: 'flex',
        justifyContent: 'center',
        aliginItems: 'center',
        background: 'hsla(0, 0%, 0%, 0.85)',
        color: 'white',
        width: '200x',
        minHeight: '50px',
        height: 'fit-content',
        border: '2.5 solid black',
        margin: '5px 0px',
        fontFamily: '"Figtree", sans-serif',
        fontSize: '1.5em',

    }
})

export default Comment;

