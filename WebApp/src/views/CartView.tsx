import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import EmptyCartSection from '../sections/EmptyCartSection';
import CartWithItems from '../sections/CartWithItems';
import IconsNavigationSection from '../sections/IconsNavigationSection';
import { IProduct } from '../Interfaces/IProduct';
import { fetchProductById } from '../helpers/ProductHandler';

const CartView: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    useEffect(() => {
        const storedCartItems = sessionStorage.getItem('cartItems');

        const fetchCartItems = async () => {
            if (storedCartItems) {
                const parsedCartItems = JSON.parse(storedCartItems);

                // Fetch product details for each product ID in the cart
                const cartItemsArray: (IProduct | null)[] = await Promise.all(
                    Object.entries(parsedCartItems).map(async ([productId, quantity]) => {
                        try {
                            const productDetails = await fetchProductById(productId);
                            return { ...productDetails, quantity: quantity as number, productId }; // Include productId in the cart item
                        } catch (error) {
                            console.error(`Error fetching product with ID ${productId}:`, error);
                            return null;
                        }
                    })
                );

                // Filter out null values (failed fetches) and assert the type to IProduct[]
                const filteredCartItemsArray = cartItemsArray.filter(Boolean) as IProduct[];

                setCartItems(filteredCartItemsArray);
            }
        };

        fetchCartItems();
    }, []);


    console.log('Rendering CartView:', isAuthenticated, cartItems.length);

    return (
        <>
            <BreadcrumbSection currentPage="Cart" showCurrentPage={true} showBackButton={true} onNavigateBack={handleNavigateBack} showCartItem={isAuthenticated} cartItemCount={cartItems.length} />

            {isAuthenticated ? (
                // View for authenticated user
                cartItems.length > 0 ? (
                    // View for cart with items
                    <CartWithItems cartItems={cartItems} />
                ) : (
                    // View for empty cart
                    <EmptyCartSection />
                )
            ) : (
                // View for unauthenticated user
                <EmptyCartSection />
            )}

            <IconsNavigationSection isAuthenticated={isAuthenticated} />
        </>
    )
}

export default CartView