﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class Service
    {
        public string ServiceNo {  get; set; }
        public int FromLocation   { get; set; }
        public int ToLocation { get; set; }
        public int ServiceTypeId {  get; set; }
        public double TotalDisatnce {  get; set; }

        public override string ToString()
        {
            return $"ServiceNo: {ServiceNo} - FromLocation: {FromLocation} - ToLocation: {ToLocation}";
        }

        public string GetEntry()
        {
            return $"{ServiceNo},{FromLocation},{ToLocation},{ServiceTypeId},{TotalDisatnce}";
        }
    }
}
