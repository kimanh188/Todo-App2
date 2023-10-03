import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeContainer } from "./routes/Home/home.container.jsx";
import { TodoContainer } from "./routes/Todos/todo.container.jsx";
import { TodosContextProvider } from "./contexts/todo.context.jsx";
import { FooterWrapper } from "./components/FooterWrapper/footer.wrapper.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<FooterWrapper />}>
        <Route path={"/"}>
          <Route index element={<HomeContainer />} />
          <Route path={"/home"} element={<HomeContainer />} />
          {/* <Route path={"/login"} element={<LoginContainer} /> */}
        </Route>
      </Route>
      <Route
        path={"/todos"}
        element={
          <TodosContextProvider>
            <TodoContainer />
          </TodosContextProvider>
        }
      />
      <Route element={<FooterWrapper />}>
        <Route path={"*"} element={"Dies ist ein 404 Error"} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
