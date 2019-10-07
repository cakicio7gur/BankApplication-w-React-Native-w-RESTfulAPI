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
    public class ParaTransferiController : ApiController
    {
        public IHttpActionResult Get()
        {
            ParaTransferiBLL paraTransferiBusiness = new ParaTransferiBLL();
            var model = paraTransferiBusiness.Get();
            return Ok(model);
        }

        public IHttpActionResult GetById(int id)
        {
            ParaTransferiBLL paraTransferiBusiness = new ParaTransferiBLL();
            var model = paraTransferiBusiness.GetById(id);
            return Ok(model);
        }

        public IHttpActionResult GetByHesapNo(int hesapNo)
        {
            ParaTransferiBLL paraTransferiBusiness = new ParaTransferiBLL();
            var model = paraTransferiBusiness.GetByHesapNo(hesapNo);
            return Ok(model);
        }

        [HttpPost]
        public IHttpActionResult Add(ParaTransferiDTO model)
        {
            ParaTransferiBLL paraTransferiBusiness = new ParaTransferiBLL();
            paraTransferiBusiness.Add(model);
            return Ok();
        }
        [HttpPut]
        public IHttpActionResult Update(ParaTransferiDTO model)
        {
            ParaTransferiBLL paraTransferiBusiness = new ParaTransferiBLL();
            paraTransferiBusiness.Update(model);
            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            ParaTransferiBLL paraTransferiBusiness = new ParaTransferiBLL();
            paraTransferiBusiness.Delete(id);
            return Ok();
        }
    }
}
