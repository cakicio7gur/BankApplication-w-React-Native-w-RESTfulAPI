using FaturaDataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FaturaServisWebAPI.Controllers
{
    public class FaturaController : ApiController
    {
        public IHttpActionResult Get()
        {
            using (AskiDatabaseEntities db = new AskiDatabaseEntities())
            {
                return Ok(db.Fatura.ToList());
            }
        }
        public IHttpActionResult GetById(int id)
        {
            using (AskiDatabaseEntities db = new AskiDatabaseEntities())
            {
                var model = db.Fatura.Where(x => x.aboneNo == id && x.faturaDurumu==false).ToList();
                if (model.Count > 0)
                    return Ok(model);
                else return BadRequest();
            }
        }
        public void FaturaOde(Fatura model)
        {
            using (AskiDatabaseEntities db = new AskiDatabaseEntities())
            {
                var no = db.Fatura.Find(model.faturaID);
                db.Fatura.Remove(no);
                db.SaveChanges();
                var fatura = new Fatura();
                fatura.aboneNo = model.aboneNo;
                fatura.ad = model.ad;
                fatura.soyad = model.soyad;
                fatura.faturaTutari = model.faturaTutari;
                fatura.sonOdemeTarihi = model.sonOdemeTarihi;
                fatura.faturaOdemeTarihi = model.faturaOdemeTarihi;
                fatura.faturaDurumu = model.faturaDurumu;
                db.Fatura.Add(fatura);
                db.SaveChanges();
            }
        }
    }
}
