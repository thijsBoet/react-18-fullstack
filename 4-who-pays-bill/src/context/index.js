import React,{ Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const MyContext = React.createContext();

const DEFAULT_STATE = {
		stage: 1,
		players: [],
		result: '',
}

class MyProvider extends Component {
	state = DEFAULT_STATE;

	addPlayerHandler = name => {
		this.setState(prevState => ({
			players: [...prevState.players, name],
		}));
	};

	removePlayerHandler = idx => {
		let newArray = this.state.players;
		newArray.splice(idx, 1);
		this.setState({ players: newArray });
	};

	nextHandler = () => {
		const { players } = this.state;
		if (players.length < 2) {
			toast.error('You need at least 2 players', {
				position: toast.POSITION.TOP_LEFT,
				autoClose: 2000,
			});
		} else {
			this.setState({ stage: 2 }, () =>
				setTimeout(() => {
					this.generateLoser();
				}, 1000)
			);
		}
	};

	generateLoser = () => {
		const { players } = this.state;
		const random = Math.floor(Math.random() * players.length);
		this.setState({ result: players[random] });
	};

	resetGame = () => {
		this.setState(DEFAULT_STATE);
	};

	render() {
		return (
			<>
				<MyContext.Provider
					value={{
						state: this.state,
						addPlayer: this.addPlayerHandler,
						removePlayer: this.removePlayerHandler,
						next: this.nextHandler,
						getNewLoser: this.generateLoser,
						resetGame: this.resetGame,
					}}
				>
					{this.props.children}
				</MyContext.Provider>
				<ToastContainer />
			</>
		);
	}
}


export {
    MyContext,
    MyProvider
}