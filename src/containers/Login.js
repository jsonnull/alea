// @flow
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import { performUserLogin } from 'actions'
import Login from 'components/Login'

const enhance = compose(
  connect(null, (dispatch: Function) => ({
    login: (email: string, password: string) =>
      dispatch(performUserLogin(email, password))
  })),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onEmailChange: ({ setEmail }) => (e: Object) => setEmail(e.target.value),
    onPasswordChange: ({ setPassword }) => (e: Object) =>
      setPassword(e.target.value),
    onLogin: ({ login, email, password, setPassword }) => (e: Object) => {
      e.preventDefault()
      e.stopPropagation()

      login(email, password)
      setPassword('')
    }
  })
)

export default enhance(Login)
