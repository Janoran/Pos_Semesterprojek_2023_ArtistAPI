   M S B A M L   `   `   `  ����N  JWPF_Client_Official, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null9!clr-namespace:WPF_Client_OfficialWPF_Client_Official  5   	   $    WPF_Client_Official.ArtistView   5   	   W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   3local!clr-namespace:WPF_Client_Official     5   	     � Icon$  
Vinyl2.png��5   	    � Title$ 
ArtistView��5
   	   $	��450��6   $	��800��6)   $��18(�5   	   .��5      �� .+�5   
   �  � RowDefinitions 5      �� 5      $
��Auto �6    �� 5      $
��Auto �6    �� 5      $
��Auto �6    �� 5      $
��Auto �6    �� 5      $
��Auto �6     � ColumnDefinitions 5      �� 5      $
��Auto �6#   �� 5      $��* �6#   .+�5      �� $	��ID:��6   $��10q�6"   $��0��6.   $��0��6;   �� 5   
   -   5         ��Name$ txtID��5      $
{�True��6!   $��0��62   $��1��6?    �� 
IsReadOnly$
 True��6j   $��5,7,5,3q�6|   ��6O   �� *	Artist.Id+6|   �� 5   
   $��Name:��6   $��10q�6    $��1��6,   $��0��69   �� 5   
   -   5        $ txtName��5      $
{�True��6#   $��5,7,5,3q�6Q   $��1��6b   $��1��6o   ��64   �� *Artist.Name+6o   �� 5   
   $��Genre:��6   $��10q�6!   $��2��6-   $��0��6:   �� 5    
   -   5        $ txtGenre��5       $
{�True��6$   $��5,7,5,3q�6S   $��2��6d   $��1��6q   ��65   �� *Artist.Genre+6q   �� 5!   
   -   5        $��3��5!   +   $��0��68   .��6H   CreateAlbum6U   �� 5"   
   -   5        $��3��5"   ,   $��1��69   .��6I   CreateSingle6W   �� 5$      -   5         ��Name$ lvAlbums��5$   d   $	��400��68   $��4��6G   $��0��6T   ���	#FFF0F0F0��6�   �� *Artist.Albums+ �� View 5%      �� 5&      .P�5'      �� $��Album��6)    �� DisplayMemberBinding 68   �� *Name+5(      5*      �� 5,      -   5        $ 	lvSingles��5,   f   $	��400��69   $��4��6H   $��1��6V   ���	#FFF0F0F0��6�   �� *Artist.Singles+ 5-      �� 5.      .P�5/      �� $��Single��6)    69   �� *Name+50      52      53      54      55      