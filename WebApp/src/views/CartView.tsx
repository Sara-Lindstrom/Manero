import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import EmptyCartSection from '../sections/EmptyCartSection';
import CartWithItems from '../sections/CartWithItems';
import IconsNavigationSection from '../sections/IconsNavigationSection';
import { fetchCartItems } from '../helpers/ProductHandler';
import { IProduct } from '../Interfaces/IProduct';
import { fetchUserId } from '../helpers/AddressHandler';
import { ICartItem } from '../Interfaces/ICartItem';

const CartView: React.FC = () => {
    const [internalCartItems, setInternalCartItems] = useState<ICartItem[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userToken, setUserToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    useEffect(() => {
        // Simulate authentication check based on the presence of a token
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
        setUserToken(token);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            // Check if a token exists before making the request
            if (userToken) {
                try {
                    const id = await fetchUserId(userToken);
                    setUserId(id);
                } catch (error) {
                    console.error("An error occurred while fetching user ID:", error);
                    // Handle the error if needed
                }
            }
        };

        fetchData();
    }, [userToken]);


    useEffect(() => {
        const fetchCartData = async () => {
            // Fetch cart items using the obtained user ID
            if (userId) {
                try {
                    const products: IProduct[] = await fetchCartItems(userId);

                    // Convert products to cart items
                    const cartItems: ICartItem[] = products.map(product => ({
                        ...product,
                        quantity: 1,  // Assuming a default quantity of 1
                        userId: userId || '',  // Use the obtained user ID or an empty string as a fallback
                    }));

                    setInternalCartItems(cartItems);
                } catch (error) {
                    console.error("An error occurred while fetching cart items:", error);
                    // Handle the error if needed
                }
            }
        };

        fetchCartData();
    }, [userId]);

    return (
        <>
            <BreadcrumbSection currentPage="Cart" showCurrentPage={true} showBackButton={true} onNavigateBack={handleNavigateBack} showCartItem={isAuthenticated} cartItemCount={internalCartItems.length} />

            {isAuthenticated && internalCartItems.length === 0 ? (
                // View for authenticated user with an empty cart
                <EmptyCartSection />
            ) : (
                // View for cart with items or unauthenticated user
                <CartWithItems cartItems={internalCartItems} userToken={userToken || ''} />
            )}

            <IconsNavigationSection isAuthenticated={isAuthenticated} />
        </>
    )
}

export default CartView