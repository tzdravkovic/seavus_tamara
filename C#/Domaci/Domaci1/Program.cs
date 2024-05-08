namespace Domaci1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Book> books = new List<Book>
            {
                new Book{Title = "Book1", Author = "Author1", Year = 2010},
                new Book{Title = "Book2", Author = "Author2", Year = 2005},
                new Book{Title = "Book3", Author = "Author3", Year = 2018},
                new Book{Title = "Book4", Author = "Author1", Year = 2020}
            };

            List<Book> author1Books = books
                .Where(book => book.Author == "Author1")
                .OrderBy(book => book.Year)
                .ToList();

            List<string> bookTitles = books
                .Select(book => book.Title)
                .ToList();

            foreach (Book book in author1Books)
            {
                Console.WriteLine($"{book.Title}, {book.Author}, {book.Year}");
            }

            foreach (string title in bookTitles)
            {
                Console.WriteLine(title);
            }
        }
    }
}
