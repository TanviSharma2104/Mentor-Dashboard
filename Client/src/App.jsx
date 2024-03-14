import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Students from './pages/Students';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';


function App() {
  return (
    
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/students' element={<Students />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
