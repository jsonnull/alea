// @flow
import * as React from 'react'

type QueryHandlerOptions = {
  queries: Array<string>,
  mergeData?: Function
}

const queryHandler = (options: QueryHandlerOptions) => (
  Component: React.ComponentType<any>
): React.ComponentType<any> => {
  const C = (props: Object) => {
    const queries = options.queries.map(name => props[name])

    const isLoading = queries.map(q => q.networkStatus == 1).includes(true)
    const errors = queries.map(q => q.error).filter(err => err !== undefined)
    const hasError = errors.length > 0

    const newProps = { isLoading, hasError, errors, ...props }
    if (!isLoading && !hasError) {
      if (typeof options.mergeData == 'function') {
        Object.assign(newProps, options.mergeData(newProps))
      }
    }

    return <Component {...newProps} />
  }

  C.WrappedComponent = Component
  return C
}

export default queryHandler
