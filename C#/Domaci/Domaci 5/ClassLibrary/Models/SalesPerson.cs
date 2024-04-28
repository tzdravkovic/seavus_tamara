using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.Models
{
    public class SalesPerson : Employee
    {
        public SalesPerson(string firstName, string lastName)
        {
            Salary = 500.00;
            Role = Enums.Role.Sales;
            FirstName = firstName;
            LastName = lastName;
        }

        public double SuccessSaleRevenue;

        public void AddSuccessRevenue(double successSaleRevenue)
        {
            SuccessSaleRevenue = successSaleRevenue;
        }

        public override double GetSalary()
        {
            double salaryWithBonus = Salary;

            if (SuccessSaleRevenue <= 2000)
            {
                salaryWithBonus += 500;

            }
            else if (SuccessSaleRevenue > 2000 && SuccessSaleRevenue <= 5000)
            {
                salaryWithBonus += 1000;
            }
            else if (SuccessSaleRevenue > 5000)
            {
                salaryWithBonus += 1500;
            }
            return salaryWithBonus;
        }
    }
}
