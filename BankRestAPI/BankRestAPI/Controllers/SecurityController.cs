using BusinessLayer.BLLs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;

namespace BankRestAPI.Controllers
{
    public class SecurityController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Login(string tckn, string password)
        {

            MusteriBLL musteriBusiness= new MusteriBLL();
            var model = musteriBusiness.GetByTcknPassword(tckn, password);
            if (model != null)
            {
                FormsAuthentication.SetAuthCookie(model.tckn, false);

                return Ok(model);
            }
            else
            {
                return NotFound();
            }

        }        
        public IHttpActionResult Logout()
        {
            FormsAuthentication.SignOut();

            return Ok();
        }
    }
}
