using Microsoft.AspNetCore.Mvc;
using OnlineVideoRentalStore.Models.DtoModels;
using OnlineVideoRentalStore.Models.ViewModels;
using OnlineVideoRentalStore.Services;

namespace OnlineVideoRentalStore.Controllers
{
	[Route("movies")]
	public class MovieController : Controller
	{
		private MovieService _movieService;

		public MovieController()
		{
			_movieService = new MovieService();
		}
		public IActionResult GetAllMovies()
		{
			List<MovieDto> movies = _movieService.GetAllMovies();

			return View("Movies", movies);
		}

		[HttpGet("{id:int}")]
		public IActionResult GetMovie(int id)
		{
			MovieDto movie = _movieService.GetMovie(id);

			return Json(movie);
		}

		[HttpGet("add")]
		public IActionResult AddMovie()
		{
			return View();
		}

		[HttpPost("add")]
		public IActionResult AddMovie(AddMovieVM movieVM) { 
		
			_movieService.AddMovie(movieVM);

			return RedirectToAction("GetAllMovies");
		}

		[HttpGet("edit/{id:int}")]
		public IActionResult EditMovie(int id) {

			MovieDto movie = _movieService.GetMovie(id);

			return View(movie);
		}

		[HttpPost("edit")]
		public IActionResult EditMovie(EditMovieVM movieVM)
		{
			_movieService.EditMovie(movieVM);

			return RedirectToAction("GetAllMovies");
		}
	}
}
