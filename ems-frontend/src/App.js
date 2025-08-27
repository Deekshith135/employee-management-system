import './App.css';
// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your custom components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import EmployeeListComponent from './components/EmployeeListComponent';
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element={<EmployeeListComponent />} />
            <Route path='/employees' element={<EmployeeListComponent />} />
            <Route path='/add-employee' element={<EmployeeComponent />} />
            <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;