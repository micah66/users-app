import { RouterProvider } from '@tanstack/router'

import router from './routes.tsx'
import './App.css'

export default function App() {
  return <RouterProvider router={router} />
}
