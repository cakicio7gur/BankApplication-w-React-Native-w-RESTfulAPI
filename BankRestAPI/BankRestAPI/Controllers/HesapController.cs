using BusinessLayer.BLLs;
using ModelLayer.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BankRestAPI.Controllers
{
    public class HesapController : ApiController
    {
        public IHttpActionResult Get()
        {
            HesapBLL hesapBusiness = new HesapBLL();
            var model = hesapBusiness.Get();
            return Ok(model);
        }

        public IHttpActionResult GetById(int id)
        {
            HesapBLL hesapBusiness = new HesapBLL();
            var model = hesapBusiness.GetById(id);
            return Ok(model);
        }

        public IHttpActionResult GetByMusteriNo(int musteriNo)
        {
            HesapBLL hesapBusiness = new HesapBLL();
            var model = hesapBusiness.GetByMusteriNo(musteriNo);
            return Ok(model);
        }

        [HttpPost]
        public IHttpActionResult Add(HesapDTO model)
        {
            HesapBLL hesapBusiness = new HesapBLL();
            hesapBusiness.Add(model);
            return Ok();
        }
        [HttpPut]
        public IHttpActionResult ParaIslem(int hesapNo, decimal tutar)
        {
            HesapBLL hesapBusiness = new HesapBLL();
            hesapBusiness.ParaIslem(hesapNo, tutar);
            return Ok();
        }
        [HttpPut]
        public IHttpActionResult HavaleVirman(int aliciHesapNo, int gonderenHesapNo, decimal tutar)
        {
            HesapBLL hesapBusiness = new HesapBLL();
            hesapBusiness.HavaleVirman(aliciHesapNo, gonderenHesapNo, tutar);
            return Ok();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            HesapBLL hesapBusiness = new HesapBLL();
            hesapBusiness.Delete(id);
            return Ok();
        }
        [HttpGet]
        public IHttpActionResult GetToplamBakiye(int id)
        {
            HesapBLL hesapBusiness = new HesapBLL();
            decimal toplamBakiye = hesapBusiness.ToplamBakiye(id);
            return Ok(toplamBakiye);
        }
    }
}
