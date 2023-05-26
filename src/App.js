import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Portal';
import Quotes from './pages/Quotes';
import Profile from './pages/Profile';
import Moves from './pages/Moves';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Portal/>}>
        <Route index element={<Moves/>}/>
        <Route path="quotes" element={<Quotes/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
     </Routes>
     <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
     </BrowserRouter>
    </div>
  );
}

export default App;
