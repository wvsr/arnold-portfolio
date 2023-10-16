import { useState } from 'react'
import Arnold from '../assets/arnold.png'
import MobileHero from '../assets/MobileHero.png'
import { certification } from './../data/certification'
import { recognition } from './../data/recognition'
function Resume() {
  return (
    <>
      <div>
        <h2 className='text-4xl font-semibold mb-5'>
          <span className='text-[#5E47D2]'>¡Hola!,</span> soy Arnold
        </h2>
        <p className='pt-4'>
          En la vanguardia del mundo tecnológico, desempeño el rol de Arquitecto
          de Datos en la destacada firma Globant. Al mismo tiempo, colaboro
          activamente en el programa de empleabilidad focalizado en Big Data y
          Machine Learning, en el innovador entorno de Google Cloud Platform
          (GCP), bajo el auspicio de la Fundación Telefónica.{' '}
        </p>
        <p className='pt-4'>
          Proporciono capacitación especializada en Data Engineering a empresas
          líderes, mediante la prestigiosa institución UTEC.
        </p>
        <div className='flex flex-col md:flex-row gap-3 pt-8'>
          <button className='btn-primary w-full md:w-auto'>
            Trabajemos juntos
          </button>
          <button className='btn-secondary w-full md:w-auto'>
            Descargar CV
          </button>
        </div>
      </div>
    </>
  )
}

function Certification() {
  return (
    <>
      <div className='p-4 space-y-3 w-full grid grid-cols-2 gap-2 max-w-md'>
        {certification.map((e, i) => {
          return (
            <div
              key={i}
              className='p-2 border border-gray-200 rounded-md shadow-sm w-full'
            >
              <a
                href={e.credential}
                className='block w-full h-full py-2 rounded-md'
                target='_blank'
                rel='noreferrer'
              >
                <p className='text-[15px] text-gray-800'>{e.name}</p>
                <p className='text-sm text-gray-400'>{e.date}</p>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

function Recognition() {
  return (
    <>
      <div className='p-4'>
        {recognition.map((e, i) => {
          return (
            <a
              href={e.link}
              className='block border border-gray-200 p-4 rounded-xl shadow'
              key={i}
            >
              <div>
                <p className='text-xl mb-3 font-semibold'>{e.title}</p>
                <p className='text-sm text-gray-600'>{e.desc}</p>
              </div>
            </a>
          )
        })}
      </div>
    </>
  )
}
export default function AboutMe() {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mx-auto px-4 max-w-7xl pt-14 gap-3'>
      <div>
        <h2 className='text-3xl font-semibold text-center py-4 md:text-left'>
          Sobre mi
        </h2>
        <div className='relative'>
          <img className='hidden md:block' src={Arnold} alt='' />
          <img
            className='md:hidden block absolute bottom-0'
            src={MobileHero}
            alt=''
          />
        </div>
      </div>

      <div className='py-6'>
        <div className='flex gap-3 md:gap-5 '>
          <button
            className={`text-base md:text-xl font-semibold border-spacing-5 text-[#5E6488] ${
              currentTab === 0 &&
              'border-b-[4px] border-[#220F80] text-[#220F80]'
            }`}
            onClick={() => setCurrentTab(0)}
          >
            Resumen
          </button>
          <button
            className={`text-base md:text-xl font-semibold text-[#5E6488] ${
              currentTab === 1 &&
              'border-b-[4px] border-[#220F80] text-[#220F80]'
            }`}
            onClick={() => setCurrentTab(1)}
          >
            Certificaciones
          </button>
          <button
            className={`text-base md:text-xl font-semibold text-[#5E6488] ${
              currentTab === 2 &&
              'border-b-[4px] border-[#220F80] text-[#220F80]'
            }`}
            onClick={() => setCurrentTab(2)}
          >
            Reconocimientos
          </button>
        </div>
        <div className='flex items-end h-full pt-0 pb-6 md:pb-12 w-full'>
          {currentTab === 0 && <Resume />}
          {currentTab === 1 && <Certification />}
          {currentTab === 2 && <Recognition />}
        </div>
      </div>
    </section>
  )
}
