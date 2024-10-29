//routing changes
import Mainform from "./components/mainForm/Mainform"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditPage from "./components/editPage/EditPage"

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Mainform />,
	},
	{
		path: "/edit",
		element: <EditPage />,
	},
])

createRoot(document.getElementById("root")).render(
	<RouterProvider router={appRouter} />
)
