import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-black text-slate-500'>Products</h2>
        <Link 
          to='products/new'
          className='rounded-xl bg-indigo-600 text-sm p-3 text-white shadow hover:bg-indigo-500'>
          New Product
        </Link>
      </div>
    </>
  )
}
