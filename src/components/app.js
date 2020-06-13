import React , {Suspense} from 'react'
import './app.scss'
import icon from '../assets/nasa-logo.png'
// import App2 from './app2'
const App2 = React.lazy(() => import('./App2'));


class App extends React.Component {

  render() {
    return (<Suspense fallback={<div>Loading...</div>}>
      <h3 className="hello"><img src={icon} style={{ width: 200, height: 200 }}></img>Webpack Demo App...</h3>
      <App2></App2>
    </Suspense>

    );
  }

}
export default App;