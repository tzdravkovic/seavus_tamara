using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library_Menagment_System
{
    public class Transaction
    {

        public User User { get; set; }
        public Book Book { get; set; }
        public DateTime Date { get; set; }

        public Transaction(User user, Book book)
        {
            User = user;
            Book = book;
            Date = DateTime.Now;
        }
    }
}
