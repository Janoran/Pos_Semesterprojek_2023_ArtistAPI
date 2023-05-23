using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WPF_Client_Official
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public ObservableCollection<Artist> artists { get; set; }
        
        API_Service Service = new API_Service();
        public MainWindow()
        {
            InitializeComponent();
            DataContext = this;
            Task.Run(async() =>
            {
                artists = await Service.GetArtistData();
            });
        }

        private void btnCreate_Click(object sender, RoutedEventArgs e)
        {
            Artist artist = new Artist()
            {
                Name = txtName.Text,
                Genre = txtGenre.Text,
                /*Single single = new Single()
                {
                    Name= txtName.Text,
                    Song= txtSong.Text,
                }*/

            };
            artists.Add(artist);
            Service.PostArtistData(artist);
        }

        private async void btnUpdate_Click(object sender, RoutedEventArgs e)
        {
            foreach(Artist artist in artists)
            {
                await Service.UpdateArtistData(artist);
            }
        }

        private async void btnDelete_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                string artistId = txtId.Text;

                // Check if the artist ID is valid
                if (!string.IsNullOrWhiteSpace(artistId))
                {
                    // Delete the artist data
                    await Service.DeleteArtistData(artistId);

                    // Find the artist with the specified ID
                    Artist artist = artists.FirstOrDefault(x => x.Id == artistId);

                    // Remove the artist if found
                    if (artist != null)
                    {
                        artists.Remove(artist);
                    }
                    else
                    {
                        // The artist was not found
                        MessageBox.Show("Artist nicht gefunden \n Gebe eine valide ID ein");
                    }
                }
                else
                {
                    // Invalid artist ID
                    MessageBox.Show("Bitte gebe eine valide ID ein");
                }
            }
            catch (Exception ex)
            {
                // Handle any exceptions that occurred during the deletion process
                MessageBox.Show("An error occurred while deleting the artist: " + ex.Message);
            }
        }

        private void selection_Changed(object sender, SelectionChangedEventArgs e)
        {
            //AlertView alertview = new AlertView((Artist)lvArtists.SelectedItem);
            //alertview.Show();
            //Null check, wenn man sonst einen Artist auswählt um die ID zu kopieren und damit zu löschen und dann "delete" klickt wird sonst die Artistview wegen "selection changed" erneut geöffnet
            if(lvArtists.SelectedItem != null)
            {
                ArtistView artistView = new ArtistView((Artist)lvArtists.SelectedItem);
                artistView.ShowDialog();
            }
            
        }
    }
}
