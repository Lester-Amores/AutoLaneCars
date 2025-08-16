import MainLayout from "./layouts/main";
import Home from "./pages/home";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/home");
    }
  }, []);
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
