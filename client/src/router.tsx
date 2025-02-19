import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as ProductLoader } from './views/Products'
import NewProduct, { action as NewProductAction } from './views/NewProduct'
import EditProduct from './views/EditProduct'

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
            },
            {
                path: 'products/:id/edit', //ROA Pattern - Resource Oriented Architecture
                element: <EditProduct />,
            }
        ]
    }
])