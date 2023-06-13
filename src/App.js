import './App.css';
import { Routes, Route} from'react-router-dom';
import {Homepage} from './pages/Homepage';
import {Aboutpage} from './pages/Aboutpage';
import {Blogpage} from './pages/Blogpage';
import {Singlepage} from './pages/Singlepage';
import {Createpost} from './pages/Createpost';
import {Editpost} from './pages/Editpost';

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
        <Route path='posts/:id' element={<Singlepage />}/>
        <Route path='posts/:id/edit' element={<Editpost />}/>
        <Route path='posts/new' element={<Createpost />}/>
        <Route path='about' element={<Aboutpage />}/>
        <Route path='outlet' element={<Mypage />}/>
        <Route path='*' element={<Notfoundpage />}/>
      </Route>
     </Routes>
   
    </>
  );
}

export default App;
