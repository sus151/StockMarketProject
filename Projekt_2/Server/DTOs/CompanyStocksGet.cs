using System.Collections.Generic;

namespace Projekt_2.Server.DTOs
{

    public class CompanyStocksGet
    {
        public List<Result> Results { get; set; } = null;
    }
    public class Result
    {
        public double O { get; set; }
        public double C { get; set; }
        public double H { get; set; }
        public double L { get; set; }
    }

}
