using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WPF_Client_Official
{
    /// <summary>
    /// Interaktionslogik für ArtistView.xaml
    /// </summary>
    public partial class ArtistView : Window
    {
        
        public Artist Artist { get; set; } = new Artist();
        public ArtistView(Artist artist)
        {
            DataContext = this;
            Artist = artist;
            InitializeComponent();
        }

        private void album_Changed(object sender, SelectionChangedEventArgs e)
        {
            AlbumView albumView = new AlbumView((Album)lvAlbums.SelectedItem);
            albumView.ShowDialog();
        }

        private void single_Changed(object sender, SelectionChangedEventArgs e)
        {
            SingleView singleView = new SingleView((Single)lvSingles.SelectedItem);
            singleView.ShowDialog();
        }

        private void createAlbum_Click(object sender, RoutedEventArgs e)
        {
            Album album = new Album();
            album.Name = "Default Name";
            Artist.Albums.Add(album);
        }

        private void createSingle_Click(object sender, RoutedEventArgs e)
        {
            Single single = new Single();
            single.Name = "Default Single Name";
            Artist.Singles.Add(single);
        }
    }
}
