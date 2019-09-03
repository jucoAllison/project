import React from 'react'
import './Clothes.css'

const Clothes = (props) => {
    return(

                <div className="size ">
                        <div id="info">
                            <div id="price">${Math.ceil(Math.random()*45)}</div>
                            <div id="love">love</div>
                        </div>
                    <div id="image">
                        <img src={props.img} alt=" " />
                    </div>
                    </div>
    )

}

export default Clothes;