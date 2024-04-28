using CommonModels.Enums;
using CommonModels.Models;

namespace SecendConsole
{
    internal class Program
    {

        static void Main(string[] args)
        {
            Student tamara = new Student();

            tamara.FirstName = "Tamara";
            tamara.LastName = "Zdravkovic";
            tamara.Gender = Gender.Female;

            tamara.PrintInfo();
            tamara.NewInformationField = "2024";

            Document document1 = new Document();

            document1.Name = "Math2 Document";
        }
    }
}
