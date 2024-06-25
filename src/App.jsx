import Home from './pages/Home';
import Forums from './pages/Forums';
import Boutique from './pages/Boutique';
import Membres from './pages/Membres';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from './components/Autres/TopNav';
import Nav from './components/Autres/Nav';

function App() {


  return (
    <>
      <div className="" >
        <BrowserRouter>
          <div>
            <TopNav />
          </div>
          <div>
            <Nav />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/membres" element={<Membres />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
