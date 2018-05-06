// @flow
import * as React from 'react'
import Input from 'frontend/components/Input'

type Props = {
  name: string,
  saveDisplayName: Function
}

type State = {
  name: string
}

export default class Name extends React.Component<Props, State> {
  state = {
    name: this.props.name
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // See if there's a new name
    if (nextProps.name !== prevState.name) {
      return { name: nextProps.name }
    }

    return null
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value })
  }

  submit = () => {
    if (this.state.name != this.props.name) {
      this.props.saveDisplayName(this.state.name)
    }
  }

  handleKeyPress = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      this.submit()
    }
  }

  render() {
    return (
      <Input
        value={this.state.name}
        onChange={this.onChange}
        onBlur={this.submit}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}
