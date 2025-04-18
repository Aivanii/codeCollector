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
import AboutPage from './pages/AboutPage.jsx';
import FAQ from './pages/FAQ.jsx';
import Privacy from './pages/Privacy.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
import EmployeesPage from './pages/EmployeesPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
//components
import OneFilterPage from './Components/OneFilterPage/OneFilterPage.jsx';
import TwoFiltersPage from './Components/TwoFiltersPage/TwoFiltersPage.jsx';
import MainUser from './pages/MainUser/MainUser.jsx';
import HistoryUser from './pages/MainUser/HistoryUser.jsx';
import ChangePass from './pages/MainUser/ChangePass.jsx';
import DeleteAcc from './pages/MainUser/DeleteAcc.jsx';
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
		path: '/about',
		element: <AboutPage />,
		errorElement: <ErrorPage404 />
	},
	{
		path: '/FAQ',
		element: <FAQ />,
		errorElement: <ErrorPage404 />
	},
	{
		path: '/privacy',
		element: <Privacy />,
		errorElement: <ErrorPage404 />
	},
	{
		path: '/policy',
		element: <PolicyPage />,
		errorElement: <ErrorPage404 />
	},
	{
		path: '/employees',
		element: <EmployeesPage />,
		errorElement: <ErrorPage404 />
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
			<TextArticle />
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/search/:request',
		element: (<>
			<SearchPage />
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/user/:id',
		element: (<>
			<User RightMenu={MainUser} Title={"Страница пользователя"}></User>
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/user/:id/history',
		element: (<>
			<User RightMenu={HistoryUser} Title={"История просмотров"}></User>
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/user/:id/change_pass',
		element: (<>
			<User RightMenu={ChangePass} Title={"Смена пароля пользователя"}></User>
		</>),
		errorElement: <ErrorPage404 />,
	},
	{
		path: '/user/:id/delete_acc',
		element: (<>
			<User RightMenu={DeleteAcc} Title={"Удаление аккаунта пользователя"}></User>
		</>),
		errorElement: <ErrorPage404 />,
	},
	
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<RouterProvider router={Route} />
	</React.StrictMode>
);