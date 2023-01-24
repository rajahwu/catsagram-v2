import $ from "jquery";

const Comment = $('<li>', {
    css: {
        backgroundColor: 'lightblue',
        width: '200x',
        height: '50px',
        border: '2.5 solid black',
        margin: '5px 0px'
    }
})
.append($('<div>❌</div>', {
    css: {
        backgroundColor: 'green'
    },
    click: function() {
        console.log('clicked')
    }
}))

export default Comment;

