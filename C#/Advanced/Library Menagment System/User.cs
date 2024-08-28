using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library_Menagment_System
{
    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public List<Book> CheckedOutBooks { get; }

        public User(string name, string email)
        {
            Name = name;
            Email = email;
            CheckedOutBooks = new List<Book>();
        }
    }
}
