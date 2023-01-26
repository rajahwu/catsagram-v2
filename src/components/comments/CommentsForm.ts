import $ from "jquery";
import Comment from "./Comment";

const CommentsForm = $('<div>', {
    width: '350px',
    height: '200px',
    id: 'comment_form_container',
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

CommentsForm.hide()

const commentForm: JQuery<HTMLFormElement> = $('<form>', {
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

const deleteComentBtn = $('<button>❌</button>', {
    css: {
        cursor: 'pointer'
    },
})

const formBtnContainer = $('<div>', {
    width: '25px',
    height: '50px',
    css: {
        padding: '0px',
        placeItems: 'center'
    }
})

const resetBtn = $('<button>', {
    width: '25px',
    height: '25px',
    css: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        alignSelf: 'end',
        marginBottom: '20px',
        marginLeft: '7px',
        cursor: 'pointer'
    },
    click: (e: Event) => {
        e.preventDefault()
        CommentsForm.hide()
        newComment.val('')
        $('#makeCommentBtn').show()
    }
})
    .append($('<img>', {
        width: 25,
        height: 25,
        'src': '../red_x.png'
    }))

export const commentStorageArray: string[] = []

const submitBtn = $('<button>', {
    width: '25px',
    height: '25px',
    css: {
        borderRadius: '50%',
        alignSelf: 'end',
        marginBottom: '20px',
        marginLeft: '7px',
        cursor: 'pointer'
    },
    click: (e: Event) => {
        e.preventDefault()
        if (newComment.val()?.toString().length) {
            commentStorageArray.push(newComment.val()?.toString()!)
            localStorage.setItem('comments', JSON.stringify(commentStorageArray))
            Comment.clone()
                .text(newComment.val()?.toString() || '')
                .append(deleteComentBtn.clone()
                    .css({
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        fontSize: '5px',
                        width: '15px',
                        height: '15px',
                        marginLeft: '50px',
                        borderRadius: '50%'
                    })
                    .on('click', function () {
                        const comment = $(this).parent().text()
                        const remove = comment.slice(0, comment.length - 1)
                        commentStorageArray.splice(commentStorageArray.indexOf(remove), 1)
                        localStorage.setItem('comments', JSON.stringify(commentStorageArray))
                        $(this).parent().remove()
                    }))
                .prependTo($('#comments'))
        }
        CommentsForm.hide()
        newComment.val('')
        $('#makeCommentBtn').show()
    }
})
    .append($('<img>', {
        width: 10,
        height: 10,
        'src': '../green_check.png'
    }))



commentForm.append(newComment)
commentForm.append(formBtnContainer)
formBtnContainer.append(resetBtn)
formBtnContainer.append(submitBtn)
CommentsForm.append(commentForm)

export default CommentsForm ;