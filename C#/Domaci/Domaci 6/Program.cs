namespace Domaci_6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<int> queue = new Queue<int>();

            while (true)
            {
                Console.WriteLine("Da li zelite da unesete broj");

                string answer = Console.ReadLine();

                if (answer == "Y")
                {
                    Console.WriteLine("Unesite broj");
                    int num = int.Parse(Console.ReadLine());
                    queue.Enqueue(num);
                }
                else if (answer == "N")
                {
                    foreach (int element in queue)
                    {
                        Console.WriteLine(element);
                    }
                    break;
                }
                else
                {
                    Console.WriteLine("Niste uneli 'Y' ili 'N'");
                }
            }
        }
    }
}
