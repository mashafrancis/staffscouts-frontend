import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import "./assets/css/app.css";
import "./assets/css/fonts.css";

import { AuthProvider } from "react-auth-kit";
import type { RouteObject } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Page from "./components/Page";
import { Main } from "./layouts";
import { Fallback, NoMatch } from "./routes";
import {
	AccountSettingsView,
	ContingencyHiringView,
	IndexView as HomeView,
	JobListingView,
	LoginView,
	RegisterView,
} from "./views";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Main />,
		children: [
			{ index: true, element: <HomeView /> },
			{
				path: "/login",
				element: <LoginView />,
			},
			{
				path: "/register",
				element: <RegisterView />,
			},
			{
				path: "/job-listing",
				element: <JobListingView />,
			},
			{
				path: "/contingency-hiring",
				element: <ContingencyHiringView />,
			},
			{
				path: "/account",
				element: <AccountSettingsView />,
			},
			{ path: "*", element: <NoMatch /> },
		],
	},
];

const router = createBrowserRouter(routes);

if (import.meta.hot) {
	import.meta.hot.dispose(() => router.dispose());
}

function App(): JSX.Element {
	return (
		<Page>
			<AuthProvider authName="_auth" authType="cookie">
				<RouterProvider router={router} fallbackElement={<Fallback />} />
			</AuthProvider>
		</Page>
	);
}

export default App;
