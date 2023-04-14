import React from 'react';
import '../../styles/pages/firework.css';

function Fireworks() {
  return (
    <>
        {
            Array(10).fill().map((_, i) => (

                <div id={`firework${i+1}`} className="firework">
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                    <div className="explosion"></div>
                </div>
            ))
        }
    </>
    
  )
}

export default Fireworks
