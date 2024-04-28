using ClassLibrary.Models;

namespace Domaci_5
{
    internal class Program
    {
        static void Main(string[] args)
        {
            SalesPerson salesPerson = new SalesPerson("Tamara", "Zdravkovic");
            salesPerson.AddSuccessRevenue(4000);
            salesPerson.PrintInfo();
            Console.WriteLine(salesPerson.GetSalary());

            Manager manager = new Manager(1000, "Marko", "Ilic");
            manager.AddBonus(200);
            manager.PrintInfo();
            Console.WriteLine(manager.GetSalary());
        }
    }
}
