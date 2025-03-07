import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AssignmentPage from "./pages/AssignmentPage";
import { AssignmentProvider } from "./context/AssignmentContext";
import "./index.css";

function App() {
  return (
    <>
      <AssignmentProvider>
        <div className="min-h-screen bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignment/:id" element={<AssignmentPage />} />
          </Routes>
        </div>
      </AssignmentProvider>
    </>
  );
}

export default App;
