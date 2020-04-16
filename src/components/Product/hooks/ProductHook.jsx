import { useSelector } from 'react-redux';

const useProductHook = (productId) => {
  const product = useSelector((state) => state.products.find((prod) => prod.id === productId));

  return { product };
};

export default useProductHook;
