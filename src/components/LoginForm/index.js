import {Component} from 'react'
import './index.css'

const loginimage =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png'
const loginimagealt = 'website login'
const websitelog =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'

class LoginForm extends Component {
  state = {username: '', password: '', errormsg: ''}

  passwordinput = event => {
    this.setState({password: event.target.value})
  }

  usernameinput = event => {
    this.setState({username: event.target.value})
  }

  gotohomepage = () => {
    const {history} = this.props
    history.replace('/')
  }

  displayerrormsg = msg => {
    this.setState({errormsg: msg})
  }

  submitform = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userdetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    const status = data.status_code
    console.log(status)

    if (response.ok === true) {
      this.gotohomepage()
    } else {
      this.displayerrormsg(data.error_msg)
    }
  }

  render() {
    const {errormsg, username, password} = this.state

    return (
      <div className="loginpagebgcontaainer">
        <img src={websitelog} alt="website logo" className="smlogopx" />
        <img src={loginimage} alt={loginimagealt} className="loginimagepx" />
        <div className="formcontainer">
          <img src={websitelog} alt="website logo" className="loginlogopx" />
          <form className="formpage" onSubmit={this.submitform}>
            <div>
              <label htmlFor="username">USERNAME</label>
              <br />
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="margin inputsty"
                value={username}
                onChange={this.usernameinput}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="margin inputsty"
                value={password}
                onChange={this.passwordinput}
              />
            </div>
            <button type="submit" className="margin loginbutton">
              Login
            </button>
            <p className="errormsgsty">{errormsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
