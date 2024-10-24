import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage404 from './error-page-404';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

//routes
import Index from './pages/index.jsx';
import Catalog from './pages/Catalog.jsx';
import Articles from './pages/Articles.jsx';
import TextArticle from "./pages/TextArticle.jsx";
import User from './Components/User/User.jsx';
//components
import LeftMenu from "./Components/Articles/LeftMenu.jsx";
import OneFilterPage from './Components/OneFilterPage/OneFilterPage.jsx';
import TwoFiltersPage from './Components/TwoFiltersPage/TwoFiltersPage.jsx';
import MainUser from './pages/MainUser/MainUser.jsx';
//
const Route = createBrowserRouter([
	{
		path: '/',
		element: <Index />,
		errorElement: <ErrorPage404 />,
		children: [
			{
				path: 'home',
				element: <></>
			}
		]
	},
	{
		path: '/catalog',
		element: <Catalog />,
		errorElement: <ErrorPage404 />
	},
	{
		path: '/articles/:filt1',
		element: (<>
			<Articles />
			<OneFilterPage />
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/articles/:filt1/:filt2',
		element: (<>
			<Articles />
			<TwoFiltersPage />
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/articles/:filt1/:filt2/:article',
		element: (<>
			<Articles />
			<LeftMenu></LeftMenu>
			<TextArticle />
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/user/:id',
		element: (<>
			<User rightMenu={MainUser} Title={"Страница пользователя"}></User>
		</>),
		errorElement: <ErrorPage404 />,
	}
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<RouterProvider router={Route} />
	</React.StrictMode>
);