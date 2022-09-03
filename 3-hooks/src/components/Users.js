import React, { Component } from 'react';
import UsersItem from './UsersItem';
import { MyContext } from '../context/index';

class Users extends Component {
    static contextType = MyContext;

    render() {
        console.log(this.context);
		return (
            <div>
                <MyContext.Consumer>
                    <UsersItem />
                </MyContext.Consumer>
			</div>
		);
	}
}

export default Users;
