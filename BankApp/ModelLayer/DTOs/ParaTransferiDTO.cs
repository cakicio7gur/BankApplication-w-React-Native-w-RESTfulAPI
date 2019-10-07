using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLayer.DTOs
{
    public class ParaTransferiDTO
    {
        public int ptID { get; set; }
        public Nullable<int> aliciHesapNo { get; set; }
        public Nullable<int> gonderenHesapNo { get; set; }
        public Nullable<decimal> islemTutari { get; set; }
        public string aciklama { get; set; }
        public Nullable<System.DateTime> islemTarihi { get; set; }
        public Nullable<int> islemTuruID { get; set; }
        public string tur { get; set; }
    }
}
