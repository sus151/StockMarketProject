namespace Projekt_2.Server.Models
{
    public class Stock
    {
        public int IdStock { get; set; }
        public string Date { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Open { get; set; }
        public double Close { get; set; }
        public int IdCompany { get; set; }
        public virtual Company Company { get; set; }
    }
}
