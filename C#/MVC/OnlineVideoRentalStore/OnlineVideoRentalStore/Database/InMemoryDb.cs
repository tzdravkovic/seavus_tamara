using OnlineVideoRentalStore.Models.Entities;

namespace OnlineVideoRentalStore.Database
{
    public static class InMemoryDb
    {
        public static List<Movie> Movies { get; set; }
        private static int MovieId = 1;
        static InMemoryDb()
        {
			Movies = new List<Movie>();
            LoadMovies();
        }

        private static void LoadMovies()
        {
            Movie movie1 = new Movie()
            {
                Id = MovieId,
                Title = "Titanic",
                Genre = "Romantic",
                Language = "en",
                IsAvailable = true,
                ReleaseDate = DateTime.Parse("1997-12-19"),
                Length = TimeSpan.FromMinutes(269),
                AgeRestriction = 12,
                Quantity = 1
            };

            MovieId++;

            Movie movie2 = new Movie()
            {
                Id = MovieId,
                Title = "John Wick",
                Genre = "Action",
                Language = "en",
                IsAvailable = true,
                ReleaseDate = DateTime.Parse("2014-10-14"),
                Length = TimeSpan.FromMinutes(101),
                AgeRestriction = 14,
                Quantity = 2
            };

			MovieId++;

			Movie movie3 = new Movie()
            {
                Id = MovieId,
                Title = "Shutter Island",
                Genre = "Mustery",
                Language = "en",
                IsAvailable = true,
                ReleaseDate = DateTime.Parse("2010-03-11"),
                Length = TimeSpan.FromMinutes(138),
                AgeRestriction = 15,
                Quantity = 1
            };

			MovieId++;

			Movies.Add(movie1);
            Movies.Add(movie2);
            Movies.Add(movie3);
        }

        public static void Add(Movie movie)
        {
            movie.Id = MovieId;
			MovieId++;

            Movies.Add(movie);
		}
    }
}
