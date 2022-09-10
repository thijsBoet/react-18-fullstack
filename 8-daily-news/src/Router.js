import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/home';
import Contact from './components/contact';
import Posts from './components/posts';

import Header from './components/header';
import MainLayout from './layouts/mainLayout';


const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<MainLayout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/posts' element={<Posts />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
};

export default Router;
