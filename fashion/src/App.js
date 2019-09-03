    import React,{Component} from "react"
import Find from "./component/Find/Find"
import Send from "./component/Send/Send"
import Main from "./component/Main/Main";
import menu from "./img/menu-1.svg";
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css"

class App extends Component{
    state={
        showFind: false
    }
    toggleShowFind= () => {
        const doesShow = this.state.showFind;
        this.setState({showFind: !doesShow})
    }
    render() {
        let find = null
        if(this.state.showFind){
            find =
                    <Find 
                        showFind = {this.state.showFind}
                    />
        }
        return(
            <Router>
                <div className="app">
                    <nav id="logo">
                        <Link to="/"><div id="brand">SPLBES</div></Link>
                        <img id="menu" src={menu} alt="menu" />
                    </nav>
                        {find}
                        <Main toggleShowFind={this.toggleShowFind} />
                        <Send />
                    
                </div>
            </Router>
        )
    }
}

export default App