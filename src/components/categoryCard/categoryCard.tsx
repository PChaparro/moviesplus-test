import { type Category } from '@/types/definitions';

export const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <article className='group relative overflow-hidden rounded-md'>
      <img
        src={category.thumbnail}
        alt={category.name}
        className='aspect-[2/3] h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105'
        width={273}
        height={409}
        loading='lazy'
      />
      <div className='absolute inset-0 flex items-end justify-center bg-gradient-to-b from-transparent from-30% to-brand-bg/85 p-10'>
        <h3 className='text-3xl font-semibold tracking-wide text-white'>
          {category.name}
        </h3>
      </div>
    </article>
  );
};
