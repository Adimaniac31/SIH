import React from 'react'
import Navbar from './Navbar'
import "./PrakritiReport.css"
import PrakritiBorder from "./assets/dec.png"
import Details from './constants/Details';

const PrakritiReport = (props) => {
    const prakritiOrder = ["Kapha", "Pitta", "Vata"];
    const pr = prakritiOrder[props.prediction]
    console.log(Details[pr]);
    const prakriti = Details[pr]?Details[pr].name:"Error loading Prakriti";
    const content = Details[pr]?Details[pr].content:"";
    // const prakriti = "Vata";
    // const content = "abcs";
    return (
        <div>
            {/* <Navbar /> */}
            <section className='Report'>
                <div className='PrakritiContainer'>
                    <img src={PrakritiBorder} className='PrakritiBorder'></img>
                    <h1 className='PrakritiName'>{prakriti}</h1>
                </div>
                <div className='Report-details-div'>
                    <p className='Report-details-text'>
                        {content}
                    </p>
                </div>
                <div className='Recommendation-div'>
                    <h1 className='Recommendation-heading'>Recommendations:</h1>
                    <div className='Plans'>
                        <button className='Diet-btn btn'>Diet Plannig</button>
                        <button className='Life-btn btn'>Lifestyle Planning</button>
                    </div>
                    <input
                        type="text"
                        placeholder="Type what you want to know!"
                        className='recommendation-input'
                    >
                    </input>
                </div>
            </section>
        </div>
    )
}

export default PrakritiReport