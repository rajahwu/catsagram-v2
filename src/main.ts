import './style.css'
import $ from "jquery";
import { AppContainer, PicContainer, CommentContainer, ButtonContainer, CommentFormContainer } from './components';


$(() => {
    const app = $('#app')
    .css({
        display: 'flex',
        justifyContent: 'center'
    });
    AppContainer.appendTo(app);
    PicContainer.appendTo(AppContainer);
    CommentContainer.appendTo(AppContainer);
    ButtonContainer.appendTo(AppContainer);

    $('body').append(CommentFormContainer);
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



