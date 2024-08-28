using OnlineVideoRentalStore.Database;
using OnlineVideoRentalStore.Models.DtoModels;
using OnlineVideoRentalStore.Models.Entities;
using OnlineVideoRentalStore.Models.ViewModels;

namespace OnlineVideoRentalStore.Services
{
    public class MovieService
    {
        public List<MovieDto> GetAllMovies()
        {
            List<Movie> movies = InMemoryDb.Movies;

            List<MovieDto> movieDtos = new List<MovieDto>();

            foreach (Movie movie in movies)
            {
                MovieDto movieDto = new MovieDto()
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    AgeRestriction = movie.AgeRestriction,
                    Genre = movie.Genre,
                    Language = movie.Language,
                    Length = movie.Length,
                    ReleaseDate = movie.ReleaseDate
                };
                movieDtos.Add(movieDto);
            }

            return movieDtos;
        }

        public MovieDto GetMovie(int id)
        {
            Movie movie = InMemoryDb.Movies
                          .Where(x => x.Id == id)
                          .FirstOrDefault();

            if (movie != null)
            {
                MovieDto movieDto = new MovieDto()
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    AgeRestriction = movie.AgeRestriction,
                    Genre = movie.Genre,
                    Language = movie.Language,
                    Length = movie.Length,
                    ReleaseDate = movie.ReleaseDate
                };
                return movieDto;
            } else
            {
                return null;
            }
        }

        public void AddMovie(AddMovieVM movieVM)
        {
			Movie movie = new Movie()
			{
				Title = movieVM.Title,
				Genre = movieVM.Genre,
				AgeRestriction = movieVM.AgeRestriction,
				Language = movieVM.Language,
				Length = TimeSpan.FromMinutes(movieVM.Length),
				ReleaseDate = movieVM.ReleaseDate,
				Quantity = 1,
				IsAvailable = true
			};

			InMemoryDb.Add(movie);
		}

		public void EditMovie(EditMovieVM movieVM)
		{
			Movie movie = InMemoryDb.Movies
			  .Where(x => x.Id == movieVM.Id)
			  .FirstOrDefault();

            if (movie == null)
            {
                return;
            }

            movie.Title = movieVM.Title;
            movie.Genre = movieVM.Genre;
            movie.Language = movieVM.Language;
            movie.Length = TimeSpan.FromMinutes(movieVM.Length);
            movie.ReleaseDate = movieVM.ReleaseDate;
            movie.AgeRestriction = movieVM.AgeRestriction;
		}
	}
}
