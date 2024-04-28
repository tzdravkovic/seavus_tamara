using CommonModels.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonModels.Models
{
    public class Profesor : Person
    {
        public Profesor()
        {

        }
        public Profesor(int id, string fName, string lName, DateTime birthday, string homeTown) : base(id, fName, lName, birthday, homeTown)
        {
        }

        public string[] LecturingCourses { get; set; }
        public string[] Materials { get; set; }
        public string Biography { get; set; }

        public ProfessorStatus Status { get; set; }

        public override void PrintInfo()
        {
            Console.WriteLine("Profesor info: ");

            base.PrintInfo();

            Console.WriteLine($"{Biography} - {Status}");

            switch (Status)
            {
                case ProfessorStatus.None:
                    Console.WriteLine("Professor status is: None");
                    break;
                case ProfessorStatus.Active:
                    Console.WriteLine("Professor status is: Active");
                    break;
                case ProfessorStatus.Inactive:
                    Console.WriteLine("Professor status is: Inactive");
                    break;
                case ProfessorStatus.Waiting:
                    Console.WriteLine("Profesor status is: Waiting");
                    break;
            }

            Console.WriteLine("Lecturing courses:");
            foreach (string course in LecturingCourses)
                Console.WriteLine(course);

            Console.WriteLine("Books:");
            foreach (string material in Materials)
                Console.WriteLine(material);
        }

    }
}

