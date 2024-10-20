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
import TextArticle from "./pages/TextArticle.jsx"
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
		path: '/articles/:filt1/:filt2',
		element: <Articles />,
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/articles/:filt1/:filt2/:article',
		element: (<>
			<Articles />
			<p>здесь должна прогружаться статья</p>
			<TextArticle />
		</>),
		errorElement: <ErrorPage404 />,
	},
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<RouterProvider router={Route} />
	</React.StrictMode>
);