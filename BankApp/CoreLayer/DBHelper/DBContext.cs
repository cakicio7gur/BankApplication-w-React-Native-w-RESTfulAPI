using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CoreLayer.DBHelper
{
    public class DBContext : DbContext
    {
        public DBContext()
            : base(@"metadata = res://*/Models.Model1.csdl|res://*/Models.Model1.ssdl|res://*/Models.Model1.msl;provider=System.Data.SqlClient;provider connection string=';data source=DESKTOP-ROO5HV9\SQLEXPRESS;initial catalog=BankDatabase;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot';")
        {

        }
    }
}
