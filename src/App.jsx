import Layout from './pages/Layout'
import Index from './pages/Index'
import Details from './pages/Details'
import "./App.css";

import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>} />
          <Route path='/:productId' element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;