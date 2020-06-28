import React from "react"
import './ProgressBar.sass'

function ProgressBar(props) {
    let percentage = '100%'
    if (props.value >= 0 && props.value <= 1) {
        percentage = props.value * 100 + '%'
    } else if (props.value > 1 && props.value <= 100) {
        percentage = props.value + '%'
    }
    const indicator_width = {
        flexBasis: percentage
    }
    console.log(percentage)

    return (
        <div className="progress_container">
            <div className="progress_indicator" style={indicator_width}/>
            <div className="progress_space"/>
        </div>
    )
}

export default ProgressBar