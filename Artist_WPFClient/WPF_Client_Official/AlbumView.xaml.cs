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
    /// Interaktionslogik für AlbumView.xaml
    /// </summary>
    /// 
    public partial class AlbumView : Window
    {
        public Album Album { get; set; }
        public string Songtitel { get; set; }
        public AlbumView(Album album)
        {
            Album = album;
            DataContext = this;
            InitializeComponent();
        }

        private void Add_Song(object sender, RoutedEventArgs e)
        {
            Song song = new Song();
            song.Title = Songtitel;
            Album.Songs.Add(song);
        }

        private void lvAlbumSongs_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (lvAlbumSongs.SelectedItem != null)
            {
                var selectedSong = (Song)lvAlbumSongs.SelectedItem;
                txtSong.Text = selectedSong.Title;
            }
        }
        private void txtSong_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (lvAlbumSongs.SelectedItem != null)
            {
                var selectedSong = (Song)lvAlbumSongs.SelectedItem;
                selectedSong.Title = txtSong.Text;
                lvAlbumSongs.Items.Refresh();
            }
        }
        //Damit man im Songtxt feld enter drücken kann anstatt dauerhaft add song zu klicken
        private void txtSong_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                string newSongTitle = txtSong.Text;
                //Hinzufügen vom neuen Titel
                Song song = new Song();
                song.Title = newSongTitle;
                Album.Songs.Add(song);
                // Textbox wird wieder geleert
                txtSong.Text = string.Empty;
            }
        }


        private void Unselect_Click(object sender, RoutedEventArgs e)
        {
            // Clear the selection in the ListView
            lvAlbumSongs.SelectedItem = null;

            // Clear the text in the txtSong TextBox
            txtSong.Text = string.Empty;
        }
    }
}
