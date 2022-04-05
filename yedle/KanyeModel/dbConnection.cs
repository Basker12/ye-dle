using Microsoft.EntityFrameworkCore;

namespace yedle.KanyeModel;

public class dbConnection : DbContext
{
    public DbSet<KanyeSongs> Songs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite(@"Data Source = C:\ye-dlee2\yedle\Database\KanyeSongs.db");
}