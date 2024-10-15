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
import Create from './pages/Create.jsx';
//
const Route = createBrowserRouter([
	{
		path: '/',
		element: <Index />,
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/create',
		element: <Create />,
		errorElement: <ErrorPage404 />,
	}
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<RouterProvider router={Route} />
	</React.StrictMode>
);