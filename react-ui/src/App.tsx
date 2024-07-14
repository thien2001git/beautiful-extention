import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './presentation/initial/Routes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
