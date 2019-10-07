using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLayer.DTOs
{
    public class MusteriDTO
    {
        public int musteriNo { get; set; }
        public string tckn { get; set; }
        public string sifre { get; set; }
        public string ad { get; set; }
        public string soyad { get; set; }
        public Nullable<System.DateTime> dogumTarihi { get; set; }
        public string cepTelefonu { get; set; }
        public string mail { get; set; }
        public string acikAdres { get; set; }
        public Nullable<System.DateTime> kayıtTarihi { get; set; }
        public Nullable<int> acilisPlatformID { get; set; }
        public string acilisPlatformAdi { get; set; }

    }
}
