import { useState } from 'react'
import './App.css'
import HomeComponent from './routes/Home'
import ContactUs from './routes/Contactus';
import AboutUs from './routes/Aboutus';
import Login from './routes/Login'
import Signup from './routes/Signup'
import Donation from './routes/Donation';
import Request from './routes/Request';
import NgoPortal from './routes/NgoPortal'
import RequestPortal from "./routes/RequestPortal";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Features from './routes/Features';
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <BrowserRouter>
          <Routes>
            <>
              <Route path="/" element={<HomeComponent/>} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/features" element={<Features />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="/request" element={<Request />} />
              <Route path="/ngo-portal" element={<NgoPortal />} />
              <Route path="/request-portal" element={<RequestPortal />} />
            </>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App