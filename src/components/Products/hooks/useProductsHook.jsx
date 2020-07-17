import api from '~/api';
import useApiRequestHook from '~/api/useApiRequestHook';

const useProductsHook = () => {
  const { response, error, loading } = useApiRequestHook(api.products.getAll, []);
  const products = response.data || [];

  return {
    products, error, loading,
  };
};

export default useProductsHook;
