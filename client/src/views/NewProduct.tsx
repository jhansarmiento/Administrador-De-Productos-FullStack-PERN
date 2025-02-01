import { Link } from 'react-router-dom'

export default function NewProduct() {
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
  </>
  )
}
