import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Landing from './pages/Landing'
import Loader from './component/Loader';
const App = () => {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
