//routing changes
import Mainform from "./components/mainForm/Mainform"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditPage from "./components/editPage/EditPage"
import Successform from "./components/success/Successform"
import "font-awesome/css/font-awesome.min.css"
import TermsAndConditions from "./components/terms/TermsAndConditions"

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Mainform />,
	},
	{
		path: "/edit",
		element: <EditPage />,
	},
	{
		path: "/success",
		element: <Successform />,
	},
	{
		path: "/terms",
		element: <TermsAndConditions />,
	},
])

createRoot(document.getElementById("root")).render(
	<RouterProvider router={appRouter} />
)
