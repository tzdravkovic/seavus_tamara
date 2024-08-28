using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas3
{
    public class Cat : Pet
    {
        public bool IsLazy { get; set; }
        public override void Eat()
        {
            base.Eat();
            Console.WriteLine("Ja sam macka i ja sada jedem");
        }
    }
}
