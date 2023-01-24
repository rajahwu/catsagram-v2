import $ from "jquery";
import Comment from "./comment";

const CommentFormContainer:JQuery<HTMLDivElement> = $('<div>', {
    width: '350px',
    height: '200px',
    id: 'comment_form_container',
    class: 'draggable',
    css: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '50vh',
        left: '25vh',
        border: '3px solid black',
        borderRadius: '15px',
        backgroundColor: 'hsl(0, 0%, 5%)'
    }
})

CommentFormContainer.hide()

const commentForm:JQuery<HTMLFormElement> = $('<form>', {
    width: 300,
    height: 150,
    css: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid black',
        borderRadius: '15px',
        boxShadow: '5px 5px 5px black'
    },
})

const newComment: JQuery<HTMLTextAreaElement> = $('<input>', {
    name: 'comment',
    type: 'textarea',
    width: '250px',
    height: '100px',
})

const submitBtn: JQuery<HTMLButtonElement> = $('<button>', {
    width: '25px',
    height: '25px',
    css: {
        borderRadius: '50%',
        alignSelf: 'end',
        marginBottom: '20px',
        marginLeft: '7px'
    },
    click: (e: Event) => {
        e.preventDefault()
            if (newComment.val()?.toString().length)
                Comment.clone()
                    .text(newComment.val()?.toString() || '')
                    .prependTo('#comments')
        CommentFormContainer.hide()
        newComment.val('')
    }
})

commentForm.append(newComment)
commentForm.append(submitBtn)
CommentFormContainer.append(commentForm)

export default CommentFormContainer;