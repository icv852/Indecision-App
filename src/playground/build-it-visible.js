class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{!this.state.visibility ? 'Show Message' : 'Hide Message'}</button>
                {this.state.visibility && <p>Here is the secret message!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))






// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>{visibility ? 'Hide message' : 'Show message'}</button>
//             {visibility &&
//                 <p>Here is the secret message!</p>
//             }
//         </div>
//     )
    
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()