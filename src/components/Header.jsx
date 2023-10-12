import { useRef } from 'react'
import Logo from '../assets/Logo.png'
import MiniLogo from '../assets/MiniLogo.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineStar } from 'react-icons/ai'
import { FiServer } from 'react-icons/fi'
import { BsMap } from 'react-icons/bs'
const navList = [
  { name: 'Service', href: '#service', icon: AiOutlineStar },
  {
    name: 'Technologies',
    href: '#technologies',
    icon: FiServer,
  },
  {
    name: 'Proyectos',
    href: '#proyectos',
    icon: BsMap,
  },
]
export default function Header() {
  const mobileMenu = useRef(null)

  const openMenu = () => {
    mobileMenu.current.style.height = '100%'
  }
  const closeMenu = () => {
    mobileMenu.current.style.height = '0%'
  }
  return (
    <>
      <div
        className='h-0 w-full fixed z-50 top-0 left-0 text-[#FFF] overflow-x-hidden duration-700 transition-all bg-[#424242]'
        ref={mobileMenu}
      >
        <div className='border-b-2 border-gray-300 px-4 py-4 flex justify-between'>
          <div>
            <img src={MiniLogo} alt='' />
          </div>
          <p>Menú</p>
          <button onClick={closeMenu}>
            <AiOutlineClose className='w-6 h-auto' />
          </button>
        </div>
        <div className='mt-6 px-6 w-full'>
          {navList.map((e) => {
            return (
              <a
                href={e.href}
                key={e.name}
                onClick={closeMenu}
                className='border-b-2 inline-flex items-center gap-2 border-gray-300 px-4 py-4 w-full'
              >
                <e.icon />
                {e.name}
              </a>
            )
          })}
        </div>
      </div>
      {/* ************************* */}
      <header
        className='px-2 py-2.5 bg-white flex justify-around items-center border-b-2 border-gray-50 shadow-md'
        id='header'
      >
        <div>
          <a href='#header'>
            <img src={Logo} alt='logo' />
          </a>
        </div>
        <nav className='md:block hidden'>
          <ul className='flex gap-2 font-semibold'>
            {navList.map((e) => {
              return (
                <li key={e.name}>
                  <a href={e.href}>{e.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div>
          <button className='md:block hidden border-4 px-4 py-2.5 rounded-full font-bold border-[#220F80] text-[#220F80]'>
            Conversemos
          </button>
        </div>
        <div className='block md:hidden'>
          <button onClick={openMenu}>
            <AiOutlineMenu className='w-6 h-auto' />
          </button>
        </div>
      </header>
    </>
  )
}
