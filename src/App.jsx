import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, MainContent, Sidebar } from "./components";
import { Categories, Dashboard, Products, NotFound, AuthPage } from "./pages";
import ProtectedRoutes from "./contextApi/auth/ProtectedRoutes";

const user = {
  name: "Admin",
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`flex flex-col w-full ${
            isSidebarOpen ? "md:ml-64" : "ml-0"
          }`}
        >
          <Header user={user} onToggleSidebar={toggleSidebar} />
          <MainContent>
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/products" element={<Products />} />
                <Route path="/categories" element={<Categories />} />
              </Route>
              <Route exact path="/auth" element={<AuthPage />} />
            </Routes>
          </MainContent>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default App;
