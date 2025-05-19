using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeManagement
{
    public class Admin
    {
        const string FileBasePath = "C:\\Users\\Swetha A\\source\\repos\\TravelEzeeManagement\\";
        private DataProvider dataProvider;
        public Admin()
        {
            dataProvider = DataProvider.Instance;
        }

        public void SaveServices()
        {
            using (StreamWriter reader = new StreamWriter(FileBasePath + "Services.txt"))
            {
                foreach (Service service in dataProvider.Services)
                {
                    reader.WriteLine(service.GetEntry());
                }
            }
        }

        public void ImportServices()
        {
            using (StreamReader reader = new StreamReader(FileBasePath + "Services.txt"))
            {
                while (true)
                {
                    string srvEntry = reader.ReadLine();
                    if (srvEntry == null)
                        break;
                    var srvArr = srvEntry.Split(',');
                    if (srvArr.Length == 5)
                    {
                        Service service = new Service()
                        {
                            ServiceNo = srvArr[0],
                            FromLocation = int.Parse(srvArr[1]),
                            ToLocation = int.Parse(srvArr[2]),
                            ServiceTypeId = int.Parse(srvArr[3]),
                            TotalDistance = double.Parse(srvArr[4]),
                        };
                        dataProvider.Services.Add(service);
                    }
                }
            }
        }
        public void ImportServiceTypes()
        {
            using (StreamReader reader = new StreamReader(FileBasePath + "ServiceType.txt"))
            {
                while (true)
                {
                    string line = reader.ReadLine();
                    if (line == null)
                    {
                        break;
                    }
                    string[] ServTypeArray = line.Split(',');
                    if (ServTypeArray.Length == 4)
                    {
                        ServiceType serviceType = new ServiceType()
                        {
                            ServiceTypeid = int.Parse(ServTypeArray[0]),
                            ServiceTypename = ServTypeArray[1],
                            MaxSeatCap = int.Parse(ServTypeArray[2]),
                            ChargePerKm = double.Parse(ServTypeArray[3]),
                        };
                        dataProvider.ServicesTypes.Add(serviceType);
                    }
                }
            }
        }
        public void ImportLocations()
        {
            using (StreamReader reader = new StreamReader(FileBasePath + "Locations.txt"))
            {
                while (true)
                {
                    string Locationline = reader.ReadLine();
                    if (Locationline == null)
                    {
                        break;
                    }
                    string[] LocData = Locationline.Split(',');
                    if (LocData.Length == 2)
                    {
                        Location locaction = new Location()
                        {
                            LocationId = int.Parse(LocData[0]),
                            Name = LocData[1]
                        };
                        dataProvider.Locations.Add(locaction);
                    }
                }
            }
        }

        public bool IsLocationExists(int LocId)
        {
            int Index = dataProvider.Locations.FindIndex(l => l.LocationId == LocId);
            return Index != -1;
        }
        public List<Location> GetAllLocations()
        {
            return dataProvider.Locations;
        }

        public List<ServiceType> GetAllServiceTypes()
        {
            return dataProvider.ServicesTypes;
        }

        public void AddLocation(Location loc)
        {
            dataProvider.Locations.Add(loc);
        }
        public List<Service> GetAllServices()
        {
            return dataProvider.Services;
        }

        public void AddNewService(Service srv)
        {
            dataProvider.Services.Add(srv);
        }

        public void RemoveService(string srvNo)
        {
            var SelSrv = dataProvider.Services.Where(srv => srv.ServiceNo == srvNo).FirstOrDefault();
            if (SelSrv != null)
            {
                dataProvider.Services.Remove(SelSrv);
            }
            else
            {

            }
        }

        public List<ServiceType> GetAllServiceType()
        {
            return dataProvider.ServicesTypes;
        }

        public void AddServiceType(ServiceType srv)
        {
            dataProvider.ServicesTypes.Add(srv);
        }


        public void RemoveServiceType(int ServiceTypeId)
        {
            var SrvCount = (from srv in dataProvider.Services
                            where srv.ServiceTypeId == ServiceTypeId
                            select srv).Count();
            if (SrvCount == 0)
            {
                var SelSrvType = dataProvider.ServicesTypes.FirstOrDefault(st => st.ServiceTypeid == ServiceTypeId);
                if (SelSrvType != null)
                {
                    dataProvider.ServicesTypes.Remove(SelSrvType);
                }
            }
            else
            {
                Console.WriteLine("Service Type is In use");
            }
        }
    }
}