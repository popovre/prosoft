import { StoreProvider } from './redux/store-provider';
import { lazy } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/component';

const HomePage = lazy(() => import('./pages/home-page/component'));
const CinemasTablePage = lazy(
  () => import('./pages/cinemas-table-page/component')
);

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
