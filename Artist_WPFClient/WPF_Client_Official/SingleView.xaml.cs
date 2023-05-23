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
    /// Interaktionslogik für SingleView.xaml
    /// </summary>
    public partial class SingleView : Window
    {
        public Single Single { get; set; }
        public SingleView(Single single)
        {
            Single = single;
            DataContext = this;
            InitializeComponent();

        }

    }
}
