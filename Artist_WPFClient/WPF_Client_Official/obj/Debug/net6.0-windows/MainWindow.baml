   M S B A M L   `   `   `  ����N  JWPF_Client_Official, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null9!clr-namespace:WPF_Client_OfficialWPF_Client_Official  5
   	   $    WPF_Client_Official.MainWindow   5   	   W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   3local!clr-namespace:WPF_Client_Official     5
   	     � Title$  Artist Management��5   	   $	��900��6#   $
��1600��60    � Icon$ 	Vinyl.png��5	   	   $��15(�5   	   .��5      �  � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6   �� 5      $
��Auto �6    � ColumnDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   .+�5   
   �� $	��Id:��6   $��0��6   $��0��6+   $��10q�6;   �� 5   
   -   5         ��Name$ txtId��5      $��0��6!   $��1��6.   $��5q�6>   �� 5    
   $��Name:��6   $��1��6    $��0��6-   $��10q�6=   �� 5!   
   -   5        $ txtName��5!      $��1��6#   $��1��60   $��5,7,5,3q�6@   �� 5"   
   $��Genre:��6   $��2��6!   $��0��6.   $��10q�6>   �� 5#   
   -   5        $ txtGenre��5#      $��2��6$   $��1��61   $��5q�6A   �� 5&   
    �� Orientation$ 
Horizontal=�6   $��7��6.   $��1��6;   .+�5'      �� -   5         ��Name$ 	btnCreate��5'      $��Create��6(   $��10q�6:   $	��100��6F   $��50��6R   6^   �� 5(      -   5        $ 	btnUpdate��5(      $��Update��6(   $��10q�6:   $	��100��6F   $��50��6R   6^   �� 5)      -   5        $ 	btnDelete��5)      $��Delete��6(   $��10q�6:   $	��100��6F   $��50��6R   6^   5*      �� 5,   
   -   5         ��Name$ 	lvArtists��5,   8   $��8��6K   $��8��6`   ���	#FFF0F0F0��6�   �� *	artists+ �� View 5-      �� 5.      .P�5/      �� $
��Name��6%   	 �� DisplayMemberBinding	 63   �� *Name+�� 50      $��Genre��6%   	 64   �� *Genre+51      53      54      56      