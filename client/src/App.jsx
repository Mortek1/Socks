import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRouter from './components/hoc/ProtectedRoute';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import AccountLoginPage from './components/pages/AccountLoginPage';
import AccountNewPage from './components/pages/AccountNewPage';
import useUser from './hooks/useUser';
import CartPage from './components/pages/CartPage';
import GeneratePage from './components/pages/GeneratePage/GeneratePage';
import FavoritesPage from './components/pages/FavoritePage';

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler}  />,
      children: [
        {
          path: '/generate',
          element: <GeneratePage user={user} />,
        },
        {
          path: '/',
          element: <MainPage user={user} />,
        },
        {
          path: "/carts",
          element: <CartPage user={user} />
        },
        {
          path: '/favorites',
          element: <FavoritesPage user={user} />
        },
        {
          element: <ProtectedRouter isAllowed={user.status !== 'logged'} />,
          children: [
            {
              path: '/account/new',
              element: <AccountNewPage signUpHandler={signUpHandler} />,
            },
            {
              path: '/account/login',
              element: <AccountLoginPage signInHandler={signInHandler} />,
            },

          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;