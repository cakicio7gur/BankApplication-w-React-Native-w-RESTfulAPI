using DataAccessLayer.Concretes;
using MappingLayer.Mappers;
using ModelLayer.DTOs;
using ModelLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.BLLs
{
    public class MusteriBLL
    {
        MusteriMapper musteriMapper = new MusteriMapper();

        public List<MusteriDTO> Get()
        {
            using (MusteriRepository musteriRepo = new MusteriRepository())
            {
                try
                {
                    var model = musteriRepo.Get(x=>x.Hesap,x=>x.AcilisPlatformu);
                    return musteriMapper.MapAll(model);
                }
                catch
                {
                    throw;
                }
            }
        }

        public MusteriDTO GetById(int id)
        {

            using (MusteriRepository musteriRepo = new MusteriRepository())
            {
                try
                {
                    var model = musteriRepo.GetById(x => x.musteriNo == id, x => x.Hesap, x => x.AcilisPlatformu);
                    return musteriMapper.Map(model);
                }
                catch
                {
                    throw;
                }

            }
        }

        public MusteriDTO GetByTcknPassword(string tckn,string password)
        {

            using (MusteriRepository musteriRepo = new MusteriRepository())
            {
                try
                {
                    var model = musteriRepo.GetByFilter(x => x.tckn == tckn && x.sifre==password, x => x.Hesap, x => x.AcilisPlatformu).ToList();
                    if(model.Count > 0)
                    {
                        return musteriMapper.Map(model[0]);
                    }
                    else
                    {
                        return null;
                    }
                    
                }
                catch
                {
                    throw;
                }

            }
        }

        public void Add(MusteriDTO model)
        {
            using (MusteriRepository musteriRepo = new MusteriRepository())
            {
                try
                {
                    var musteri = new Musteri();
                    musteri.sifre = model.sifre;
                    musteri.tckn = model.tckn;
                    musteri.ad = model.ad;
                    musteri.soyad = model.soyad;
                    musteri.dogumTarihi = model.dogumTarihi;
                    musteri.kayıtTarihi = model.kayıtTarihi;
                    musteri.cepTelefonu = model.cepTelefonu;
                    musteri.mail = model.mail;
                    musteri.acikAdres = model.acikAdres;
                    musteri.acilisPlatformID = model.acilisPlatformID;
                    musteriRepo.Add(musteri);
                }
                catch
                {
                    throw;
                }
            }
        }

        public void Update(MusteriDTO model)
        {
            using (MusteriRepository musteriRepo = new MusteriRepository())
            {
                try
                {
                    var musteri = new Musteri();
                    musteri.sifre = model.sifre;
                    musteri.tckn = model.tckn;
                    musteri.ad = model.ad;
                    musteri.soyad = model.soyad;
                    musteri.dogumTarihi = model.dogumTarihi;
                    musteri.kayıtTarihi = model.kayıtTarihi;
                    musteri.cepTelefonu = model.cepTelefonu;
                    musteri.mail = model.mail;
                    musteri.acikAdres = model.acikAdres;
                    musteri.acilisPlatformID = model.acilisPlatformID;
                    musteriRepo.Update(musteri);
                }
                catch
                {
                    throw;
                }
            }
        }

        public void Delete(int id)
        {
            using (MusteriRepository musteriRepo = new MusteriRepository())
            {
                try
                {
                    musteriRepo.Delete(id);

                }
                catch
                {
                    throw;
                }
            }
        }

    }
}
