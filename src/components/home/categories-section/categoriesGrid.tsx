import { Category } from '@/types/definitions';

import { CategoryCard } from '@/components/categoryCard/categoryCard';

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
    <ul className={'cards-grid'} style={{ marginBlockStart: '2rem' }}>
      {categories?.map((category) => (
        <li key={category.id}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
};
