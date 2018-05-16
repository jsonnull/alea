// @flow
import * as React from 'react'
import type { MessageResult } from 'common/types'
import { Container, Row, Roll, Modifier } from './styles'

type Props = {
  result: ?string
}
type State = {
  error: ?string,
  result: ?MessageResult
}
class Results extends React.Component<Props, State> {
  state = { error: null, result: null }

  componentDidCatch() {
    this.setState({ error: 'Error showing this result' })
  }

  static getDerivedStateFromProps(nextProps: Props) {
    if (nextProps.result) {
      return { result: JSON.parse(nextProps.result) }
    }

    return null
  }

  render() {
    const { error, result } = this.state
    if (error) {
      return <Container>{error}</Container>
    }

    if (!result) {
      return null
    }

    return (
      <Container>
        {result.rolls.map((actions, i) => (
          <Row key={i}>
            {actions.map((action: any, j) => {
              if (action.type == 'roll') {
                return (
                  <React.Fragment>
                    {j !== 0 && <Modifier>{action.operation}</Modifier>}
                    <Roll>{action.result}</Roll>
                  </React.Fragment>
                )
              } else if (action.type == 'number') {
                return (
                  <React.Fragment>
                    {j !== 0 && <Modifier>{action.operation}</Modifier>}
                    <Roll>{action.number}</Roll>
                  </React.Fragment>
                )
              }
            })}
          </Row>
        ))}
      </Container>
    )
  }
}

export default Results
