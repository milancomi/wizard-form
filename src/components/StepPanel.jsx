import React, { Component } from 'react';
import "./StepPanel.css";

class StepPanel extends Component {
    state = { 
        stepIndex:this.props.stepIndex
     }
    render() { 
        
        const steps = [1,2,3,4];
        return ( 
            <React.Fragment>
                
                 {steps.map((data,index) => (
            <div key={index} className={(data===this.state.stepIndex) ? "activeColor panelIndicator" : "panelIndicator"}>
              <h4 className="genreName">{data}</h4>
            </div>
          ))}
            </React.Fragment>
         );
    }
}
 
export default StepPanel;