const OnboardingView = () => {
  return (
    <>  
        {/* This is for the OnboardingView preloading page (not implemented) */}
        <section className="welcome-transition">
            <div className="welcome-logo">
                <div className="welcome-logo-content">
                    <i className="welcome-logo-rectangular"></i>
                    <h1 className="welcome-logotype">MANERO</h1>
                </div>
            </div>
        </section>

        {/* This is for the OnboardingView with slides */}
        <section className="welcome-information">
            <div id="carouselExampleIndicators" className="carousel slide welcome-iformation-circle" >
                <div className="carousel-inner-container">
                    <div className="welcome-carousel-slide">
                        <div id="welcome-slide-1" className="carousel-item active">
                            <i>|</i> 
                            <h1 className="main-title">Welcome To Manero!</h1>
                            <p>Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.</p>
                        </div>
                        <div id="welcome-slide-2" className="#carousel-item">
                            <i>|</i>
                            <h1 className="main-title">Easy Track Order!</h1>
                            <p>Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.</p>
                        </div>
                        <div id="welcome-slide-3" className="carousel-item">
                            <i>|</i>
                            <h1 className="main-title">ADoor To Door Delivery!</h1>
                            <p>Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.</p>
                        </div>
                    </div>
                    <a className="btn dark-btn btn-get-started" href="/signup">GET STARTED</a>
                    <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="dot active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="dot" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="dot" aria-label="Slide 3"></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OnboardingView