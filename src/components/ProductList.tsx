import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../features/products/productsSlice';
import { logout } from '../features/auth/authSlice';
import type { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, loading, error } = useSelector((state: RootState) => state.products);

    function handleLogout() {
        dispatch(logout());
        navigate('/login', { replace: true });
    }

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h2>Produtos</h2>
            <ul>
                {items.map(produto => (
                    <li key={produto.id}>
                        <strong>{produto.title}</strong><br />
                        <img src={produto.image} alt={produto.title} width={60} /><br />
                        R$ {produto.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
