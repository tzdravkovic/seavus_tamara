﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas3
{
    public class Pet
    {
        public string Name { get; set; }
        public virtual void Eat() {

            Console.WriteLine("Zivotinja jede");
        }

    }
}
