﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domaci_4
{
    public class Driver
    {
        public Driver(string name, int skill)
        {
            Name = name;
            Skill = skill;
        }
        public string Name { get; set; }
        public int Skill { get; set; }
    }
}
