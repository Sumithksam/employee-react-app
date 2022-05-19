import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Employeeregister from './component/Employeeregister';
import Employeesearch from './component/Employeesearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewemployee from './component/Viewemployee';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
<Route path="/" exact element={<Employeeregister/>}/>
<Route path="/search" exact element={<Employeesearch/>}/>
<Route path="/view" exact element={<Viewemployee/>}/>
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
