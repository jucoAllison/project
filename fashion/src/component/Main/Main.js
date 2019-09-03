import React,{Component} from "react";
import intro from "../../img/home.png";
// import Find from "../Find/Find";
import intro2 from "../../img/hero.png"
import "./Main.css"
import {Link} from 'react-router-dom'


export default  (porps ) => {
    return(
        <div class="main">
            
            <div id="body">
                <div id="find" onClick={porps.toggleShowFind}>Find Style</div>
                <div id="img">
                    <img id="intro" src={intro} alt="intro IMAGE" />
                    {/* <img id="intro" src={intro2} alt="intro IMAGE" /> */}
                </div>
                <Link to="/send measurements"> <div id="send">Send Your Measurements</div> </Link>

                {/* <Find /> */}
            </div>
        </div>
    )
    }
// }
// class Main extends Component{
//     state = {
//         on: false
//     }
//     on = () =>{
//         this.setState({on: true})
//     }
//     render() {
//         console.log(this.state.on)
        
//     }
// }

// export default Main;