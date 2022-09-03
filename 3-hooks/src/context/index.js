import React, { Component } from 'react';
const MyContext = React.createContext();

class MyProvider extends Component {

	state = {
		users: [
			{ id: 1, name: 'John Doe' },
			{ id: 2, name: 'Jane Doe' },
			{ id: 3, name: 'Jack Doe' },
			{ id: 4, name: 'Jill Doe' },
			{ id: 5, name: 'Joe Doe' },
        ],
        active: true
    };

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const { toggleActive } = this;
        const { users, active } = this.state;
        
		return (
			<MyContext.Provider
				value={{
					users,
					active,
					toggleActive,
					// users: this.state.users,
					// active: this.state.active,
					// toggleActive: this.toggleActive
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export { MyContext, MyProvider };
