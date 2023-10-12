import RecentProjectImage from './../assets/RecentProject.png'
function RecentProjects() {
  return (
    <section className='px-3 max-w-6xl py-14 mx-auto'>
      <div className='text-center'>
        <h2 className='text-[35px] md:text-[42px] font-semibold'>
          <span className='text-[#694DF9]'>Proyectos</span> Recientes
        </h2>
        <p className='text-base max-w-sm w-full mx-auto mt-2 mb-8 text-[#0A0A0A]'>
          Consulte las implementaciones recientes y los diseños de alto nivel
        </p>
      </div>
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
        <div>
          <img src={RecentProjectImage} alt='' />
        </div>
        <div className='space-y-4'>
          <h2 className='text-[27px] md:text-[32px] font-semibold'>
            Most Profitable Products of Retail E-Commerce Company{' '}
          </h2>
          <p>
            El líder de TI abordó la creación de una base de datos central por
            sí mismo, encontrando desafíos debido a la falta de estructura y
            estrategia. Sin embargo, al colaborar con expertos, se seleccionaron
            herramientas adecuadas, se estableció un flujo de trabajo completo y
            se automatizó eficientemente todo el proceso. Como resultado, se
            logró una arquitectura bien diseñada y una mejora significativa en
            los informes, lo que permitió identificar con precisión las tiendas
            y productos de alto rendimiento.
          </p>
          <p className='text-xl text-[#757575]'>Cliente: Lorem Ipsum</p>
          <button className='btn-primary'>¡Conversemos!</button>
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
