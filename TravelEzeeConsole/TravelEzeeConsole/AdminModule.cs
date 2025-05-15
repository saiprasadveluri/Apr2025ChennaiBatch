using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelEzeeConsole.Infra;

namespace TravelEzeeConsole
{
    internal class AdminModule
    {
        private DataProvider dataProvider;
        public AdminModule()
        {
            dataProvider=DataProvider.Instance;
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
            var SelSrv=dataProvider.Services.Where(srv=>srv.ServiceNo==srvNo).FirstOrDefault();
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
            var SrvCount=(from srv in dataProvider.Services
                          where srv.ServiceTypeId == ServiceTypeId
                         select srv).Count();
            if (SrvCount == 0)
            {
                var SelSrvType=dataProvider.ServicesTypes.FirstOrDefault(st=>st.ServiceTypeid==ServiceTypeId);
                if(SelSrvType != null)
                {
                    dataProvider.ServicesTypes.Remove(SelSrvType);
                }
            }  
            else
            {
                throw new EntityInUseException("Service Type is In use");
            }
        }
    }
}
