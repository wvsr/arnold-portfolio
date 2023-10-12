import Arnold from '../assets/arnold.png'
import MobileHero from '../assets/MobileHero.png'
export default function AboutMe() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mx-auto px-4 max-w-7xl pt-14 gap-3'>
      <div>
        <h2 className='text-3xl font-semibold text-center py-4 md:text-left'>
          Sobre mi
        </h2>
        <img className='hidden md:block' src={Arnold} alt='' />
        <div className='flex justify-center w-full'>
          <img className='md:hidden block' src={MobileHero} alt='' />
        </div>
      </div>
      <div className='py-6'>
        <div className='flex gap-3 md:gap-5 '>
          <span className='text-base md:text-xl font-semibold border-spacing-5 border-b-[4px] border-[#220F80] text-[#220F80]'>
            Resumen
          </span>
          <span className='text-base md:text-xl font-semibold text-[#5E6488]'>
            Certificaciones
          </span>
          <span className='text-base md:text-xl font-semibold text-[#5E6488]'>
            Reconocimientos
          </span>
        </div>
        <div className='flex items-end h-full pt-0 pb-6 md:pb-12'>
          <div>
            <h2 className='text-4xl font-semibold mb-5'>
              <span className='text-[#5E47D2]'>¡Hola!,</span> soy Arnold
            </h2>
            <p className='pt-4'>
              En la vanguardia del mundo tecnológico, desempeño el rol de
              Arquitecto de Datos en la destacada firma Globant. Al mismo
              tiempo, colaboro activamente en el programa de empleabilidad
              focalizado en Big Data y Machine Learning, en el innovador entorno
              de Google Cloud Platform (GCP), bajo el auspicio de la Fundación
              Telefónica.{' '}
            </p>
            <p className='pt-4'>
              Proporciono capacitación especializada en Data Engineering a
              empresas líderes, mediante la prestigiosa institución UTEC.
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
        </div>
      </div>
    </section>
  )
}
