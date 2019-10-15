using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLayer.DTOs
{
    public class HesapDTO
    {
        public int hesapNo { get; set; }
        public string ad { get; set; }
        public string soyad { get; set; }
        public Nullable<decimal> bakiye { get; set; }
        public Nullable<System.DateTime> hesapAcilisTarihi { get; set; }
        public Nullable<int> musteriNo { get; set; }
        public Nullable<int> acilisPlatformID { get; set; }
        public Nullable<int> ekNo { get; set; }
        public string acilisPlatformAdi { get; set; }
    }
}
