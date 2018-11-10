import React from 'react'

const AuthContext = React.createContext()

const __state__ = () => {
  try {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      token: localStorage.getItem('token')
    }
  } catch (err) {
    return {
      user: null,
      token: null
    }
  }
}

// mock login
const login = () => Promise.resolve({ token: '', user: {} })

class AuthProvider extends React.Component {
  state = __state__()

  login = async (data = {}) => {
    try {
      const { token, user } = await login(data)
      this.setState(
        {
          user,
          token
        },
        () => {
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
        }
      )
    } catch (error) {
      alert(error.message)
    }
  }

  logout = () => {
    this.setState(
      {
        user: null,
        token: null
      },
      () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    )
  }

  render() {
    const { user, token } = this.state
    return (
      <AuthContext.Provider
        value={{
          user,
          token,
          isAuth: !!user && !!token,
          reset: this.reset
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
