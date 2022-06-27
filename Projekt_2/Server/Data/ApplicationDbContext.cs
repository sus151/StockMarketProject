using IdentityServer4.EntityFramework.Entities;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Projekt_2.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projekt_2.Server.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<UserCompany> UserCompanies { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Article> Articles { get; set; }
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Company>(e =>
            {
                e.ToTable("Company");
                e.HasKey(e => e.IdCompany);

                e.Property(e => e.Name).HasMaxLength(300).IsRequired();
                e.Property(e => e.Ticker).HasMaxLength(300).IsRequired();
                e.Property(e => e.HomepageUrl).HasMaxLength(300).IsRequired();
                e.Property(e => e.Description).HasMaxLength(300).IsRequired();
                e.Property(e => e.PhoneNumber).HasMaxLength(20).IsRequired();
                e.Property(e => e.City).HasMaxLength(300).IsRequired();
                e.Property(e => e.IconUrl).HasMaxLength(300).IsRequired();
                e.Property(e => e.LastUpdateDate).IsRequired();
            });
            modelBuilder.Entity<Session>(e =>
            {
                e.ToTable("Session");
                e.HasKey(e => e.IdSession);

                e.Property(e => e.From).HasMaxLength(100).IsRequired();
                e.Property(e => e.Symbol).HasMaxLength(100).IsRequired();
                e.Property(e => e.Open).IsRequired();
                e.Property(e => e.High).IsRequired();
                e.Property(e => e.Low).IsRequired();
                e.Property(e => e.Close).IsRequired();
                e.Property(e => e.Volume).IsRequired();
                e.Property(e => e.AfterHours).IsRequired();
                e.Property(e => e.PreMarket).IsRequired();
                e.HasOne(e => e.Company).WithMany(e => e.CompanySessions).HasForeignKey(e => e.IdCompany);


            });

            modelBuilder.Entity<Stock>(e =>
            {
                e.ToTable("Stock");
                e.HasKey(e => e.IdStock);

                e.Property(e => e.Date).HasMaxLength(20).IsRequired();
                e.Property(e => e.High).IsRequired();
                e.Property(e => e.Low).IsRequired();
                e.Property(e => e.Open).IsRequired();
                e.Property(e => e.Close).IsRequired();
                e.HasOne(e => e.Company).WithMany(e => e.CompanyStocks).HasForeignKey(e => e.IdCompany);




            });

            modelBuilder.Entity<UserCompany>(e =>
            {
                e.ToTable("User_Company");


                e.HasKey(e => new
                {
                    e.IdUser,
                    e.IdCompany
                });

                e.HasOne(e => e.User)
                .WithMany(e => e.UserCompanies)
                .HasForeignKey(e => e.IdUser);

                e.HasOne(e => e.Company)
                .WithMany(e => e.CompanyUsers)
                .HasForeignKey(e => e.IdCompany);
            });

            modelBuilder.Entity<Article>(e =>
            {
                e.ToTable("Article");
                e.HasKey(e => e.IdArticle);

                e.Property(e => e.PublishedUtc).HasMaxLength(100).IsRequired();
                e.Property(e => e.ArticleUrl).HasMaxLength(300).IsRequired();
                e.Property(e => e.Title).HasMaxLength(300).IsRequired();



                e.HasOne(e => e.Company)
                .WithMany(e => e.CompanyArticles)
                .HasForeignKey(e => e.IdCompany);
            });

        }
    }
}
