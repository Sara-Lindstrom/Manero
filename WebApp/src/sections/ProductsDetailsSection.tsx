import React, { useState, useEffect } from 'react';
import { IProduct } from '../Interfaces/IProduct';
import { fetchProductById, fetchColorsForProduct, fetchSizesForProduct, fetchImagesForProduct, shuffleArray } from '../helpers/ProductHandler';
import { IColor } from '../Interfaces/IColor';
import { ISize } from '../Interfaces/ISize';
import { IImage } from '../Interfaces/IImage';
import { fetchUserId } from '../helpers/AddressHandler';
import { Review, fetchReviewsForProduct } from '../helpers/ReviewHandler';

interface IProductsDetailsSectionProps {
    product: IProduct;
}

const ProductsDetailsSection: React.FC<IProductsDetailsSectionProps> = ({ product }) => {
    const [localProduct, setLocalProduct] = useState<IProduct | null>(null);
    const [colors, setColors] = useState<IColor[]>([]);
    const [sizes, setSizes] = useState<ISize[]>([]);
    const [images, setImages] = useState<IImage[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [displayedReviews, setDisplayedReviews] = useState<JSX.Element[]>([]);
    const [sizeArray, setSizeArray] = useState<string[]>([]);
    const [activeSize, setActiveSize] = useState<ISize | null>(null);
    const [activeColor, setActiveColor] = useState<IColor | null>(null);
    const [counter, setCounter] = useState(0);

    let review_array: JSX.Element[] = [];

    // Get product's total review
    let sum = 0;
    let number_of_reviews = 0;
    let total_review = 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [fetchedProduct, fetchedColors, fetchedSizes, fetchedImages] = await Promise.all([
                    fetchProductById(product.id),
                    fetchColorsForProduct(product.id),
                    fetchSizesForProduct(product.id),
                    fetchImagesForProduct(product.id),
                ]);

                setLocalProduct(fetchedProduct);
                setSizes(fetchedSizes); 
                setColors(fetchedColors);
                setImages(fetchedImages);

                processSizes(fetchedSizes);

                const productReviews = await fetchReviewsForProduct(product.id);
                setReviews(productReviews);

                // Display 2 random reviews of the product
                fetchAndDisplayReviews();
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchData();
    }, [product.id]);

    const processSizes = (sizesForProduct: ISize[]) => {
        // Create an array to store size names based on their IDs
        const sizeArray: string[] = [];

        // Populate size_array with size names
        for (let i = 0; i < sizesForProduct.length; i++) {
            sizeArray.push(sizesForProduct[i].sizeName);
        }

        // Update the state with the processed sizes
        setSizeArray(sizeArray);
    };

    useEffect(() => {
        fetchAndDisplayReviews();
    }, [product.id]);

    //(Add to whishlist) button
    let isAddedToWishlist = false;
    function addWishList() {

        if (isAddedToWishlist == false) {
            //Make the heart red
            const add = document.getElementById("wishlist-btn");
            add?.classList.add("add-wishlist");
            isAddedToWishlist = true;
            //Now add (Add to whishlist function)
        }
        else {
            //Restore the heart's original color
            const remove = document.getElementById("wishlist-btn");
            remove?.classList.remove("add-wishlist");
            isAddedToWishlist = false;
            //Now add (Remove from whish list function)
        }
    }

    let img: JSX.Element[] = [];

    // Create an array of JSX elements for images
    const imageSlides = images.map((image, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image.imagePath} alt={product?.name} />
        </div>
    ));

    // Create an array of JSX elements for dot buttons
    const dotButtons = images.map((_, index) => (
        <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={`dot ${index === 0 ? 'active' : ''}`}
            aria-label={`Slide ${index + 1}`}
        ></button>
    ));

    //Increment and decrement counter
    function incrementCounter() {
        setCounter(current => current + 1);
    }

    function decrementCounter() {
        if (counter > 0) {
            setCounter(current => current - 1);
        }
        else {
            setCounter(0);
        }
    }

    function activeClickSize(selectedSize: ISize) {
        setActiveSize((prevSize) => (prevSize === selectedSize ? null : selectedSize));
    }

    function activeClickColor(clickedColor: IColor) {
        setActiveColor((prevColor) => (prevColor?.colorId === clickedColor.colorId ? null : clickedColor));
    }

    const fetchAndDisplayReviews = async () => {
        try {
            const allReviews = await fetchReviewsForProduct(product.id);

            const shuffledReviews = shuffleArray(allReviews);

            const reviewsToDisplay = await Promise.all(
                shuffledReviews.slice(0, 2).map(async (randomReview, index) => {
                    try {
                        const userData = await fetchUserId(randomReview.userId) as { name: string } | null;

                        if (userData) {
                            const filledStars = Array.from({ length: randomReview.rating }, (_, i) => (
                                <i key={i} className="fas fa-star rating"></i>
                            ));

                            const emptyStars = Array.from({ length: 5 - randomReview.rating }, (_, i) => (
                                <i key={i} className="far fa-star rating"></i>
                            ));

                            return (
                                <div className='review' key={index}>
                                    <div className='user-img'>
                                        <img src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg" alt={userData.name} />
                                    </div>
                                    <div className='display-review'>
                                        <div className='review-header'>
                                            <div className='user-name'>
                                                <p>{userData.name}</p>
                                                <p className='date'>{randomReview.date}</p>
                                            </div>
                                            <div className='review-stars'>
                                                {filledStars}{emptyStars}
                                            </div>
                                        </div>
                                        <div className='review-content'>
                                            {randomReview.comment}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className='review' key={index}>
                                    <div className='user-img'>
                                        <img src={'path-to-default-image'} alt={'Default User'} />
                                    </div>
                                    <div className='display-review'>
                                        <div className='review-header'>
                                            <div className='user-name'>
                                                <p>Default User</p>
                                                <p className='date'>{randomReview.date}</p>
                                            </div>
                                            <div className='review-stars'>
                                                {Array.from({ length: randomReview.rating }, (_, i) => (
                                                    <i key={i} className="fas fa-star rating"></i>
                                                ))}
                                                {Array.from({ length: 5 - randomReview.rating }, (_, i) => (
                                                    <i key={i} className="far fa-star rating"></i>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='review-content'>
                                            {randomReview.comment}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                        return null;
                    }
                })
            );

            setDisplayedReviews(reviewsToDisplay.filter(review => review !== null) as JSX.Element[]);
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setDisplayedReviews([]);
        }
    };


    //Find if the price is discounted
    let current_price;

    if (product?.salesPrice !== undefined && product.salesPrice > 0) {
        current_price = (
            <p>
                <del>${product?.price}</del>
                <span>${product.salesPrice}</span>
            </p>
        );
    } else {
        current_price = <p>${product?.price}</p>;
    }

    return (
        <>
            <section className='product-details-section'>
                <div className='container'>

                    <section className='details-section-widescreen'>
                        <div className='details'>
                            <div className='product-name'>
                                <h2>{product?.name}</h2>
                                <button type='button' title="display-wishlist" onClick={e => { addWishList() }}><i className="fa-solid fa-heart" id='wishlist-btn'></i></button>
                            </div>
                            <div className='review-section-top'>
                                <a href='/allproductreview'>{review_array} {"(" + number_of_reviews + ")"} </a>
                            </div>
                        </div>
                    </section>
                    <section className="image-section">
                        <div className='icons'>
                            {img}
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {imageSlides}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="carousel-indicators">
                            {dotButtons}
                        </div>
                    </section>
                    <div className='description-section-widescreen'>
                        <h2>Decription</h2>
                        <p>{product?.description}</p>
                    </div>
                    <section className='details-section'>
                        <div className='details'>
                            <div className='product-name'>
                                <h4>{product?.name}</h4>
                                <button type='button' title="display-wishlist" onClick={e => { addWishList() }}><i className="fa-solid fa-heart" id='wishlist-btn'></i></button>
                            </div>
                        </div>
                        <div className='product-total-review'>
                            <a href='/allproductreview'>{review_array} {"(" + number_of_reviews + ")"} </a>
                        </div>
                        <div className='price-section'>
                            <div className='price'>
                                {current_price}
                            </div>
                            <div className='counter'>
                                <button type='button' className='decrement' onClick={e => { decrementCounter() }}><span>-</span></button>
                                <button className='show-counter'><span>{counter}</span></button>
                                <button type='button' className='increment' onClick={e => { incrementCounter() }}><span>+</span></button>
                            </div>
                        </div>
                        <div className='size-section'>
                            <p>Size</p>
                            <div className='sizes' id='sizes'>
                                {sizes.map(size => (
                                    <button
                                        key={size.sizeId}
                                        title="display-size"
                                        className={`size ${activeSize === size ? 'active-btn' : ''}`}
                                        id={size.sizeId}
                                        onClick={() => { activeClickSize(size) }}
                                    >
                                        {size.sizeName}
                                    </button>
                                ))}
                            </div>
                            <div className='avilable-sizes' id='avilable-sizes'>
                                {sizes.map(size => (
                                    <span key={size.sizeId}>{size.sizeName}</span>
                                ))}
                            </div>
                        </div>

                        <div className='color-section'>
                            <p>Color</p>
                            <div className='colors' id='colors'>
                                {colors.map(color => (
                                    <span
                                        key={color.colorId}
                                        className={`color-span ${activeColor?.colorName === color.colorName ? 'active-btn' : ''}`}
                                        style={{ backgroundColor: color.colorName, border: '1px solid black' }}
                                        onClick={() => { activeClickColor(color); }}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        <div className='description-section'>
                            <h2>Decription</h2>
                            <p>{product?.description}</p>
                        </div>
                        <div className='add-to-cart-btn'>
                            <button className='dark-btn add-cart-btn'>+ ADD TO CART</button>
                        </div>
                    </section>
                    <section className='review-section'>
                        <div className='view-all-reviews'>
                            <h2>Reviews ({reviews.length})</h2>
                            <a href='allproductreview'>view all <i className="fa-solid fa-chevron-right"></i></a>
                        </div>
                        <div className='reviews'>
                            {displayedReviews}
                        </div>
                    </section>

                    <div className='counter-widescreen'>
                        <div className='price'>{current_price}</div>
                        <div className='counter'>
                            <button type='button' className='decrement' onClick={e => { decrementCounter() }}><span>-</span></button>
                            <button className='show-counter'><span>{counter}</span></button>
                            <button type='button' className='increment' onClick={e => { incrementCounter() }}><span>+</span></button>
                        </div>
                        <div className='add-to-cart-btn'>
                            <button className='dark-btn add-cart-btn'>+ ADD TO CART</button>
                        </div>
                    </div>

                    <section className='review-section-widescreen'>
                        <div className='view-all-reviews'>
                            <h2>Reviews ({reviews.length})</h2>
                            <a href='allproductreview'>view all <i className="fa-solid fa-chevron-right"></i></a>
                        </div>
                        <div className='reviews'>
                            {displayedReviews}
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default ProductsDetailsSection