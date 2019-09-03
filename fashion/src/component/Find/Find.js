import React,{Component} from 'react'
import a2 from "../../img/2.jpg"
import a1 from "../../img/1.jpg"
import a3 from "../../img/3.jpg"
import a5 from "../../img/wear3.jpg"
import Clothes from '../Clothes/Clothes'
import a4 from "../../img/4.jpg"
import './Find.css';


class Find extends Component{
    state={
        eee: true
    }
    render(){
        let style = {
            display: this.state.eee ?  'block' : "none"
        }
        return(
            <div className="allfind">
                <header  style={style}>
                </header>
                <div className="grid">
                    <Clothes img={a1}/>
                    <Clothes img={a2}/>
                    <Clothes img={a3}/>
                    <Clothes img={a4}/>
                    <Clothes img={a5}/>
                </div>
            </div>

        )
    }
}

export default Find