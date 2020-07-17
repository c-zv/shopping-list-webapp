import api from '~/api';
import useApiRequestHook from '~/api/useApiRequestHook';

const useProductHook = (productId) => {
  const { response, error, loading } = useApiRequestHook(api.products.getOne, [productId]);

  const product = response.data || undefined;

  return { product, error, loading };
};

export default useProductHook;
