import React from 'react'
import axiosWithAuth from '../../components/redux/withAuth/AxiosWithAuth'

class SignUp extends React.Component {
  state = {
    info: {
      username: '',
      password: '',

      email: '',
    },
  }

  onHandle = e => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.name]: e.target.value,
      },
    })
  }

  onSubmit = e => {
    e.preventDefault()

    axiosWithAuth()
      .post('/auth/register', this.state.info)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
    this.props.history.push('/DashBoard')
  }

  render() {
    return (
      <div className="sign">
        <div className="left">
          <h1> Marketplace </h1>

          <h2> Grow your business </h2>
        </div>

        <div className="container">
          <form className="right" onSubmit={this.onSubmit}>
            <h1 className="create">Create Account </h1>
            <label>Username </label>
            <input
              type="text"
              name="username"
              value={this.state.info.username}
              onChange={this.onHandle}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.info.password}
              onChange={this.onHandle}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.info.email}
              onChange={this.onHandle}
            />

            <button>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
