import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import Graph from './pages/graph'
import Table from './pages/table'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graph" element={<Graph />} /> 
        <Route path="/table" element={<Table />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function WrappedApp() {
  return <HashRouter> <App/> </HashRouter>
}

export default WrappedApp;