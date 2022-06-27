

namespace Projekt_2.Server.DTOs
{
    public class CompaniesFullInfoGet
    {
        public Results Results { get; set; }
    }
    public class Results
    {
        public string Ticker { get; set; }
        public string Name { get; set; }
        public string Phone_number { get; set; }
        public Address Address { get; set; } = null;
        public string Sic_description { get; set; }
        public Branding Branding { get; set; } = null;
        public string Homepage_url { get; set; }
    }
    public class Address
    {
        public string city { get; set; }

    }

    public class Branding
    {
        public string logo_url { get; set; }
    }
}
