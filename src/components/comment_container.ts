import $ from "jquery";

const CommentContainer = $('<div>', {
    class: 'comment-container',
    css: {
        width: '200px',
        height: '200px',
        border: '5px solid black',
        marginTop: '5vh',
        borderRadius: '15px',
        backgroundColor: 'pink',
        overflowY: 'scroll',
        boxShadow: '5px 5px 5px black'
    },
    click: () => {
        $('#comment_form_container').show()
    }
})
.append($('<ul>', {
        id: 'comments',
        css: {
            listStyle: 'none',
            padding: '0',
            
        }
    }))

    
export default CommentContainer;