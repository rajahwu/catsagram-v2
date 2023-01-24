import './style.css'
import $ from "jquery";
import { App, Pic, VoteButtons, CommentsForm, Comments } from './components';


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
            src: response[0].url,
            width: '250px',
            height: '250px'
        });
    })
});



