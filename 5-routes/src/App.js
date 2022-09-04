import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';
import PostId from './components/PostId';

import Users from './components/Users';
import Guests from './components/Guests';
import Admins from './components/Admins';

const App = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
					<Link
						to='/'
						className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
					>
						<span className='fs-4'>React Router</span>
					</Link>

					<ul className='nav nav-pills'>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='posts' className='nav-link'>
								Posts
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='profile' className='nav-link'>
								Profile
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='users' className='nav-link'>
								Users
							</Link>
						</li>
					</ul>
				</header>

				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='posts' element={<Posts />}></Route>
					<Route path='posts/:id' element={<PostId />}></Route>
					<Route path='profile' element={<Profile />}></Route>
					<Route path='users' element={<Users />}>
						<Route path='guests' element={<Guests />}></Route>
						<Route path='admins' element={<Admins />}></Route>
					</Route>
					<Route
						path='*'
						element={
							<>
								<h4>404, This is not the page you are looking for.</h4>
							</>
						}
					></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
