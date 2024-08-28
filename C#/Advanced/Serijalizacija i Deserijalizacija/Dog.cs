using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Serijalizacija_i_Deserijalizacija
{
    public class Dog
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Color { get; set; }

        public Dog(string name, int age, string color) {
            Name = name;
            Age = age;
            Color = color;
        }
    }
}
