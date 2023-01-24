import $ from "jquery";
/**
 * Main App Container
 */

const App:JQuery<HTMLDivElement> = $('<div>', {
    id: "app_container",
    class: "container",
    css: {
        height: '650px',
        width: '400px',
        border: '5px solid black',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'hsl(0, 0%, 5%)'
    }
})

export default App;