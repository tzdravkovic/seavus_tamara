namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Unesite vas rodjendan");
            DateTime date = DateTime.Parse(Console.ReadLine());
            Console.WriteLine(AgeCalculator(date));
        }

        static int AgeCalculator(DateTime birthday)
        {
            return (DateTime.Today - birthday).Days;
        }
    }
}
