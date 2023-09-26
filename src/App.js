import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <Sidebar />
      <Header /> */}
      <Layout />
      <ToastContainer />
    </>
  );
}

export default App;
