import { Suspense, lazy } from 'react';

import { StoreProvider } from './redux/store-provider';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/component';
import Loader from './components/loader/component';

const LazyHomePage = lazy(() => import('./pages/home-page/component'));
const LazyCinemasTablePage = lazy(
  () => import('./pages/cinemas-table-page/component')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <LazyHomePage />
          </Suspense>
        ),
      },
      {
        path: '/cinemas-table',
        element: (
          <Suspense fallback={<Loader />}>
            <LazyCinemasTablePage />
          </Suspense>
        ),
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
