import React from 'react';
import { dummyShowData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import BlurCircle from '../components/BlurCircle';

const Movies = () => {
  const today = new Date();
  const nowShowing = dummyShowData.filter(movie => new Date(movie.release_date) <= today);
  const comingSoon = dummyShowData.filter(movie => new Date(movie.release_date) > today);

  return (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top='150px' left='0px' />
      <BlurCircle bottom='50px' right='50px' />

      {nowShowing.length > 0 && (
        <>
          <h1 className='text-lg font-medium my-4 md:my-6'>Now Showing</h1>
          <div className='flex flex-wrap justify-center md:justify-start gap-8'>
            {nowShowing.map(movie => <MovieCard movie={movie} key={movie._id} />)}
          </div>
        </>
      )}

      {comingSoon.length > 0 && (
        <>
          <h1 className='text-lg font-medium my-4 mt-10'>Coming Soon</h1>
          <div className='flex flex-wrap justify-center md:justify-start gap-8'>
            {comingSoon.map(movie => <MovieCard movie={movie} key={movie._id} />)}
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
