import React, { useState, useEffect } from 'react';
import { IProduct } from '../Interfaces/IProduct';
import { fetchProductById, fetchColorsForProduct, fetchSizesForProduct, fetchImagesForProduct, shuffleArray } from '../helpers/ProductHandler';
import { IColor } from '../Interfaces/IColor';
import { ISize } from '../Interfaces/ISize';
import { IImage } from '../Interfaces/IImage';
import { fetchUserId } from '../helpers/AddressHandler';
import { Review, fetchReviewsForProduct } from '../helpers/TestReviewHelper';

const ProductsDetailsSection: React.FC<{ productId: string }> = ({ productId }) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [colors, setColors] = useState<IColor[]>([]);
    const [sizes, setSizes] = useState<ISize[]>([]);
    const [images, setImages] = useState<IImage[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [fetchedSizes, setFetchedSizes] = useState<ISize[]>([]);
    const [sizesForProduct, setSizesForProduct] = useState<ISize[]>([]);
    const [fetchedProduct, setFetchedProduct] = useState<IProduct | null>(null);
    const [displayedReviews, setDisplayedReviews] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProduct = await fetchProductById(productId);
            setProduct(fetchedProduct);

            const sizesForProductResponse: ISize[] = await fetchSizesForProduct(fetchedProduct?.id || '');
            setSizesForProduct(sizesForProductResponse);

            // Fetch colors, sizes, and images
            if (fetchedProduct) {
                const fetchedColors = await fetchColorsForProduct(fetchedProduct.id);
                setColors(fetchedColors);

                const fetchedSizes = await fetchSizesForProduct(fetchedProduct.id);
                setSizes(fetchedSizes);

                setFetchedSizes(fetchedSizes);

                const fetchedImages = await fetchImagesForProduct(fetchedProduct.id);
                setImages(fetchedImages);

                processSizes(fetchedSizes);
            }
        };

        const processSizes = (sizesForProduct: ISize[]) => {
            // Create an array to store size names based on their IDs
            let size_array: string[] = [];

            // Populate size_array with size names
            for (let i = 0; i < sizesForProduct.length; i++) {
                size_array[i] = sizesForProduct[i].sizeName;
            }

            // Further processing or rendering based on size_array
            console.log(size_array);
        };

        // Call the asynchronous functions immediately
        fetchData();
    }, [productId]);

    useEffect(() => {
        fetchAndDisplayReviews();
    }, [productId]);

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

    // Make the number of slide buttons equal to number of avilable product's images 
    let dot_buttons = []; //array of dot button
    let img_url = []; //array of images
    let img = [] //array of small icons
    let num: number = 0;

    for (let j = 0; j < images.length; j++) {
        if (images[j].productId === product?.id) {
            if (num == 0) {
                dot_buttons[num] = <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={num} className="dot active" aria-label={"Slide" + num + 1}></button>;
                img_url[num] = <div id={"image-slide-" + num + 1} className="carousel-item active">
                    <img src={images[j].imagePath} alt={product?.name} />
                </div>
                num++;
                img[num] = <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={j} aria-label={"Slide" + j + 1}><img src={images[j].imagePath} alt={product.name} /></button>
            }
            else {
                dot_buttons[num] = <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={num} className="dot" aria-label={"Slide" + num + 1}></button>;
                img_url[num] = <div id={"image-slide-" + num + 1} className="carousel-item">
                    <img src={images[j].imagePath} alt={product.name} />
                </div>
                num++;
                img[num] = <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={j} aria-label={"Slide" + j + 1}><img src={images[j].imagePath} alt={product.name} /></button>
            }
        }
    }

    // Get product's total review
    let sum = 0;
    let number_of_reviews = 0
    let total_review= 0;
    let review_array = [];
    for (let i=0; i< reviews.length; i++){
        if (product?.id == reviews[i].productId)
        {
            sum = sum + reviews[i].rating; 
            number_of_reviews++;
        }
           
//     }
//     total_review = sum/number_of_reviews;

//     const fullStars = Math.floor(total_review);
//     const halfStar = Math.ceil(total_review - fullStars);
//     const emptyStars = 5 - fullStars - halfStar;

//     let stars=0;
//         for(let i=0; i< fullStars; i++){
//             review_array[stars] = <i className="fa-solid fa-star"></i>
//             stars++;
//         }
        
//         for(let i=0; i < halfStar; i++){
//             review_array[stars] = <i className="fa-regular fa-star-half-stroke"></i>
//             stars++;
//         }

//         for(let i=0; i < emptyStars; i++){
//             review_array[stars] = <i className="fa-regular fa-star"></i>
//             stars++;
//         }

    //Increment and decrement counter
    const [counter, setCounter] = useState(0)

//     function incrementCounter(){
//         setCounter (current => current + 1);
//     }

//     function  decrementCounter(){
//         if (counter > 0){
//             setCounter (current => current - 1);
//         }
//         else{
//             setCounter(0);
//         }
//     }

    //Generate buttons 
    let size_button_array: JSX.Element[] = [];
    for (let i = 0; i < sizesForProduct.length; i++) {
        size_button_array[i] =
            <button title="display-size" className='size' id={sizesForProduct[i].sizeId} onClick={e => { activeClickSize(sizesForProduct[i].sizeName) }}>
                {sizesForProduct[i].sizeName}
            </button>
    }

    function activeClickSize(element_id:string){
        const sizeButtonContainer = document.getElementById("sizes"); //get the div
        let size_buttons:any = []
        size_buttons= sizeButtonContainer?.getElementsByTagName("button"); // get all buttons in the div  
        let sizeButton_id = []; //get all buttons id

        //fill the array with buttons id
        for(let i=0; i< size_buttons?.length!; i++)
        {
            sizeButton_id[i] = size_buttons[i].id      
        }

        let inactive_sizeBtn:any = []; // to inactive all 

        //Inactive all button
        for(let i=0; i< sizeButton_id.length!; i++)
        {
            inactive_sizeBtn [i]= document.getElementById(sizeButton_id[i]);
            inactive_sizeBtn[i]?.classList.remove("active-btn");
        }

        //Here active only selected button
        const active_size = document.getElementById(element_id);
        active_size?.classList.add("active-btn");
    }

    function activeClickColor(element_id:string){
        const colorButtonContainer = document.getElementById("colors"); //get the div
        let colorButtons:any = []
        colorButtons= colorButtonContainer?.getElementsByTagName("button"); // get all buttons in that div  
        let ColorButton_id = []; //get all buttons id

        //fill the array with buttons id
        for(let i=0; i< colorButtons?.length!; i++)
        {
            ColorButton_id[i] = colorButtons[i].id      
        }

        let inactive_colorBtn:any = []; // to inactive all 

        //Inactive all button
        for(let i=0; i< ColorButton_id.length!; i++)
        {
            inactive_colorBtn [i]= document.getElementById(ColorButton_id[i]);
            inactive_colorBtn[i]?.classList.remove("active-btn");
        }

        //Here active only the selected button
        const active_color = document.getElementById(element_id);
        active_color?.classList.add("active-btn");
    }

    // Display 2 random reviews of the product
    const fetchAndDisplayReviews = async () => {
        try {
            const allReviews = await fetchReviewsForProduct(productId);

            // Shuffle the array of reviews
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
                            // Handle the case where user data couldn't be fetched
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
            // Handle the error, log it, or provide a default reviews display
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
                                <button type='button' title="display-wishlist" onClick={e => {addWishList()}}><i className="fa-solid fa-heart" id='wishlist-btn'></i></button>
                            </div>
                            <div className='review-section-top'>
                                <a href='/allproductreview'>{review_array} {"("+number_of_reviews+")"} </a>
                            </div>
                        </div>
                    </section>  
                    <section className="image-section">
                        <div className='icons'>
                            {img}
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide image-information-circle" >
                            <div className="carousel-indicators">                                                         
                                {dot_buttons} 
                            </div>
                            <div className="carousel-inner-container">
                                <div className="carousel-inner image-carousel-slide">
                                    {img_url}
                                </div>
                            </div>
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
                                <button type='button' title="display-wishlist" onClick={e => {addWishList()}}><i className="fa-solid fa-heart" id='wishlist-btn'></i></button>
                            </div>
                        </div>
                        <div className='product-total-review'>
                            <a href='/allproductreview'>{review_array} {"("+number_of_reviews+")"} </a>
                        </div>
                        <div className='price-section'>
                            <div className='price'>
                                {current_price}
                            </div>
                            <div className='counter'>
                                <button type='button' className='decrement' onClick={e => {decrementCounter()}}><span>-</span></button>
                                <button className='show-counter'><span>{counter}</span></button>
                                <button type='button' className='increment' onClick={e => {incrementCounter()}}><span>+</span></button>
                            </div>
                        </div>
                        <div className='size-section'>
                            <p>Size</p>
                            <div className='sizes' id='sizes'>
                                {size_button_array}
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
                                    <span key={color.colorId} style={{ backgroundColor: color.colorName }}></span>
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
                            <button type='button' className='decrement' onClick={e => {decrementCounter()}}><span>-</span></button>
                            <button className='show-counter'><span>{counter}</span></button>
                            <button type='button' className='increment' onClick={e => {incrementCounter()}}><span>+</span></button>
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