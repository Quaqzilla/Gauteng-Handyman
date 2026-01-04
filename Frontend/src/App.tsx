import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Services } from './Pages/Services';
import { Contact } from './Pages/Contact';
import { Request } from './Pages/Request';
import { Gallery } from './Pages/Gallery';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About-Us' element={<About/>}/>
          <Route path='/Services/:serviceId' element={<Services/>}/>
          <Route path='/Contact-Us' element={<Contact/>}/>
          <Route path='/Request-A-Quotation' element={<Request/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
