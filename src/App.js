import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Hompage from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Hompage} />
    <Route component={NotFound} />
  </Switch>
)
export default App
