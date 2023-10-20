import React from 'react'

interface IBreadcrumbProps {
  currentPage: string
}

const BreadcrumbSection: React.FC<IBreadcrumbProps> = ( {currentPage} ) => {
  return (
    <section className='breadcrumb'>
        <div className='container'>
            <ul className='breadcrumb-list'>
                <li>{currentPage}</li>
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection