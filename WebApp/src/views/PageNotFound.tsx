import { Link, useNavigate } from 'react-router-dom';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import portalparrot from '../Images/portalparrot.gif';

const PageNotFound = () => {
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage="My Address" showBackButton={true} onNavigateBack={handleNavigateBack} />

            <section className='page-not-found-section'>
                <img src={portalparrot} className="page-not-found-img" alt="Page Not Found" />
                <div className="page-not-found-message">
                    <h1 className="page-not-found-title">oh crap.</h1>
                    <p>this page doesn't seem to exist.</p>
                </div>
                <Link to="/home" className="page-not-found-links">Go to HomePage</Link>
            </section>
        </>
    );
};

export default PageNotFound;