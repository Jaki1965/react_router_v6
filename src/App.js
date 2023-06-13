import './App.css';
import { Routes, Route} from'react-router-dom';
import {Homepage} from './pages/Homepage';
import {Aboutpage} from './pages/Aboutpage';
import {Blogpage} from './pages/Blogpage';
import {Notfoundpage} from './pages/Notfoundpage';
import {Layout} from './components/Layout';
import {Mypage} from './components/Mypage';




function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path='posts' element={<Blogpage />}/>
        <Route path='about' element={<Aboutpage />}/>
        <Route path='outlet' element={<Mypage />}/>
        <Route path='*' element={<Notfoundpage />}/>
      </Route>
     </Routes>
   
    </>
  );
}

export default App;
