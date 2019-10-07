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
    public class HesapBLL
    {
        HesapMapper hesapMapper = new HesapMapper();

        public List<HesapDTO> Get()
        {
            using (HesapRepository hesapRepo = new HesapRepository())
            {
                try
                {
                    var model = hesapRepo.Get(x => x.Musteri, x => x.AcilisPlatformu).ToList();
                    return hesapMapper.MapAll(model);
                }
                catch
                {
                    throw;
                }
            }
        }

        public HesapDTO GetById(int id)
        {

            using (HesapRepository hesapRepo = new HesapRepository())
            {
                try
                {
                    var model = hesapRepo.GetById(x => x.hesapNo == id, x => x.Musteri, x => x.AcilisPlatformu);
                    return hesapMapper.Map(model);
                }
                catch
                {
                    throw;
                }

            }
        }

        public List<HesapDTO> GetByMusteriNo(int? musteriNo)
        {
            using (HesapRepository hesapRepo = new HesapRepository())
            {
                try
                {
                    var model = hesapRepo.GetByFilter(x => x.musteriNo == musteriNo, x => x.Musteri, x => x.AcilisPlatformu);
                    return hesapMapper.MapAll(model);
                }
                catch
                {
                    throw;
                }

            }
        }

        public void Add(HesapDTO model)
        {
            using (HesapRepository hesapRepo = new HesapRepository())
            {
                try
                {
                    var hesapAdet = GetByMusteriNo(model.musteriNo).Count;
                    var hesap = new Hesap();
                    hesap.musteriNo = model.musteriNo;                                                          
                    hesap.ekNo = 10 + hesapAdet;
                    hesap.hesapNo = Convert.ToInt32(model.musteriNo.ToString() + hesap.ekNo.ToString());
                    hesap.hesapAcilisTarihi = model.hesapAcilisTarihi;
                    hesap.bakiye = model.bakiye;
                    hesap.acilisPlatformID = model.acilisPlatformID;
                    hesapRepo.Add(hesap);
                }
                catch
                {
                    throw;
                }
            }
        }

        public void Update(HesapDTO model)
        {
            using (HesapRepository hesapRepo = new HesapRepository())
            {
                try
                {
                    var hesap = new Hesap();
                    hesap.musteriNo = model.musteriNo;
                    hesap.hesapAcilisTarihi = model.hesapAcilisTarihi;
                    hesap.bakiye = model.bakiye;
                    hesap.acilisPlatformID = hesap.acilisPlatformID;
                    hesapRepo.Update(hesap);
                }
                catch
                {
                    throw;
                }
            }
        }

        public void Delete(int id)
        {
            using (HesapRepository hesapRepo = new HesapRepository())
            {
                try
                {
                    hesapRepo.Delete(id);
                }
                catch
                {
                    throw;
                }
            }
        }
    }
}
