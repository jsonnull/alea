/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  onClick: Function,
  variant?: string,
  customClass?: string,
  children?: string
}

const getStyleVariant = (variant: string): string => {
  switch (variant) {
    case 'red':
      return styles.red
    case 'green':
      return styles.green
    case 'outline':
      return styles.outline
    default:
      return ''
  }
}

const Button = (props: Props) => {
  let { customClass = '', variant = '', children, ...restProps } = props

  variant = getStyleVariant(variant)

  const style = `${styles.button} ${variant} ${customClass}`

  return <button
    onClick={props.onClick}
    className={ style }
    {...restProps}
  >
    { props.children }
  </button>
}

export default Button
