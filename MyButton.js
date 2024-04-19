function MyButton(props) {
    const [isClicked, setIsclicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsclicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);