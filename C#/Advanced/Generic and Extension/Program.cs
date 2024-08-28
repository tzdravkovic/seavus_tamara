namespace Generic_and_Extension
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> listOfStrings = new List<string>();
            listOfStrings.Add("some");
            listOfStrings.Add("testing");
            listOfStrings.Add("words");
            listOfStrings.Add("to learn");
            listOfStrings.Add("about generics");

            List<int> listOfInts = new List<int>() 
            { 1, 2, 3, 4, 6, 6, 21, 21, 22, };

            List<double> listOfFloats = new List<double>() { 1.5, 2.5, 3.2, 4, 6, 6, 21, 21, 22, };

            List<char> listOfChars = new List<char> { 'a', 'l', 'm', 'i', 'r' };

            ListHelper<string> stringHelper = new ListHelper<string>();
            stringHelper.GoThroughStrings(listOfStrings);

            ListHelper<int> integerHelper = new ListHelper<int>();
            integerHelper.GoThroughStrings(listOfInts);

            ListHelper<char> charHelper = new ListHelper<char>();
            charHelper.GoThroughStrings(listOfChars);

            charHelper.GetInfo(listOfChars);

            
        }
    }
}
