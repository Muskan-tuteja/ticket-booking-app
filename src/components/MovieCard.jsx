import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../libaray/timeFormat'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  const [year, month, day] = movie.release_date.split('-').map(Number)
  const releaseDate = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0,0,0,0)

  const isNowShowing = releaseDate <= today
  const badge = isNowShowing ? 'Now Showing' : 'Coming Soon'

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-full sm:w-60 md:w-66 relative'>
      <span className={`absolute top-3 left-3 text-xs text-white px-2 py-1 rounded-full ${isNowShowing ? 'bg-primary' : 'bg-green-500'}`}>
        {badge}
      </span>

      <img
        onClick={() => { if (isNowShowing) { navigate(`/movies/${movie._id}`); scrollTo(0,0) } }}
        src={movie.backdrop_path}
        alt={`${movie.title} Poster`}
        className='rounded-lg h-52 sm:h-56 md:h-52 w-full object-cover cursor-pointer'
      />

      <p className='font-semibold mt-2 truncate'>{movie.title}</p>
      <p className='text-sm text-gray-400 mt-2'>
        {releaseDate.getFullYear()} . {movie.genres.slice(0, 2).map(genre => genre.name).join(" | ")} . {timeFormat(movie.runtime)}
      </p>

      <div className='flex items-center justify-between mt-4 pb-3'>
        <button
          onClick={() => { if (isNowShowing) { navigate(`/movies/${movie._id}`); scrollTo(0,0) } }}
          className={`px-4 py-2 text-xs rounded-full font-medium transition 
            ${isNowShowing ? 'bg-primary hover:bg-primary-dull text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
          disabled={!isNowShowing}
        >
          Buy Tickets
        </button>

        <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
          <StarIcon className='w-4 h-4 text-primary fill-primary'/>
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
