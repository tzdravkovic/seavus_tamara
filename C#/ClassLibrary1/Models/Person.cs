using CommonModels.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonModels.Models
{
    public class Person
    {

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public string HomeTown { get; set; }
        public Gender Gender { get; set; }

        public string NewInformationField { get; set; }
        public Person()
        {

        }
        public Person(int id, string fName, string lName, DateTime birthday, string homeTown)
        {
            Id = id;
            FirstName = fName;
            LastName = lName;
            Birthday = birthday;
            HomeTown = homeTown;
        }

        public virtual void PrintInfo()
        {
            Console.WriteLine($"{Id} - {FirstName} {LastName} {Birthday.ToShortDateString} {HomeTown}");
        }

    }
}
