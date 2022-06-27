
using System.ComponentModel.DataAnnotations;


namespace Projekt_2.Shared.Models
{
    public class SessionEnd
    {
        [Required]
        [MaxLength(100)]
        public string From { get; set; }
        [MaxLength(100)]
        [Required]
        public string Symbol { get; set; }
        [Required]
        public double Open { get; set; }
        [Required]
        public double High { get; set; }
        [Required]
        public double Low { get; set; }
        [Required]
        public double Close { get; set; }
        [Required]
        public int Volume { get; set; }
        [Required]
        public double AfterHours { get; set; }
        [Required]
        public double PreMarket { get; set; }
    }
}
