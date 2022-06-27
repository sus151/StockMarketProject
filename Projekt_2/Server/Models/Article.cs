namespace Projekt_2.Server.Models
{
    public class Article
    {
        public int IdArticle { get; set; }
        public string PublishedUtc { get; set; }
        public string ArticleUrl { get; set; }
        public string Title { get; set; }
        public int IdCompany { get; set; }
        public virtual Company Company { get; set; }
    }
}
