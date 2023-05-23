using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WPF_Client_Official
{
  
    

        [Serializable]
        public class Artist
        {
        [JsonPropertyName("_id")]
            public string Id { get; set; } 
            public string Name { get; set; } = string.Empty;
            public string Genre { get; set; } = string.Empty;
            public ObservableCollection<Single> Singles { get; set; } = new();
            public ObservableCollection<Album> Albums { get; set; } = new();
            
            public Artist()
            {
                
            }

            public Artist(string id, string name, string genre, ObservableCollection<Single> singles, ObservableCollection<Album> albums)
            {
                this.Id = id;
                this.Name = name;
                this.Genre = genre;
                this.Singles = singles;
                this.Albums = albums;
            }    

        }



        public class Single
        {
            public string Name { get; set; } = string.Empty;
            public Song Song { get; set; } = new();
        }

        public class Album
        {
            public string Name { get; set; } = string.Empty;
            public ObservableCollection<Song> Songs { get; set; } = new();
        }

        public class Song
        {
            public string Title { get; set; } = string.Empty;
        }
    }




