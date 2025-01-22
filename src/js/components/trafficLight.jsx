import React, { useState } from "react"

const trafficLight = () => {

    const [selected, setSelected] = useState("yellow")
    
    const changeColor = (color) => {
        setSelected(color)
    }
    
    return (
        <main>
            <div className="support-box"></div>
            <div className="lights-boxes">
                <div 
                    className={`red ${selected == "red" ? "on" : ""}`} 
                    onClick={()=>changeColor("red")}>                
                </div>
                <div
                    className={`yellow ${selected == "yellow" ? "on" : ""}`}
                    onClick={()=>changeColor("yellow")}>
                </div>
                <div
                    className={`green ${selected == "green" ? "on" : ""}`}
                    onClick={()=>changeColor("green")}>
                </div>
            </div>    
        </main>
    )
}
export default trafficLight