   M S B A M L   `   `   `  ����N  JWPF_Client_Official, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null9!clr-namespace:WPF_Client_OfficialWPF_Client_Official  5   	   #    WPF_Client_Official.AlbumView   5   	   W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   3local!clr-namespace:WPF_Client_Official     5   	     � Icon$  
Vinyl4.png��5   	    � Title$ 	AlbumView��5
   	   $	��450��6   $	��800��6(   $��20(�5   	   .��5      �� .+�5   
   �  � RowDefinitions 5      �� 5      $
��Auto �6    �� 5      $
��Auto �6    �� 5      $
��Auto �6    �� 5      $
��Auto �6     � ColumnDefinitions 5      �� 5      $
��Auto �6#   �� 5      $��* �6#   .+�5      �� $��0��6   $��0��6!   .��61   
Albumname:6=   �� 5      -   5         ��Name$ txtAlbum��5   3   $��0��6   $��1��6#   $��5,7,5,3q�6E   ��6V   �� *
Album.Name+6t   �� 5      $��1��6   $��0��6!   .��61   
Albumsong:6=   �� 5      -   5        $ txtSong��5   3   $��1��6   $��1��6#   $��5,7,5,3q�6_   ��6p   �� *	Songtitel+6�   �� 5      -   5        $��2��5      $��0��6"   $	��400��62   $��Unselect List��6A   6r   �� 5      -   5        $��2��5      $��1��6"   $	��400��62   $��Add Song��6A   6g   �� 5       -   5         ��Name$ lvAlbumSongs��5    �   $��3��6   $��0��6$   $��2��64   ��6z   �� *Album.Songs+ �� View 5!      �� 5"      .P�5#      �� $
��Song��6)    �� DisplayMemberBinding 67   �� *Title+5$      5&      5'      5(      5)      