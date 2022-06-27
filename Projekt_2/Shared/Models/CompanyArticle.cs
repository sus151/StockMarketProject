using System.ComponentModel.DataAnnotations;


namespace Projekt_2.Shared.Models
{
    public class CompanyArticle
    {
        [Required]
        [MaxLength(100)]
        public string Published_utc { get; set; }
        [Required]
        [MaxLength (300)]
        public string Article_url { get; set; }
        [Required]
        [MaxLength(300)]
        public string Title { get; set; }
    }
}
