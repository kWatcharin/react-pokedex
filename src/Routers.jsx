import { 
  Route, createBrowserRouter, RouterProvider, createRoutesFromElements 
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import NotFoundLayout from './layouts/NotFoundLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Version from './pages/Version';
import Config from './pages/Config';
import NotFound from './pages/NotFound';


export default function Routers() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* General routes */}
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register/>}/>
          <Route path='config' element={<Config/>}/>
          <Route path='version' element={<Version/>}/>
        </Route>

        {/* Not found routes */}
        <Route element={<NotFoundLayout/>}>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
