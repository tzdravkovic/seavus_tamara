﻿namespace OnlineVideoRentalStore.Models.ViewModels
{
	public class EditMovieVM
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public string Genre { get; set; }

		public string Language {  get; set; }

		public DateTime ReleaseDate {  get; set; }

		public int Length { get; set; }

		public int AgeRestriction { get; set; }
	}
}
