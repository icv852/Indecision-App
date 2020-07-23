let visibility = false

const toggleVisibility = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>{visibility ? 'Hide message' : 'Show message'}</button>
            {visibility &&
                <p>Here is the secret message!</p>
            }
        </div>
    )
    
    ReactDOM.render(jsx, document.getElementById('app'))
}

render()  