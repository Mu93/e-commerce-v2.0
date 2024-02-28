import { useState } from "react";
import LoginForm from "./_comp/LoginForm";
import RegisterForm from "./_comp/RegisterForm";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-xl font-bold mb-5">Registration</h1>

      <div className="flex justify-around mb-4 bg-gray-200 px- py-1 rounded-2xl w-64">
        <button
          className={`py-1 px-9 rounded-2xl ${
            activeTab === "login" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabChange("login")}
        >
          Login
        </button>
        <button
          className={`py-1 px-9 rounded-2xl ${
            activeTab === "register" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabChange("register")}
        >
          Register
        </button>
      </div>
      {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthPage;
