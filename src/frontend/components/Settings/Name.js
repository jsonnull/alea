// @flow
import React from 'react'
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

  componentWillReceiveProps(prev: Props) {
    // See if there's a new name
    if (this.props.name !== prev.name) {
      this.setState({ name: this.props.name })
    }
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value })
  }

  onBlur = () => {
    if (this.state.name != this.props.name) {
      this.props.saveDisplayName(this.state.name)
    }
  }

  render() {
    return (
      <Input
        value={this.state.name}
        onChange={this.onChange}
        onBlur={this.onBlur}
      />
    )
  }
}
