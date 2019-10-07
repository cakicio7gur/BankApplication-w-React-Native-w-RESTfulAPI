using ModelLayer.DTOs;
using ModelLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MappingLayer.Mappers
{
    public class HesapMapper
    {
        public List<HesapDTO> MapAll(IEnumerable<Hesap> model)
        {
            var hesaplar = new List<HesapDTO>();
            foreach (var ent in model.ToList())
            {
                var hesap = new HesapDTO();
                hesap.hesapNo = ent.hesapNo;
                hesap.musteriNo = ent.musteriNo;
                hesap.hesapAcilisTarihi = ent.hesapAcilisTarihi;
                hesap.bakiye = ent.bakiye;
                hesap.ekNo = ent.ekNo;
                hesap.acilisPlatformID = ent.acilisPlatformID;
                hesap.acilisPlatformAdi = ent.AcilisPlatformu.acilisPlatformAdi;

                hesaplar.Add(hesap);
            }
            return hesaplar;
        }
        public HesapDTO Map(Hesap ent)
        {
            var hesap = new HesapDTO();
            hesap.hesapNo = ent.hesapNo;
            hesap.musteriNo = ent.musteriNo;
            hesap.hesapAcilisTarihi = ent.hesapAcilisTarihi;
            hesap.bakiye = ent.bakiye;
            hesap.ekNo = ent.ekNo;
            hesap.acilisPlatformID = ent.acilisPlatformID;
            hesap.acilisPlatformAdi = ent.AcilisPlatformu.acilisPlatformAdi;

            return hesap;
        }
    }
}
