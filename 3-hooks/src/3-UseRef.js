import React, { useRef, forwardRef } from 'react';

const App = () => {
	const textInput = useRef(null);

	const triggerHandler = () => {
		console.log(textInput.current.value);
	};

	return (
		<>
			<h1>Form: </h1>
			<InputComponent ref={textInput} />
			<button onClick={triggerHandler}>Submit</button>
		</>
	);
};

const InputComponent = forwardRef((props, ref) => {
    return <input type='text' ref={ref} />;
});

export default App;
