﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domaci_4
{
    public class Car
    {
        public Car(string model, int speed)
        {
            Model = model;
            Speed = speed;
        }
        public string Model { get; set; }
        public int Speed { get; set; }
        public Driver Driver { get; set; }

        public int CalculateSpeed()
        {
            return Driver.Skill * Speed;
        }
    }

}
