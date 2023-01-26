import $ from "jquery";

const Comments = $('<div>', {
    class: 'comment-container',
    css: {
        width: '200px',
        height: '200px',
        border: '5px solid black',
        marginTop: '5vh',
        borderRadius: '15px',
        backgroundColor: 'pink',
        overflowY: 'scroll',
        overflowWrap: 'anywhere',
        boxShadow: '5px 5px 5px black'
    }
})
.append($('<ul>', {
        id: 'comments',
        class: 'comments',
        css: {
            listStyle: 'none',
            padding: '0',
            
        }
    }))
    
const commentBtn = ($('<div>', {
    id: 'makeCommentBtn',
    width: '50px',
    height: '50px',
    css: {
        positon: 'absolute',
        backgroundColor: 'transparent',
        transform: ('translate(150%, 875%'),
        cursor: 'pointer'
    },
    click: function (e: Event) {
        e.stopImmediatePropagation()
        $('#comment_form_container').show()
        $(this).hide()
    }
}))
.append($('<img>', {
    width: 50,
    height: 50,
    src: '../comment_button.png'
}))

$('#app').append(commentBtn)

export default Comments;