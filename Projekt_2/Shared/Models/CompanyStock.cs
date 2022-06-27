using System.ComponentModel.DataAnnotations;


namespace Projekt_2.Shared.Models
{
    public class CompanyStock
    {
        [Required]
        [MaxLength(20)]
        public string DateString { get; set; }
        [Required]
        public double High { get; set; }
        [Required]
        public double Low { get; set; }
        [Required]
        public double Open { get; set; }
        [Required]
        public double Close { get; set; }
    }
}
