import React, { useState } from 'react'

const ProductsDetailsSection = () => {

    //Variables

    const product = {
        id: 1,
        title: "Gap × Barbie™ Kids Hoodie",
        price: 37.88,
        salePrice:0 , // If the price isn't icluded in the sale, it will be zero
        description: "Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum."
    }

    interface Review {
        review_id: number
        product_id: number
        stars:number
        user_id:number
        date:string
        comment:string
    }
    
    const color = [
        {color_id: 10, color:"red"}, 
        {color_id: 11, color:"blue"}, 
        {color_id: 12, color:"beige"}, 
        {color_id: 13, color:"navy"}, 
        {color_id: 14, color:"brown"},
        {color_id: 15, color:"black"},
        {color_id: 16, color:"purple"}
    ]

    const size = [
        {size_id: 101, size:"XS"}, 
        {size_id: 111, size:"S" }, 
        {size_id: 121,size:"M"}, 
        {size_id: 131,size:"L"}, 
        {size_id: 141,size:"XL"},
        {size_id: 151,size:"XXL"},
        {size_id: 161,size:"XXXL"}
    ]
 
    const productColor = [
        {color_id: 10, product_id:1, quantity:12 }, 
        {color_id: 11, product_id:1, quantity:25 }, 
        {color_id: 12, product_id:1, quantity:37 }, 
        {color_id: 13, product_id:1, quantity:18 }, 
        {color_id: 14, product_id:1, quantity:98 },
        {color_id: 15, product_id:1, quantity:120 }
    ]

    const ProductSize = [
        {size_id: 101, product_id:1, quantity:25 }, 
        {size_id: 111, product_id:1, quantity:18 }, 
        {size_id: 121, product_id:1, quantity:25 }, 
        {size_id: 131, product_id:1, quantity:98 }, 
        {size_id: 141, product_id:1, quantity:120 },
        {size_id: 151, product_id:1, quantity:37 },
        //{size_id: 161, product_id:1, quantity:37 }
    ]

    

    const images = [
        {image_id: 1121, product_id:1, image_url:"https://www.gap.com/webcontent/0054/104/555/cn54104555.jpg" }, 
        {image_id: 1122, product_id:1, image_url:"https://www.gap.com/webcontent/0053/175/947/cn53175947.jpg" }, 
        {image_id: 1123, product_id:1, image_url:"https://www.gap.com/webcontent/0054/104/251/cn54104251.jpg" }, 
        {image_id: 1124, product_id:1, image_url:"https://www.gap.com/webcontent/0053/233/540/cn53233540.jpg" }, 
        {image_id: 1125, product_id:2, image_url:"https://www.gap.com/webcontent/0054/096/737/cn54096737.jpg" }
    ]

       const reviews = [
        {review_id: 11201, product_id:1, stars:5, user_id:202301101, date:'2023-11-05', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."},
        {review_id: 11211, product_id:1, stars:1, user_id:202301102, date:'2023-10-11', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."}, 
        {review_id: 11221, product_id:1, stars:5, user_id:202301103, date:'2023-09-02', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."}, 
        {review_id: 11231, product_id:1, stars:3, user_id:202301104, date:'2023-08-10', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."}, 
        {review_id: 11241, product_id:2, stars:2, user_id:202301105, date:'2023-07-29', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."}, 
        {review_id: 11251, product_id:1, stars:3, user_id:202301106, date:'2023-06-22', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."},
        {review_id: 11261, product_id:1, stars:5, user_id:202301107, date:'2023-05-16', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."}, 
        {review_id: 11271, product_id:2, stars:1, user_id:202301108, date:'2023-04-19', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."}, 
        {review_id: 11281, product_id:1, stars:4, user_id:202301109, date:'2023-03-08', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."}, 
        {review_id: 11291, product_id:2, stars:3, user_id:202301110, date:'2023-02-21', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."},
        //{review_id: 11301, product_id:1, stars:5, user_id:202301111, date:'2023-02-21', comment:"Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo."} 
    ]

    const users = [
        {user_id: 202301101, name:"Annette Black", profile_image:"https://engineering.unl.edu/images/staff/Kayla-Person.jpg"},
        {user_id: 202301102, name:"Jenny Wilson", profile_image:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"}, 
        {user_id: 202301103, name:"name3", profile_image:"https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg"}, 
        {user_id: 202301104, name:"name4", profile_image:"https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg"}, 
        {user_id: 202301105, name:"name5", profile_image:"https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"}, 
        {user_id: 202301106, name:"name6", profile_image:"https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"},
        {user_id: 202301107, name:"name7", profile_image:"https://i0.wp.com/www.yesmagazine.org/wp-content/uploads/2022/03/Ghaderi_1400x840.jpg"}, 
        {user_id: 202301108, name:"name8", profile_image:"https://i.cbc.ca/1.5928884.1614305752!/fileImage/httpImage/image.JPG_gen/derivatives/original_780/bhm-schools.JPG"}, 
        {user_id: 202301109, name:"name9", profile_image:"https://i.ytimg.com/vi/ArJ4NlUJ2xI/maxresdefault.jpg"}, 
        {user_id: 202301110, name:"name10", profile_image:"https://image.cnbcfm.com/api/v1/image/107241090-1684160036619-gettyimages-1255019394-AFP_33F44YL.jpeg"} 
    ]


    //Functions

    //(Add to whishlist) button
    let isAddedToWishlist = false;
    function addWishList () {

        if (isAddedToWishlist == false)
        {
            //Make the heart red
            const add = document.getElementById("wishlist-btn");
            add?.classList.add("add-wishlist");
            isAddedToWishlist = true;
            //Now add (Add to whishlist function)
        }
        else{
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
    let num:number =0;
          
        for (let j=0; j < images.length; j++){
            
            if ( images[j].product_id == product.id){
                if (num == 0){
                    dot_buttons [num]= <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={num} className="dot active" aria-label={"Slide"+num+1}></button>;
                    img_url[num] = <div id={"image-slide-"+num+1} className="carousel-item active">
                                <img src={images[j].image_url} alt={product.title} />
                            </div> 
                    num++;
                    img[num] = img[num] = <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={j} aria-label={"Slide"+j+1}><img src={images[j].image_url} alt={product.title} /></button>
                }
                else{
                    dot_buttons [num]= <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={num} className="dot" aria-label={"Slide"+num+1}></button>;
                    img_url[num] = <div id={"image-slide-"+num+1} className="carousel-item">
                                <img src={images[j].image_url} alt={product.title} />
                                </div> 
                    num++;  
                    img[num] = <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={j}  aria-label={"Slide"+j+1}><img src={images[j].image_url} alt={product.title} /></button>                
                } 
            }                          
        } 
    

    // Get product's total review
    let sum = 0;
    let number_of_reviews = 0
    let total_review= 0;
    let review_array = [];
    for (let i=0; i< reviews.length; i++){
        if (product.id == reviews[i].product_id)
        {
            sum = sum + reviews[i].stars; 
            number_of_reviews++;
        }
           
    }
    total_review = sum/number_of_reviews;

    const fullStars = Math.floor(total_review);
    const halfStar = Math.ceil(total_review - fullStars);
    const emptyStars = 5 - fullStars - halfStar;

    let stars=0;
        for(let i=0; i< fullStars; i++){
            review_array[stars] = <i className="fa-solid fa-star"></i>
            stars++;
        }
        
        for(let i=0; i < halfStar; i++){
            review_array[stars] = <i className="fa-regular fa-star-half-stroke"></i>
            stars++;
        }

        for(let i=0; i < emptyStars; i++){
            review_array[stars] = <i className="fa-regular fa-star"></i>
            stars++;
        }




    //Increment and decrement counter
    const [counter, setCounter] = useState(0)

    function incrementCounter(){
        setCounter (current => current + 1);
    }

    function  decrementCounter(){
        if (counter > 0){
            setCounter (current => current - 1);
        }
        else{
            setCounter(0);
        }
    }


    //Get avilable sizes of the product
    
    //1. Generate buttons depending on the number of avilable sizes in DB

        let size_id_array:any = [] //To store size id 
        let add_size_id = 0; //size_id_array locations
        for(let i=0; i<ProductSize.length; i++)
        {
            if (product.id == ProductSize[i].product_id){
                if (!size_id_array.includes(ProductSize[i].size_id)){
                    size_id_array[add_size_id] = ProductSize[i].size_id;
                    add_size_id++;
                }
            }
        }

        //Get the size of the product depending on given id
        let size_array:any = []
        for(let i=0; i<size.length; i++)
        {
            for(let j=0; j < size.length; j++)
            {
                if(size_id_array[i] == size[j].size_id)
                    size_array[i] = size[j].size
            }
           
        }

        //Generate buttons 
        let size_button_array:any = []
        for(let i=0; i< size_array.length; i++)
        {
            size_button_array[i] =<button title="display-size" className='size' id={size_array[i]} onClick={e => {activeClickSize(size_array[i])}}>{size_array[i]}</button>
        }


    //2. Active clicked button
        //let isActiveSize= false;
        function activeClickSize(element_id:string){
            
            //if (isActiveSize == false)
            {
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
                //isActiveSize = true;
                
            }
            /*
            else{
                //Here inactive the selected button
                const inactive_size = document.getElementById(element_id);
                inactive_size?.classList.remove("active-btn");
                isActiveSize = false;

            }   
            */ 
        }


    //Git avilable colors of the product
    
    //1. Generate color buttons depending on the avilable colors
       
        //Get the color id of the avilable color of the product
        let color_id_array:any = []; //To store color id 
        let add_color_id:number = 0; //color_id_array locations
        for(let i=0; i<productColor.length; i++)
        {
            if (product.id == productColor[i].product_id){
                if (!color_id_array.includes(productColor[i].color_id)){
                    color_id_array[add_color_id] = productColor[i].color_id;
                    add_color_id++;
                }
            }
        }


        //Get the color of the product depending on given id
        let color_array:any = []
        for(let i=0; i<color.length; i++)
        {
            for(let j=0; j < color.length; j++)
            {
                if(color_id_array[i] == color[j].color_id)
                    color_array[i] = color[j].color
            }
           
        }

        //Generate buttons 
        let color_button_array:any = []
        for(let i=0; i<color_array.length; i++)
        {
            color_button_array[i] =<button title="display-color" className='color' id={color_array[i]} style={{backgroundColor:color_array[i]}} onClick={e => {activeClickColor(color_array[i])}}></button>
        }
        


    //2. Active clicked button

    //let isActiveColor= false;
    function activeClickColor(element_id:string){
         
        //if (isActiveColor == false)
        //{
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
            //isActiveColor = true;
            
       // }
        /*
        else
        {
             //Here inactive the selected button
             const inactive_color = document.getElementById(element_id);
             inactive_color?.classList.remove("active-btn");
             isActiveColor = false;

        } 
        */   
    }

    

    //Display 2 random reviews of the product

    let random_review:Review[] = []; 
    let user_id: number =0; 
    let find_user; 
    let display_reviews = []; 
    let display_date:any;
    let review_comment:string = ""
    let loop=0;
    let index= 0;
    let filledStars;
    let emtyStars;

    

    for(let i =0; i<2; i++ )
    {
        index = Math.floor(Math.random() * reviews.length);
        
        if (!random_review.includes(reviews[index])) //check if the object is already exist
        {
            random_review[i] = reviews[index]
            user_id = random_review[i].user_id //Get the id of user who left this review
            display_date = random_review[i].date //Git the review date
            review_comment = random_review[i].comment //Git the review comment
            filledStars = Array.from({ length: random_review[i].stars}, () => <i className="fas fa-star rating"></i>); //Get the number of user's stars
            emtyStars = Array.from({ length: 5 - random_review[i].stars }, () => <i className="far fa-star rating"></i>); // Calculate the empty stars
        }     

        //Find the user object in user table
        find_user = users.find((data) => data.user_id == user_id);

        //Display reviews
        display_reviews[i] = <div className='review'>
                                <div className='user-img'>
                                    <img src={find_user!.profile_image} alt={find_user?.name} />
                                </div>
                                <div className='display-review'>
                                    <div className='review-header'>
                                        <div className='user-name'>
                                            <p>{find_user!.name}</p>
                                            <p className='date'>{display_date}</p>
                                        </div>
                                        <div className='review-stars'>
                                            {filledStars}{emtyStars}
                                        </div>
                                    </div>
                                    <div className='review-content'>
                                        {review_comment}
                                    </div>
                                </div>
                            </div>
    }



   
    
   
    


    //Find if the price is discounted
    let current_price;
    if(product.salePrice > 0){
        current_price = <p><del>${product.price}</del><span>  ${product.salePrice}</span></p>
    }
    else{
        current_price = <p>${product.price}</p>
    }
   
      
   
        

  return (
    <>
    <section className='product-details-section'>
        <div className='container'>
        
            <section className='details-section-widescreen'>
                <div className='details'>
                    <div className='product-name'>
                        <h2>{product.title}</h2>
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
                <p>{product.description}</p>
            </div>
            <section className='details-section'>
                <div className='details'>
                    <div className='product-name'>
                        <h4>{product.title}</h4>
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
                       
                    </div>
                </div>

                <div className='color-section'>
                    <p>Color</p>
                    <div className='colors' id='colors'>
                        {color_button_array}
                    </div>
                    

                </div>

                <div className='description-section'>
                    <h2>Decription</h2>
                    <p>{product.description}</p>
                </div> 
                <div className='add-to-cart-btn'>
                    <button className='dark-btn add-cart-btn'>+ ADD TO CART</button>
                </div>
            </section>
            <section className='review-section'>
                <div className='view-all-reviews'>
                    <h2>Reviews ({number_of_reviews})</h2>
                    <a href='allproductreview'>view all <i className="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='reviews'>
                    {display_reviews}
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
                    <h2>Reviews ({number_of_reviews})</h2>
                    <a href='allproductreview'>view all <i className="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='reviews'>
                    {display_reviews}
                </div>
            </section>
            
             
        </div>
    </section>
    </>
  )
}

export default ProductsDetailsSection