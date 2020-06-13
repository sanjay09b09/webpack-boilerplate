import React from 'react'
import icon from '../assets/nasa-logo.png'
class App2 extends React.Component {

    render() {
      return (<div>
        <h3 className="hello"><img src={icon} style={{width:200,height:200}}></img>Webpack second component</h3>

        
      </div>
        
    );
    }
  
  }
export default App2;