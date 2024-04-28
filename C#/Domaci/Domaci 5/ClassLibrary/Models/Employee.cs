using ClassLibrary.Enums;

namespace ClassLibrary.Models
{
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Role Role { get; set; }

        protected double Salary;
        public void PrintInfo()
        {
            Console.WriteLine($"{FirstName} {LastName}, {Salary}");
        }

        public virtual double GetSalary()
        {
            return Salary;
        }
    }
}
