import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import EmptyCartSection from '../sections/EmptyCartSection';
import CartWithItems from '../sections/CartWithItems';
import IconsNavigationSection from '../sections/IconsNavigationSection';
import { IProduct } from '../Interfaces/IProduct';

const CartView: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        console.log('Stored Cart Items:', storedCartItems);
        if (storedCartItems) {
            setCartItems(prevCartItems => {
                const parsedCartItems = JSON.parse(storedCartItems);
                console.log('Parsed Cart Items:', parsedCartItems);
                return parsedCartItems;
            });
        }
    }, []);

    useEffect(() => {
        console.log('Current Cart Items:', cartItems);
    }, [cartItems]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

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