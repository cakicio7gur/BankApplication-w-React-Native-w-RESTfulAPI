using ModelLayer.DTOs;
using ModelLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MappingLayer.Mappers
{
    public class MusteriMapper
    {
        public List<MusteriDTO> MapAll(IEnumerable<Musteri> model)
        {
            var musteriler = new List<MusteriDTO>();
            foreach (var ent in model.ToList())
            {
                var musteri = new MusteriDTO();
                musteri.musteriNo = ent.musteriNo;
                musteri.tckn = ent.tckn;
                musteri.sifre = ent.sifre;
                musteri.ad = ent.ad;
                musteri.soyad = ent.soyad;
                musteri.dogumTarihi = ent.dogumTarihi;
                musteri.kayıtTarihi = ent.kayıtTarihi;
                musteri.cepTelefonu = ent.cepTelefonu;
                musteri.mail = ent.mail;
                musteri.acikAdres = ent.acikAdres;
                musteri.acilisPlatformID = ent.acilisPlatformID;
                musteri.acilisPlatformAdi = ent.AcilisPlatformu.acilisPlatformAdi;


                musteriler.Add(musteri);
            }
            return musteriler;
        }

        public MusteriDTO Map(Musteri ent)
        {
            var musteri = new MusteriDTO();
            musteri.musteriNo = ent.musteriNo;
            musteri.tckn = ent.tckn;
            musteri.sifre = ent.sifre;
            musteri.ad = ent.ad;
            musteri.soyad = ent.soyad;
            musteri.dogumTarihi = ent.dogumTarihi;
            musteri.kayıtTarihi = ent.kayıtTarihi;
            musteri.cepTelefonu = ent.cepTelefonu;
            musteri.mail = ent.mail;
            musteri.acikAdres = ent.acikAdres;
            musteri.acilisPlatformID = ent.acilisPlatformID;
            musteri.acilisPlatformAdi = ent.AcilisPlatformu.acilisPlatformAdi;

            return musteri;
        }
    }
}
