using static Class1;

namespace Cas_5
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Profesor 1
            //Professor professor1 = new Professor();

            //professor1.Age = 29;
            //professor1.FirstName = "Professor";
            //professor1.LastName = "Jedan";
            //professor1.Email = "professor@gmail.com";
            //professor1.LearningModule = new string[]
            //{
            //    "C# Basics", "Advanced C#"
            //};

            ////Profesor 2

            //Professor professor2 = new Professor();

            //professor1.Age = 40;
            //professor1.FirstName = "Professor";
            //professor1.LastName = "Dva";
            //professor1.Email = "professor222@gmail.com";
            //professor1.LearningModule = new string[]
            //{
            //    "C# Basics", "Advanced C#"
            //};



            //Human tamara = new Human();

            //Console.WriteLine("Human first name is:");
            //tamara.FirstName = Console.ReadLine();

            //Console.WriteLine("Human last name is:");
            //tamara.LastName = Console.ReadLine();

            //Console.WriteLine("Human age is:");
            //tamara.Age = int.Parse(Console.ReadLine());

            //Console.WriteLine(tamara.GetPersonStats());




            Dog dog1 = new Dog();

            Console.WriteLine("Unesite ime psa:");
             name = Console.ReadLine();

            Console.WriteLine("Unesite rasu psa:");
            rase = Console.ReadLine();

            Console.WriteLine("Unesite boju psa:");
            color = Console.ReadLine();

            Dog dog1 = new Dog(name, rase, color);


        }
    }
}
