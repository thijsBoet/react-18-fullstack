import {useLocation} from 'react-router-dom'

import React from 'react'

export const withRouter = Component => {
    const Wrapper = props => {
        return (
            <Component {...props} location={useLocation()} />
        )
    }
    return Wrapper
}

export default withRouter