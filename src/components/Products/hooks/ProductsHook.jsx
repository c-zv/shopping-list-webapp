import { useSelector } from 'react-redux';

const useProductsHook = () => {
  const products = useSelector((state) => state.products);

  const randomProduct = () => ({
    id: `${Math.round(Math.random() * 100000)}`,
    name: `name_${Math.round(Math.random() * 1000).toString()}`,
  });

  return { products, randomProduct };
};

export default useProductsHook;
