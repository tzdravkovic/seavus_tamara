namespace Domaci2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Document document = new Document();
            string result = document.Search("rec");
            Console.WriteLine(result);

            WebPage page = new WebPage();
            string result2 = page.Search("rec");
            Console.WriteLine(result2);
        }
    }
}
