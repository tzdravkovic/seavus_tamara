using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic_and_Extension
{
    public class ListHelper<T>
    {
        public void GoThroughStrings(List<T> listOfItems)
        {
            foreach (T item in listOfItems)
            {
                Console.WriteLine(item);
            }
        }

        public void GetInfo(List<T> listOfItems)
        {
            Console.WriteLine($"{ listOfItems.Count} + {listOfItems.GetType().FullName}");
        }
    }
}
