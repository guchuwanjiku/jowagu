import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='md:flex gap-3 w-full'>
        <Link href='/signin' className='flex items-center header-button'>
          Hello, Sign in
        </Link>

        <Link href='/cart' className='header-button'>
          <div className='flex items-end'>
            <ShoppingCartIcon className='h-8 w-8' />
            <span className='font-bold'>Cart</span>
          </div>
        </Link>
      </nav>
    </div>
  )
}
