using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas2
{
    public abstract class Human
    {
        public string FullName { get; set; }
        public int Age { get; set; }
        public string HomeTown { get; set; }

        public abstract string GetInfo();

        public Human(string fullName, int age) {
            FullName = fullName;
            Age = age;
        }

        public void Greet(string name)
        {
            Console.WriteLine($"Hey there {name}, my name is {FullName}");
        }
    }
}
