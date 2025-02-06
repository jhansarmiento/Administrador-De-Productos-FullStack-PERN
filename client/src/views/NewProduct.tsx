import { Link, Form, useActionData, ActionFunctionArgs, redirect } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import { addProduct } from '../services/ProductService'

export async function action({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())

  let error = ''

  if(Object.values(data).includes('')){
    error = 'All Fields Are Mandatory'
  }

  if(error.length) {
    return error
  }

  await addProduct(data)

  return redirect('/')
}

export default function NewProduct() {

  const error = useActionData() as string

  return (
    <>
    <div className='flex justify-between'>
      <h2 className='text-4xl font-black text-slate-500'>New Product</h2>
      <Link 
        to='/'
        className='rounded-xl bg-indigo-600 text-sm p-3 text-white shadow hover:bg-indigo-500'>
        Products
      </Link>
    </div>

    {error && <ErrorMessage>{error}</ErrorMessage>}

    <Form 
      className='mt-10'
      method='POST'
    >
        <div className='mb-4'>
          <label 
            htmlFor="name"
            className='text-gray-800'
          >Product Name</label>
          <input 
            type="text"
            id="name"
            name="name"
            className="mt-2 block w-full p-3 bg-gray-50 rounded-xl"
            placeholder="Product Name"
          />
        </div>
        <div className='mb-4'>
          <label 
            htmlFor="price"
            className='text-gray-800'
          >Product Name</label>
          <input 
            type="number"
            id="price"
            name="price"
            className="mt-2 block w-full p-3 bg-gray-50 rounded-xl"
            placeholder="Product Price. e.g 199, 300"
          />
        </div>
        <input 
          type="submit"
          className='mt-5 p-3 bg-indigo-600 hover:bg-indigo-500 w-full rounded-xl text-white font-bold cursor-pointer'
          value='Register Product'
        />
      </Form> 
  </>
  )
}
