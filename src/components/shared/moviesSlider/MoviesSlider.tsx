import { Movie } from '@/types/definitions';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MovieCard } from '../movieCard/MovieCard';
import { MoviesGridSkeleton } from '../movieCard/MoviesGridSkeleton';

interface MoviesSliderProps {
  isLoading: boolean;
  movies: Movie[] | undefined;
}

export const MoviesSlider = ({ movies, isLoading }: MoviesSliderProps) => {
  if (isLoading) {
    return <MoviesGridSkeleton count={4} />;
  }

  return (
    <Swiper
      spaceBetween={32}
      breakpoints={{
        1280: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
      }}
      modules={[Autoplay]}
      autoplay
    >
      {movies?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
