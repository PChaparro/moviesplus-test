import { UseCategories } from '@/hooks/useCategories';

import { CategoriesGrid } from './categoriesGrid';

export const CategoriesSection = () => {
  const { categories, isLoading } = UseCategories();

  return (
    <section id='categories'>
      <h2 className='text-4xl font-semibold text-white'>Categories</h2>
      <CategoriesGrid isLoading={isLoading} categories={categories} />
    </section>
  );
};
