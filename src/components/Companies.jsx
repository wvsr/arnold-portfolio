import Marquee from 'react-fast-marquee'
import logo1 from './../assets/company/logo1.png'
import logo2 from './../assets/company/logo2.png'
import logo3 from './../assets/company/logo3.png'
import logo4 from './../assets/company/logo4.png'
import logo5 from './../assets/company/logo5.png'
import logo6 from './../assets/company/logo6.png'
import logo7 from './../assets/company/logo7.png'

function Companies() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-14'>
      <h2 className='text-2xl md:text-4xl text-center font-semibold'>
        <span className='text-[#694DF9]'>Experiencia </span>
        profesional con destacadas empresas
      </h2>
      <div className='flex flex-wrap mt-14 justify-center gap-6'>
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
        <img src={logo5} />
        <img src={logo6} />
        <img src={logo7} />
      </div>
    </div>
  )
}

export default Companies
