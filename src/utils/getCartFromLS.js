export const getCartFromLS = () => {
    const data = JSON.parse(localStorage.getItem('cart'));
    return data ? data : [];
};