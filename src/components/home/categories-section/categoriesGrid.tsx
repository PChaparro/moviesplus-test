import { Category } from '@/types/definitions';

import { CategoryCard } from '@/components/shared/categoryCard/categoryCard';

import { CategoriesGridSkeleton } from './categoriesGridSkeleton';

interface CategoryCardProps {
  categories: Category[] | undefined;
  isLoading: boolean;
}

export const CategoriesGrid = ({
  isLoading,
  categories,
}: CategoryCardProps) => {
  if (isLoading) return <CategoriesGridSkeleton />;

  return (
    <ul className={'cards-grid mt-8'}>
      {categories?.map((category) => (
        <li key={`category-${category.id}-card`}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
};
