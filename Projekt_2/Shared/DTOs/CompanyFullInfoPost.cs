using System;
using System.ComponentModel.DataAnnotations;


namespace Projekt_2.Shared.DTOs
{
    public class CompanyFullInfoPost
    {
        [Required]
        [MaxLength(300)]
        public string Name { get; set; }
        [Required]
        [MaxLength(300)]
        public string Ticker { get; set; }
        [Required]
        [MaxLength(300)]
        public string HomepageUrl { get; set; }
        [Required]
        [MaxLength(300)]
        public string Description { get; set; }
        [Required]
        [MaxLength(20)]
        public string PhoneNumber { get; set; }
        [Required]
        [MaxLength(300)]
        public string City { get; set; }
        [Required]
        [MaxLength(300)]
        public string IconUrl { get; set; }
        [Required]
        public DateTime LastUpdateDate { get; set; }
    }
}
