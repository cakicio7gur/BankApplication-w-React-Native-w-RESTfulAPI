//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ModelLayer.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ParaTransferi
    {
        public int ptID { get; set; }
        public Nullable<int> aliciHesapNo { get; set; }
        public Nullable<int> gonderenHesapNo { get; set; }
        public Nullable<decimal> islemTutari { get; set; }
        public string aciklama { get; set; }
        public Nullable<System.DateTime> islemTarihi { get; set; }
        public Nullable<int> islemTuruID { get; set; }
    
        public virtual IslemTuru IslemTuru { get; set; }
    }
}
