using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.Models
{
    public class Manager : Employee
    {
        public Manager(double salary, string firstName, string lastName) { 
            Role = Enums.Role.Manager;
            Salary = salary;
            FirstName = firstName;
            LastName = lastName;
        }

        private double Bonus;

        public void AddBonus(double bonus) { 
            Bonus = bonus;
        }

        public override double GetSalary()
        {
            return Salary + Bonus;
        }
    }
}
