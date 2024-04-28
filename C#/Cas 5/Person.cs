using System;

public class Class1
{
	public class Professor
	{
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public int Age { get; set; }
		public string UserName { get; set; }
        public string Password { get; set; }
		public string Email { get; set; }
		public string CurrentJobTitle { get; set; }
		string[] LearningModules { get; set; }
		private string YearOfAward { get; set; }
		public void SayHello()
		{
			Console.WriteLine($"Hi, my name is {FirstName} {LastName} and I am {Age}");
		}


    }
	

	}
