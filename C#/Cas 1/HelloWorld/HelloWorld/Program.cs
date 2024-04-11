namespace HelloWorld
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string firstName = "Tamara";
            string lastName = "Zdravkovic";
            int age = 25;

            Console.WriteLine("Hi, my name is" + firstName + lastName +"and i am" + age + "years old");
            Console.WriteLine($"Hi, my name is {firstName} {lastName} and i am {age} years old");

            //Ovo je nova linija komentara
        }
    }
}
