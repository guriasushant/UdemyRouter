
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Events from "./pages/Events";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import {loader as eventsLoader} from "./pages/Events"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: eventsLoader },
          { path: ":id", element: <EventDetail /> },
          { path: "new", element: <NewEvent /> },
          { path: ":id/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
