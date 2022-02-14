import './App.scss';
import { Outlet } from "react-router-dom"
import AppHeader from "./Components/header/AppHeader";

function App() {
  return (
      <div>
        <AppHeader></AppHeader>
        <Outlet></Outlet>
      </div>
  );
}

export default App;
