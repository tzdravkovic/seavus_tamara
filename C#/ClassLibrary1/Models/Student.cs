using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonModels.Models
{
    public class Student : Person
    {
        public Student()
        {
            
        }
 
        public Student(int id, string fName, string lName, DateTime birthday, string hometown,
            string uniqueStudentId, string[] attendingCourses, double avergeGrade) : base(id, fName, lName, birthday, hometown)
        {

            UniqueStudentID = uniqueStudentId;
            AttendingCourses = attendingCourses;
            AverageGrade = avergeGrade;
        }


        public string UniqueStudentID { get; set; }
        public string[] AttendingCourses { get; set; }
        public double AverageGrade { get; set; }
        public override void PrintInfo()
        {
            Console.WriteLine("Student info: ");

            base.PrintInfo();

            Console.WriteLine($"{UniqueStudentID} - {AverageGrade}");

            Console.WriteLine("Student, Attending Courses:");

            foreach (string course in AttendingCourses)
            {
                Console.WriteLine(course);
            }


        }
    }
}
