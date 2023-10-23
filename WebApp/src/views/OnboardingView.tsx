const OnboardingView = () => {
  return (
    <section className="welcome-information">
        <div id="carouselExampleIndicators" className="carousel slide welcome-iformation-circle" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="dot active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="dot" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="dot" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner-container">
                <div className="carousel-inner welcome-carousel-slide">
                    <div className="carousel-item active">
                        <i>|</i> 
                        <h1>Welcome To Manero!</h1>
                        <p>Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.</p>
                    </div>
                    <div className="carousel-item">
                        <i>|</i>
                        <h1>Easy Track Order!</h1>
                        <p>Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.</p>
                    </div>
                    <div className="carousel-item">
                        <i>|</i>
                        <h1>ADoor To Door Delivery!</h1>
                        <p>Labore sunt culpa excepteur culpa ipsum. Labore occaecat ex nisi mollit.</p>
                    </div>
                </div>
                <button className="btn dark-btn">GET STARTED</button>
            </div>
        </div>
    </section>

  )
}

export default OnboardingView