import React from 'react';
import { AppContext } from '@/App'

const withContext = Component => {
  return props => (
    <AppContext.Consumer>
      {data => <Component {...props} data={data} />}
    </AppContext.Consumer>
  )
}

export default withContext
