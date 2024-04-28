namespace Strings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name = "Tamara";
            string city = "Nis";
            string academy = "Seavus Academy";

            string hello1 = "Hello" + name;
            string hello2 = string.Format("Hello {0} and i am from {1} and i am {2} student", name, city, academy);
            string hello3 = $"Hello {name}"; //String interpolacije

            Console.WriteLine(hello1);
            Console.WriteLine(hello2);
            Console.WriteLine(hello3);

            //String formatting

            string currency = string.Format("{0:C}", 125.45);
            string percent = string.Format("{0:P}", 0.87);
            string customFormat = string.Format("{0:0##-###-###}", 060111343);
            string customAlignment = string.Format("| {0,10} | {1,10} |", "Id", "Order");
            string customAlignment2 = string.Format("| {0,10} | {1,10} |", "1", "Narudzba 1");



            Console.WriteLine("Currency formatting " + currency);
            Console.WriteLine("Percentage formatting: " + percent);
            Console.WriteLine("Telephone number formatting: " + customFormat);
            Console.WriteLine(customAlignment);
            Console.WriteLine(customAlignment2);

            //Escaping strings 

            string a = "Your file is located at: C:\\Usres\\Public";
            string b = "We will have \"fair\" elections";
            string c = "This is first part before new line\n This is now is the new line";
            string e = "In C# we use \\n to go into a new line";



            string aa = @"Your file is located at: C:\\Usres\\Public";
            string bb = @"We will have ""fair"" elections";
            string cc = @"This is first part before new line\n This is now is the new line";

            Console.WriteLine(a);
            Console.WriteLine(b);
            Console.WriteLine(c);
            Console.WriteLine(e);

            Console.WriteLine(aa);
            Console.WriteLine(bb);
            Console.WriteLine(cc);

            string ourString = "     We are learning C# and it is FUN and EASY. Okey, maybe just FUN.";

            string lowerCase = ourString.ToLower();
            string upperCase = ourString.ToUpper();

            Console.WriteLine(lowerCase);
            Console.WriteLine(upperCase);

            //Length of the string 

            int ourStringLength = ourString.Length;
            Console.WriteLine($"Length of our string is {ourStringLength}");

            string[] splitted = ourString.Split('.');

            foreach (string part in splitted)
                Console.WriteLine(part);

            string trimmedString = ourString.Trim();
            Console.WriteLine(trimmedString);

            string part1 = "Ovo je cetvrti cas";
            string part2 = "predmeta C#";
            string part3 = "u Qinshift akademiji";

            string[] qinshiftAcademy = new string[]
            {
                part1, part2 , part3
            };

            string joineContent = string.Join(", ", qinshiftAcademy);

            Console.WriteLine(joineContent);

            int indexOfWordFun = ourString.IndexOf("FUN");
            int indexOfWordTamara = ourString.IndexOf("Tamara");

            Console.WriteLine(indexOfWordFun);
            Console.WriteLine(indexOfWordTamara);

            if (ourString.Contains("FUN"))
            {
                Console.WriteLine("There is a word FUN in original string");
            }

            string funPartOfString = ourString.Substring(indexOfWordFun, ourString.Length - indexOfWordFun);

            Console.WriteLine(funPartOfString);

        }

        static string SubStrings()
        {
            string text = "Zdravo iz SEDC Codecademy 2024";

            return text;
        }
    }
}
