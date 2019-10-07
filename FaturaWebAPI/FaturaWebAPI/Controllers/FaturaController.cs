using FaturaDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FaturaWebAPI.Controllers
{
    public class FaturaController : ApiController
    {
        public IEnumerable<Fatura> Get()
        {
            using (AskiDatabaseEntities db = new AskiDatabaseEntities())
            {
                return db.Fatura.ToList();
            }
        }

        public Fatura Get(int id)
        {
            using (AskiDatabaseEntities db = new AskiDatabaseEntities())
            {
                return db.Fatura.FirstOrDefault(x => x.aboneNo == id);
            }
        }

        public void FaturaOde(Fatura model)
        {
            using (AskiDatabaseEntities db = new AskiDatabaseEntities())
            {
                var no = db.Fatura.Find(model.aboneNo);
                db.Fatura.Remove(no);
                db.SaveChanges();
                var fatura = new Fatura();
                fatura.aboneNo = model.aboneNo;
                fatura.ad = model.ad;
                fatura.soyad = model.soyad;
                fatura.faturaTutari = model.faturaTutari;
                fatura.sonOdemeTarihi = model.sonOdemeTarihi;
                fatura.faturaOdemeTarihi = DateTime.Now;
                fatura.faturaDurumu = true;
                db.Fatura.Add(fatura);
                db.SaveChanges();
            }
        }
    }
}
