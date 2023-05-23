using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;


namespace WPF_Client_Official
{
    
    class API_Service
    {
        private HttpClient httpClient;

        public API_Service() 
        {
            httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri("http://localhost:3001/");
        }
        
        public async Task<ObservableCollection<Artist>> GetArtistData()
        {
            ObservableCollection<Artist> artistlist = new ObservableCollection<Artist>();

            artistlist = await httpClient.GetFromJsonAsync<ObservableCollection<Artist>>("/artists");

            return artistlist;
        }

        //Benötigt wenn man auf etwas wartet :)
        public async Task PostArtistData(Artist artist)
        {
            await httpClient.PostAsJsonAsync<Artist>("/artists",artist);
        }

        public async Task UpdateArtistData(Artist artist)
        {
            await httpClient.PutAsJsonAsync($"/artists/{artist.Id}",artist);
        }

        public async Task DeleteArtistData(string artistId)
        {
            await httpClient.DeleteAsync($"artists/{artistId}");
        }

    }
}
