// @flow
import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(
    0,
    0,
    0,
    ${props => (props.theme.name === 'light' ? '0.5' : '0.7')}
  );
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  border-radius: 5px;
  padding: 2.4rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  background-color: ${props =>
    props.theme.name == 'light' ? 'white' : props.theme.backgroundSecondary};
`
type ContentProps = {
  dismiss: Function,
  children: Function
}
class Content extends React.Component<ContentProps> {
  handleClickOutside = () => {
    this.props.dismiss()
  }

  render() {
    return <Wrapper>{this.props.children()}</Wrapper>
  }
}

const ContentWithClick = onClickOutside(Content)

type ModalProps = {
  dismiss: Function,
  children: Function,
  noBackground?: boolean
}
const Modal = (props: ModalProps) => {
  const { noBackground = false, ...restProps } = props

  if (noBackground) {
    return <Content {...restProps} />
  }

  return (
    <Background>
      <ContentWithClick {...restProps} />
    </Background>
  )
}

export default Modal
