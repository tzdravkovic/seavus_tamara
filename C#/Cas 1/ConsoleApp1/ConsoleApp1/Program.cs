namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string firstName;
            string lastName;
            int age;

            Console.WriteLine("Vase ime je");
            firstName = Console.ReadLine();

            Console.WriteLine("Prezime?");
            lastName = Console.ReadLine();

            Console.WriteLine("... imate koliko godina?");
            string ageInput = Console.ReadLine();
            age = int.Parse(ageInput);

            Console.WriteLine($"Vas unos je {firstName} {lastName} {age}");
        }
    }
}
