import React from 'react'
import { connect } from 'react-redux'
import { LoginCRUD } from '../../actions/action'
import axiosWithAuth from '../../components/redux/withAuth/AxiosWithAuth'

class Login extends React.Component {
  state = {
    login: {
      username: '',
      password: '',
    },
  }

  onSubmit = e => {
    e.preventDefault()

    axiosWithAuth()
      .post(`/auth/login`, this.state.login)
      .then(res => {
        console.log('Fetch_Post_Data', res.data)
        localStorage.setItem('token', res.data.token)
        this.props.history.push('/Dashboard')
      })
      .catch(err => console.log(err))
  }

  onChange = e => {
    this.setState({
      login: { ...this.state.login, [e.target.name]: e.target.value },
    })
  }

  render() {
    return (
      <div className="sign">
        <div className="left">
          <h1> MarketPlace </h1>

          <div className="background"></div>
        </div>

        <div className="container">
          <form className="right" onSubmit={this.onSubmit}>
            <h1 className="create"> Sign In </h1>

            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.login.username}
              onChange={this.onChange}
            />

            <label> Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.login.password}
              onChange={this.onChange}
            />

            <button> Login </button>
          </form>
        </div>
      </div>
    )
  }
}

const map = state => ({
  login: state.login,
  error: state.error,
})

export default connect(map, { LoginCRUD })(Login)
