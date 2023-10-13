import {Component} from 'react'
import './index.css'

const loginimage =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png'
const loginimagealt = 'website login'
const websitelog =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'

class LoginForm extends Component {
  state = {username: '', password: '', mynameerror: '', mypasserror: ''}

  passwordinput = event => {
    this.setState({password: event.target.value})
  }

  usernameinput = event => {
    this.setState({username: event.target.value})
  }

  blurusername = () => {
    const {username} = this.state
    if (username === '') {
      this.setState({mynameerror: '*requried'})
    } else {
      this.setState({mynameerror: ''})
    }
  }

  passblur = () => {
    const {password} = this.state
    if (password === '') {
      this.setState({mypasserror: '*requried'})
    } else {
      this.setState({mypasserror: ''})
    }
  }

  gotohomepage = () => {
    const {history} = this.props
    history.replace('/')
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
    if (status === undefined) {
      this.setState({errormsg: ''})
    } else {
      this.setState({errormsg: '*Username and Password didn`t match'})
    }

    if (response.ok === true) {
      this.gotohomepage()
    }
  }

  render() {
    const {errormsg, username, password, mynameerror, mypasserror} = this.state
    console.log(mynameerror)

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
                onBlur={this.blurusername}
              />
              <p className="errormsgsty">{mynameerror}</p>
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
                onBlur={this.passblur}
              />
              <p className="errormsgsty">{mypasserror}</p>
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
