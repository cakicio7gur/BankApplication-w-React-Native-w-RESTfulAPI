using BusinessLayer.BLLs;
using ModelLayer.DTOs;
using ModelLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BankRestAPI.Controllers
{
    public class MusteriController : ApiController
    {
        public IHttpActionResult Get()
        {
            MusteriBLL musteriBusiness = new MusteriBLL();
            var model = musteriBusiness.Get();
            return Ok(model);
        }

        public IHttpActionResult GetById(int id)
        {
            MusteriBLL musteriBusiness = new MusteriBLL();
            var model = musteriBusiness.GetById(id);
            return Ok(model);
        }

        public IHttpActionResult GetByTcknPassword(string tckn, string password)
        {
            MusteriBLL musteriBusiness = new MusteriBLL();
            var model = musteriBusiness.GetByTcknPassword(tckn,password);
            return Ok(model);
        }

        [HttpPost]
        public IHttpActionResult Add(MusteriDTO model)
        {
            MusteriBLL musteriBusiness = new MusteriBLL();
            musteriBusiness.Add(model);
            return Ok();
        }
        [HttpPut]
        public IHttpActionResult Update(MusteriDTO model)
        {
            MusteriBLL musteriBusiness = new MusteriBLL();
            musteriBusiness.Update(model);
            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            MusteriBLL musteriBusiness = new MusteriBLL();
            musteriBusiness.Delete(id);
            return Ok();
        }

    }
}
