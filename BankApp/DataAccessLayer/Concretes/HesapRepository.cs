using CoreLayer.DBHelper;
using DataAccessLayer.Abstraction;
using ModelLayer.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Concretes
{
    public class HesapRepository : RepositoryBase<Hesap>, IDisposable
    {
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public decimal ToplamBakiye(int id)
        {
            decimal toplamBakiye = 0;
            using (DBContext db = new DBContext())
            {
                try
                {
                    DbSet<Hesap> table = db.Set<Hesap>();
                    var model = table.Where(x => x.musteriNo == id);
                    foreach (var item in model)
                    {
                        toplamBakiye += Convert.ToDecimal(item.bakiye);
                    }
                    return toplamBakiye;
                }
                catch
                {
                    throw;
                }
            }
        }
    }
}
