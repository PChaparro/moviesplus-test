import { type Category } from '@/types/definitions';

import Styles from './categoryCard.module.css';

export const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <article className={Styles['category-card']}>
      <img
        src={category.thumbnail}
        alt={category.name}
        className={Styles['category-card__thumbnail']}
        width={273}
        height={409}
        loading='lazy'
      />
      <div className={Styles['category-card__text']}>
        <h3 className={Styles['category-card__title']}>{category.name}</h3>
      </div>
    </article>
  );
};
