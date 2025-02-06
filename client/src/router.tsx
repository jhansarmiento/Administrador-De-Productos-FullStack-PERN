import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as ProductLoader } from './views/Products'
import NewProduct, { action as NewProductAction } from './views/NewProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: ProductLoader
            },
            {
                path: 'products/new',
                element: <NewProduct />,
                action: NewProductAction
            }
        ]
    }
])