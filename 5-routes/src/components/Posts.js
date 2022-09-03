import React, { Component } from 'react';
import { withRouter } from '../hoc/withRouter';

class Posts extends Component {
    render() {
        console.log(this.props);
		return <div>posts</div>;
	}
}

export default withRouter(Posts);