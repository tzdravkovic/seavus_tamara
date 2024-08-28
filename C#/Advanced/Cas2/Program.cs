namespace Cas2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Developer developer = new Developer();
            developer.Age = 30;
            developer.CurrentRole = Role.Medior;
            developer.FullName = "Developer One";
            developer.programmingLanguages = new List<string> { "C#", "JavaScript" };

            Tester tester = new Tester();
            tester.Age = 35;
            tester.FullName = "Tester One";
            tester.NumberOfBugsFound = 20;
            tester.IsQACertified = true;

            Console.WriteLine(developer.GetInfo());
            Console.WriteLine(tester.GetInfo());

            List<Human> humansList = new List<Human>();

            humansList.Add(developer);
            humansList.Add(tester);

            foreach(Human human in humansList)
            {
                Console.WriteLine(human.GetInfo());
            }
        }
    }
}
