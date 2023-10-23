import React from 'react'

interface IBreadcrumbProps {
  currentPage: string
  showBackButton?: boolean; // En flagga för att visa eller dölja knappen
  onNavigateBack?: () => void; // En funktion som anropas när användaren klickar på knappen för att gå tillbaka
}

const BreadcrumbSection: React.FC<IBreadcrumbProps> = ( {currentPage, showBackButton, onNavigateBack } ) => {
  return (
    <section className='breadcrumb'>
        <div className='container'>
            <ul className='breadcrumb-list'>

              <li className='backButton'>
                {showBackButton && onNavigateBack && (
                  <button onClick={onNavigateBack}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                )}
              </li>

              <li className='currentPage'>{currentPage}</li>
         
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection