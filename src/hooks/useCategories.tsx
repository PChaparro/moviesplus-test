import { getCategoriesService } from '@/services/categories.services';
import { useQuery } from '@tanstack/react-query';

export const UseCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoriesService,
  });

  return {
    categories,
    isLoading,
    isError,
  };
};
