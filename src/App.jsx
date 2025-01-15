import { useReducer, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./Reducers/CartReducer";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;