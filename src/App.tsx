import { StoreProvider } from './redux/store-provider';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/component';
import HomePage from './pages/home-page/component';
import CinemasTablePage from './pages/cinemas-table-page/component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/cinemas-table',
        element: <CinemasTablePage />,
      },
    ],
  },
]);

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
