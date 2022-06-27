namespace Projekt_2.Server.Models
{
    public class Session
    {
        public int IdSession { get; set; }
        public string From { get; set; }
        public string Symbol { get; set; }
        public double Open { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Close { get; set; }
        public int Volume { get; set; }
        public double AfterHours { get; set; }
        public double PreMarket { get; set; }
        public int IdCompany { get; set; }
        
        public virtual Company Company { get; set; }
    }
}
