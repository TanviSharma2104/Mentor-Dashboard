import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

import{ Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/students" element={<Students/>} />
      </Routes>
      <Toaster/>
    </Layout>
  );
}

export default App;