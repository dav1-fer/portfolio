import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import AboutPage from './pages/About/AboutPage.jsx'
import ProjectsPage from './pages/Projects/ProjectsPage.jsx'
import ContactsPage  from './pages/Contacts/ContactsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/contacts',
        element: <ContactsPage />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
