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
    public class ParaTransferiBLL
    {
        ParaTransferiMapper paraTransferiMapper = new ParaTransferiMapper();

        public List<ParaTransferiDTO> Get()
        {
            using (ParaTransferiRepository paraTransferiRepo = new ParaTransferiRepository())
            {
                try
                {
                    var model = paraTransferiRepo.Get(x=>x.IslemTuru).ToList();
                    return paraTransferiMapper.MapAll(model);
                }
                catch
                {
                    throw;
                }
            }
        }

        public ParaTransferiDTO GetById(int id)
        {

            using (ParaTransferiRepository paraTransferiRepo = new ParaTransferiRepository())
            {
                try
                {
                    var model = paraTransferiRepo.GetById(x => x.ptID == id,x=>x.IslemTuru);
                    return paraTransferiMapper.Map(model);
                }
                catch
                {
                    throw;
                }

            }
        }
        public List<ParaTransferiDTO> GetByHesapNo(int hesapNo)
        {
            using (ParaTransferiRepository paraTransferiRepo = new ParaTransferiRepository())
            {
                try
                {
                    var model = paraTransferiRepo.GetByFilter(x => x.gonderenHesapNo == hesapNo || x.aliciHesapNo==hesapNo, x => x.IslemTuru);
                    return paraTransferiMapper.MapAll(model);
                }
                catch
                {
                    throw;
                }
            }
        }

        public void Add(ParaTransferiDTO model)
        {
            using (ParaTransferiRepository paraTransferiRepo = new ParaTransferiRepository())
            {
                try
                {
                    var paraTransferi = new ParaTransferi();
                    paraTransferi.aciklama = model.aciklama;
                    paraTransferi.aliciHesapNo = model.aliciHesapNo;
                    paraTransferi.gonderenHesapNo = model.gonderenHesapNo;
                    paraTransferi.islemTarihi = model.islemTarihi;
                    paraTransferi.islemTuruID = model.islemTuruID;
                    paraTransferi.islemTutari = model.islemTutari;
                    paraTransferi.ptID = model.ptID;
                    paraTransferiRepo.Add(paraTransferi);
                }
                catch
                {
                    throw;
                }
            }
        }

        public void Update(ParaTransferiDTO model)
        {
            using (ParaTransferiRepository paraTransferiRepo = new ParaTransferiRepository())
            {
                try
                {
                    var paraTransferi = new ParaTransferi();
                    paraTransferi.aciklama = model.aciklama;
                    paraTransferi.aliciHesapNo = model.aliciHesapNo;
                    paraTransferi.gonderenHesapNo = model.gonderenHesapNo;
                    paraTransferi.islemTarihi = model.islemTarihi;
                    paraTransferi.islemTuruID = model.islemTuruID;
                    paraTransferi.islemTutari = model.islemTutari;
                    paraTransferi.ptID = model.ptID;
                    paraTransferiRepo.Update(paraTransferi);
                }
                catch
                {
                    throw;
                }
            }
        }

        public void Delete(int id)
        {
            using (ParaTransferiRepository paraTransferiRepo = new ParaTransferiRepository())
            {
                try
                {
                    paraTransferiRepo.Delete(id);
                }
                catch
                {
                    throw;
                }
            }
        }
    }
}
