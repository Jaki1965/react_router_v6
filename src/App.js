import './App.css';
import { Routes, Route, Navigate} from'react-router-dom';
import {Homepage} from './pages/Homepage';
import {Aboutpage} from './pages/Aboutpage';
import {Blogpage} from './pages/Blogpage';
import {Singlepage} from './pages/Singlepage';
import {Createpost} from './pages/Createpost';
import {Editpost} from './pages/Editpost';
import {LoginPage} from './pages/Loginpage';

import {Notfoundpage} from './pages/Notfoundpage';
import {Layout} from './components/Layout';
import {Mypage} from './components/Mypage';
import {RequireAuth} from './hoc/RequireAuth';
import {AuthProvider}  from './hoc/AuthProvider';




function App() {
  return (
    <AuthProvider>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path='posts' element={<Blogpage />}/>
        <Route path='posts/:id' element={<Singlepage />}/>
        <Route path='posts/:id/edit' element={<Editpost />}/>
        <Route path='posts/new' element={
          <RequireAuth>
            <Createpost  />
          </RequireAuth>
       }/>
        <Route path='about' element={<Aboutpage />}/>
        <Route path='about-us' element={<Navigate to='about' replace />}/>  {/*Например нужно парпалельно сделать навигацию на одну и ту же ссылку. replace  - чтобы не записывалось в историю браузера*/}
        <Route path='login' element={<LoginPage />}/>
        <Route path='outlet' element={<Mypage />}/>
        <Route path='*' element={<Notfoundpage />}/>
      </Route>
     </Routes>
    </AuthProvider>
  );
}

export default App;
