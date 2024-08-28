using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Library_Menagment_System
{
    public class Library
    {
        private List<Book> books;
        private List<User> users;
        private List<Transaction> transactions;

        public Library()
        {
            books = new List<Book>();
            users = new List<User>();
            transactions = new List<Transaction>();
        }

        public void Start()
        {
            int choise = 0;

            while (choise != 4)
            {
                Console.WriteLine("1. Search for a book");
                Console.WriteLine("2. Borrow a book");
                Console.WriteLine("3. Return a book");
                Console.WriteLine("4. Exit");

                Console.WriteLine("Select an option: ");

                choise = int.Parse(Console.ReadLine());

                switch (choise)
                {
                    case 1:
                        Console.WriteLine("Unesite knjigu koju zelite: ");
                        string bookChoise = Console.ReadLine();
                        FindBook(bookChoise);
                        break;
                    case 2:
                        Console.WriteLine("Uneli ste 2");
                        break;
                    case 3:
                        Console.WriteLine("Uneli ste 3");
                        break;
                    case 4:
                        Console.WriteLine("Uneli ste 4");
                        break;
                    default: Console.WriteLine("Niste uneli ponudjene brojeve");
                        break;
                }

            }
        }

        public void AddBook(Book book)
        {
            books.Add(book);
        }

        public void AddUser(User user)
        {
            users.Add(user);
        }

        public Book FindBook(string keyword)
        {
            return books
                .Where(book => book.Title == keyword || book.Author == keyword || book.ISBN == keyword)
                .FirstOrDefault();
        }

        public void BorrowBook(User user, Book book)
        {
            if (book.IsAvailable == true)
            {
                book.IsAvailable = false;
                user.CheckedOutBooks.Add(book);
                transactions.Add(new Transaction(user, book));
            }
            else
            {
                Console.WriteLine($"Knjiga {book.Title} nije dostupna.");
            }

        }

        public void ReturnBook(User user, Book book)
        {
            Transaction transaction = transactions
                .Where(transaction => transaction.User == user && transaction.Book == book)
                .FirstOrDefault();

            if (transaction == null)
            {
                Console.WriteLine($"Korisnik {user.Name} nije pozajmio knjigu {book.Title}");
            }
            else
            {
                book.IsAvailable = true;
                user.CheckedOutBooks.Remove(book);
                transactions.Remove(transaction);
            }
        }
    }
}
