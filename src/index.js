import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/nickdrafke/projects/my-app/src/style.css';

const Buttons = (props) => (
    <div className="button-box">
    <button onClick={props.click} >CLICK</button>   
     
    </div>
)
class App extends React.Component{
constructor(props){
    super(props);
    this.state = {
        text: "Will it work?"
    }
    this.handleClick = this.handleClick.bind(this);
}
handleClick = () => {
    if(this.state.text === "Will it work?"){
this.setState({
    text: "Yes"
});
}
else {
    this.setState({
        text: "Will it work?"
    });
}
}
    render(){
        
           
        return(
            <div className="container">
             <h1 className="title">First VSCode React App (handleClick test)</h1>  
            <h1 className="state-test">{this.state.text}</h1>
                <Buttons click={this.handleClick}/>
                
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));