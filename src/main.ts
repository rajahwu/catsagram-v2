import './style.css'
import $ from "jquery";
import { App, Pic, VoteButtons, Comment, CommentsForm, Comments, commentStorageArray   } from './components';

$(() => {
    const app = $('#app')
    .css({
        display: 'flex',
        justifyContent: 'center'
    });
    App.appendTo(app);
    Pic.appendTo(App);
    Comments.appendTo(App);
    VoteButtons.appendTo(App);

    $('body').append(CommentsForm);
})

$(() => {
    $.get('https://api.thecatapi.com/v1/images/search', (response) => {
        $('#catImage').attr({
            src: localStorage.getItem('catPic') || response[0].url,
            width: '250px',
            height: '250px'
        });
        localStorage.setItem('catPic', localStorage.getItem('catPic') || response[0].url)
    })
});

$(() => {
    if(localStorage.getItem('upvoteBtn') == "true") {
         $('.upvoteBtn').trigger('click')
    }
    if(localStorage.getItem('downvoteBtn') == "true") {
        $('.downvoteBtn').trigger('click')
    }

    
    if (localStorage.getItem('comments')) {
        const deleteComentBtn = $('<button>❌</button>', {
            css: {
                cursor: 'pointer'
            },
        })
        JSON.parse(localStorage.getItem('comments')!).forEach((ele: string) => {
            commentStorageArray.push(ele)
            console.log(ele)
            const li = Comment.clone()
            .text(ele)
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
            $('#comments').append(li)
            localStorage.setItem('comments', JSON.stringify(commentStorageArray))
        })
    }

})



