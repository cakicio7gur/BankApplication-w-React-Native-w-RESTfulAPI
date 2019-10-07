using ModelLayer.DTOs;
using ModelLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MappingLayer.Mappers
{
    public class ParaTransferiMapper
    {
        public List<ParaTransferiDTO> MapAll(IEnumerable<ParaTransferi> model)
        {
            var paratransferleri = new List<ParaTransferiDTO>();
            foreach (var ent in model.ToList())
            {
                var paratransferi= new ParaTransferiDTO();
                paratransferi.gonderenHesapNo = ent.gonderenHesapNo;
                paratransferi.aliciHesapNo = ent.aliciHesapNo;
                paratransferi.islemTarihi = ent.islemTarihi;
                paratransferi.islemTutari = ent.islemTutari;
                paratransferi.ptID = ent.ptID;
                paratransferi.aciklama = ent.aciklama;
                paratransferi.islemTuruID = ent.islemTuruID;
                paratransferi.tur = ent.IslemTuru.tur;

                paratransferleri.Add(paratransferi);
            }
            return paratransferleri;
        }

        public ParaTransferiDTO Map(ParaTransferi ent)
        {
            var paratransferi = new ParaTransferiDTO();
            paratransferi.gonderenHesapNo = ent.gonderenHesapNo;
            paratransferi.aliciHesapNo = ent.aliciHesapNo;
            paratransferi.islemTarihi = ent.islemTarihi;
            paratransferi.islemTutari = ent.islemTutari;
            paratransferi.ptID = ent.ptID;
            paratransferi.aciklama = ent.aciklama;
            paratransferi.islemTuruID = ent.islemTuruID;
            paratransferi.tur = ent.IslemTuru.tur;

            return paratransferi;
        }
    }
}
