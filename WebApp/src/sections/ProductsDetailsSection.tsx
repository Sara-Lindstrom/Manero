import React, { useState, useEffect } from 'react';
import { IProduct } from '../Interfaces/IProduct';
import { fetchProductById, fetchColorsForProduct, fetchSizesForProduct, fetchImagesForProduct, shuffleArray } from '../helpers/ProductHandler';
import { IColor } from '../Interfaces/IColor';
import { ISize } from '../Interfaces/ISize';
import { IImage } from '../Interfaces/IImage';
import { Review, fetchReviewsByProduct } from '../helpers/ReviewHandler';

interface IProductsDetailsSectionProps {
    product: IProduct;
}

const ProductsDetailsSection: React.FC<IProductsDetailsSectionProps> = ({ product }) => {
    const [localProduct, setLocalProduct] = useState<IProduct | null>(null);
    const [colors, setColors] = useState<IColor[]>([]);
    const [sizes, setSizes] = useState<ISize[]>([]);
    const [images, setImages] = useState<IImage[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [sizeArray, setSizeArray] = useState<string[]>([]);
    const [activeSize, setActiveSize] = useState<ISize | null>(null);
    const [activeColor, setActiveColor] = useState<IColor | null>(null);
    const [counter, setCounter] = useState(0);
    const [cart, setCart] = useState<{ [key: string]: number }>({});

    // Get product's total review
    let sum = 0;
    let number_of_reviews = 0
    let total_review = 0;
    let review_array = [];
    for (let i = 0; i < reviews.length; i++) {
        if (product.id == reviews[i].productId) {
            sum = sum + reviews[i].rating;
            number_of_reviews++;
        }

    }
    total_review = sum / number_of_reviews;

    const fullStars = Math.floor(total_review);
    const halfStar = Math.ceil(total_review - fullStars);
    const emptyStars = 5 - fullStars - halfStar;

    let stars = 0;
    for (let i = 0; i < fullStars; i++) {
        review_array[stars] = <i className="fa-solid fa-star"></i>
        stars++;
    }

    for (let i = 0; i < halfStar; i++) {
        review_array[stars] = <i className="fa-regular fa-star-half-stroke"></i>
        stars++;
    }

    for (let i = 0; i < emptyStars; i++) {
        review_array[stars] = <i className="fa-regular fa-star"></i>
        stars++;
    }

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

                const productReviews = await fetchReviewsByProduct(product.id);
                setReviews(productReviews);

            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchData();
    }, [product.id]);

    const addToCart = (product: IProduct) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };
            updatedCart[product.id] = (updatedCart[product.id] || 0) + 1;
            sessionStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

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

    function activeClickColor(selectedColor: IColor) {
        setActiveColor((prevColor) => (prevColor === selectedColor ? null : selectedColor));
    }

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
                                <a href='/reviews'>{review_array} {"(" + number_of_reviews + ")"} </a>
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
                            <a href='/reviews'>{review_array} {"(" + number_of_reviews + ")"} </a>
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
                            <button className='dark-btn add-cart-btn' onClick={() => addToCart(product)}>+ ADD TO CART</button>
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

                </div>
            </section>
        </>
    )
}

export default ProductsDetailsSection