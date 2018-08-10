
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.showText = this.showText.bind(this);
        this.state = {
            isActive: false
        }
    }
    showText () {
        this.setState((prevState) => {
            const active = prevState.isActive;
            return {
                isActive: !active
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibiltiy Toggle</h1>
                <button onClick={this.showText}>{this.state.isActive ? "Hide" : "Show"}</button>
                <p>{this.state.isActive ? "This is some text" : null}</p>
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let bool = false;
// const toggle = () => {
//     if (bool == true){
//         bool = false;
//         render();
//     } else {
//         bool = true;
//         render();
//     }
// }

// const render = () => {
//     const app = (
//         <div>
//             <h1>Indecision App</h1>
//             <button onClick={toggle}>{bool?"Hide":"Show"}</button>
//             <p>{bool?"This is some text":null}</p>
//         </div>
//     );
   
//     ReactDOM.render(app,appRoot);
// }

// const appRoot = document.getElementById("app");
// render();
