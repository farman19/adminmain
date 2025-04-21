
import './App.css';
import Home from './home/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login/login';
import Admin from './pages/admin/admin';
import Register from './register/register';
import { ToastContainer } from 'react-toastify';

import SellerList from './pages/sellerlist/sellerlist';
import AddNewSeller from './pages/addnewseller/addnewseller';

import DashboardPage from './pages/dashboard/dashboard';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />, 
      children: [
        {
          path:'/dashboard',
          element:<DashboardPage/>
        },
        {
          path: '/admin',
          element: <Admin />
        },
        {
          path:'/sellerlist',
          element: <SellerList/>
          
        },
        {
          path:'/addnewseller',
          element: <AddNewSeller/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
      <ToastContainer/>
    </div>
  );
}

export default App;
