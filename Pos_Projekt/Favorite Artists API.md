# Wozu dient die "Favorite Artists API" ?

## Beschreibung

Diese API dient dem einfachen speichern und Veranschaulichung (via Webclient) von Künstlern.
Man kann sich also eine eigene Liste an Lieblingskünstlern und deren Alben und Songs speichern oder alternativ einfach irgendwelche Alben erfinden und in diese nur gewisse Lieblingssongs eines Künstlers hinzufügen.
Während die Desktopanwendung in WPF als Admintool dient also die Verwaltung der gesamten Daten ermöglicht hat man in der WebApp eine schöne Veranschaulichung der Daten wie auch die Möglichkeit diese zu filtern.

Ein Künstler beinhaltet folgende Werte:
- Name
- Genre
- Liste an Singles
	- Singlename
	- Singlesong
- Liste an Alben
	- Albumname
	- Liste an Albumsongs
	
Jeder Song hat außerdem noch einen eigenen Songtitel.
Artist im Json Format bei Postman:

![](Artist_json.png)

## Wie wurde die API geschrieben ?

### Server
1. Zuerst werden sich express und mongoose geimportet.
Express ist ein Node.js Framework welches für den Server benötigt wird.
Mongoose ist eine Data object modeling library für MongoDb und NodeJs welche es mir ermöglichte ein Json Schema für meinen Artist zu erstellen.
mit "const app = express()" wird eine Instanz von express erstellt mit welcher später weitergearbeitet wird.
2. Als nächstes wird sich mit der mongodb collection artists verbunden und ausgegeben ob dies erfolgreich war, dies wird in der "isDatabaseConnected" variable gespeichert welche später für den Healthindicator also den Up oder Downstatus der Datenbankverbindung herangezogen wird.
3. Der nächste Teil war anfangs für den Server noch nicht relevant wurde dann jedoch sehr wichtig.
   Die app.use Funktion mit den verschiedenen Access Control headern wurde dafür benötigt um verschiedenen Clients den Zugriff zur API zu ermöglichen wenn diese von verschiedemen Ursprung sind.
   Dies ist auch bekannt als CORS (Cross origin ressource sharing) und ermöglicht dem Server das antworten auf alle Requests bzw Anfragen von verschiedensen Herkünften bzw. Clients.
4. app.use(express.json()) erlaubt es dem Server mit JSON data zu arbeiten.
5. Der Artistrouter beinhaltet die verschiedenen CRUD Endpoints.
6. app.use (/Artists, Artistrouter) sorgt dafür dass der Server mit diesen CRUD Endpoints arbeiten kann.
7. Im nächsten Abschnitt wird nochmal geprüft ob die Verbindung zu Datenbank funktioniert und setzt die Variable dementsprechend.
8.  app.get(/health) ist der Endpoint welcher den Datenbank Verbindungsstatus anzeigt.
9. Am Ende wirdnoch der Port angegeben auf welchem der Server hört bzw. läuft, als auch für den Falle einer unbehandelten Ausnahme vorgesorgt welche dann als log error in der Console ausgegeben wird.

![](DownStatus.png)

![](UpStatus.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/93c415984b9e243378ec1b43114900f3134ba94c/Pos_Projekt/Pasted%20image%2020230521193617.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/c38ff8e916f442c54d9fbf414d4484886f612b0b/Pos_Projekt/Pasted%20image%2020230521201811.png)

![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/c38ff8e916f442c54d9fbf414d4484886f612b0b/Pos_Projekt/Pasted%20image%2020230521202315.png)
### Endpoints
1.  Zuerst werden wieder die benötigten module und dependencies heruntergeladen.
2. In der GET bzw. Getall funktion werden die Daten aller Artists abgerufen und als JSON response zurückgegeben.
   Sollte bei dem abrufen der Daten ein fehler auftreten wird der Errorcode 500 mit einer error message ausgegeben.
   Async und Await werden bei asynchronen Methoden benötigt, await stoppt den derzeitigen Prozess bis das verlangte Ergebnis vorhanden bzw. angekommen ist.
   Bei "await Artist.find()" wird solange gewartet bis Artists gefunden wurden oder dies nicht möglich ist und der Errorcode geworfen wird. 
3. Bei der GET by id oder Get one funktion wird eine id mitgegeben, mit welcher getArtist funktion nach genau dem Artist sucht zu welcher diese mitgegeben id angehört.
   Mit "res.json(res.artist.name)" wird der artistname als json response zurückgegeben was für das testen der Get by id methode hilfreich war
   Der Pfad lautet hier dann localhost:3001/artists/{id}
4. Bei der POST Methode wird mit den mitgegebenen Daten ein Artist erstellt und anschließend auf der Datenbank (MongoDB) gespeichert.
   Wenn das erstellen des Artists gelungen ist wird der Statuscode "201" welcher Erfolg bedeutet ausgegeben.
   Bei einem Fehler wird der Statuscode "500" mit einer Errormessage ausgegeben.
5. Bei der DELETE Methode wird eine id mitgegeben, mit welcher man durch die getArtist methode einen zugehörigen Artist sucht.
   mit "await res.artist.deleteOne()" wird auf einen response gewartet und dieser wird dann von der Datenbank gelöscht.
   Wenn dieser Prozess erfolgreich war wird einfach nur die Json nachricht "Artist gelöscht" ausgegeben.
   Bei einem Fehler wird der Fehlercode "400" mit der Errormessage ausgegeben.
6. Bei der PUT oder UPDATE Methode wird eine id mitgeben mit welcher man durch die getArtist methode einen zugehörigen Artist sucht und dessen Attribute dann durch neue eines requested Artist ersetzt werden.
Der requested Artist, als auch dessen id werden im Desktop Client dabei für die Put Methode mitgegeben und seine id dafür verwendet um die Attribute des alten Artist durch die des neuen mitgegebenen zu ändern. 
   
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230522202644.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230522203008.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230522203528.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230522205714.png)


### Anwendung der API im WPF Client
Der WPF Client sollte als Admintool dienen um Artists ohne Probleme verwalten zu können.
Man hat daher alle benötigten Optionen:
* Create mit welcher man einen Artist mit den benötigten Werten "Name" und "Genre" erstellen kann
* Update mit welcher man "Name" und "Genre" eines Artists ändern kann, als auch "Singles" und "Alben" hinzufügen oder ändern kann, wenn man zuvor auf den Artist in der Liste am Ende des Fensters klickt und in der darauffolgenden "Artistview" weiterbearbeitet.
* Delete mit welcher man über die ID eines Artists diesen löschen kann.
  Um die ID zu bekommen kann man einfach auf einen Artist in der Liste klicken und sich dessen ID aus dem "Artistview" Window löschen.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605193843.png)
Wenn man auf einen Artist klickt öffnet sich das Artistview Window, hierbei hat der Benutzer einige Möglichkeiten: 
* ID kopieren, jedoch nicht ändern
* Name und Genre abändern, dies wird sobald man das Fenster schließt oder in ein weiteres Textfeld navigiert übernommen und im Hauptwindow mit dem "Update" Button  über die API an die Datenbank weitergegeben und gespeichert.
* Das Erstellen von einem Album oder einer Single
	* Hierbei wird ein leeres Objekt erstellt, in dem Beispiel Screenshot sieht man dass die leeren Objekte Default also Standardnamen zugewiesen bekommen.
	  Um dann ein richtiges Album oder eine richtige Single zu erstellen muss man in deren jeweiligen Fenster navigieren und ihnen dort Namen als auch Song oder Songs zuweisen.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605194223.png)
Im folgenden Albumview Fenster hat man wieder einige Möglichkeiten:
* Man kann den Albumnamen eingeben und jederzeit ändern und im Nachhinein updaten.
  Wenn man in ein Album hineinklickt wird automatisch das Objekt mitgegeben und der Albumname, welcher beim erstellen Anfangs "Default Name" ist im Textfeld eingefügt.
  Dies funktionierte in dem ich beim öffnen eines Fensters immer mein benötigtes Objekt als Parameter mitgebe und es als Datacontext festlege.
  Dadurch kann ich im WPF xaml code bindings verteilen, diese Bindings kann man sich als Verbindung zwischen WPF Element und meinem mitgegeben Objekt vorstellen.
  Das Albumname Textfeld hat also eine Verbindung zu dem Albumnamen des mitgegebenen Albumobjektes.
* Um das Updaten der Songs zu ermöglichen hab ich eine Funktion erstellt welche erkennt wenn ein Song augewählt/angeklickt wurde und diesen Dann im Textfeld einfügt und bearbeitbar macht.
  Damit man im Anschluss auch wieder neue Songs hinzufügen kann musste ich einen Button "Unselect List" einfügen, welcher dafür sorgt dass der angeklickte Song in der Liste nicht mehr mit dem Textfeld verbunden ist und dass Songfeld wieder geleert wird.
* Ein weiteres Feature ist die erstellte Funktion welche es dem Benutzer erlaubt im Albumsong feld enter zu benutzen anstatt nach jedem Song auf "Add Song" zu klicken. 
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605194630.png)
Der Codeteil:

![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605200334.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605200423.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605201736.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605201718.png)
Das Fenster zum hinzufügen einer Single ist im Gegenzug sehr simple.

![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605203321.png)
#### WPF CRUD im Code
In einer Separaten Klasse "API_Service" wurde ein HTTP Client erstellt und diesem eine BaseAddress zugewiesen.
Das bedeutet dass der httpclient alle seine CRUD Funktionen auf dieser Addresse anwendet. 
Wenn bei einer Funktion zusätzlich ein Endpoint als Parameter mitgegeben wurde wendet der Client die API Addresse + diesem Endpoint an.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605204732.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605204750.png)

Danach wurde dieser HTTP Client und dessen Funktionen im MainWindow benutzt indem ein Service Objekt erstellt wurde.
Wenn man nun das Programm startet wird sofort eine Artistliste erstellt welche von dem httpClient per Get Anfrage die gesamten Artist einträge bekommt und abspeichert.
* Create - Ein Artist wird erstellt und einer "lokalen" liste hinzugefügt welche im wpf zum anzeigen im Listview benutzt wird.
  Zusätzlich wird der erstellte Artist an die API gesendet und in der Datenbank gespeichert.
* Update - Für jeden Artist in der Liste wird die Update Funktion vom API Service aufgerufen
* Delete - Bei Delete wird nach der angegebenen ID gesucht und dieser Artist wird aus der Datenbank und WPF Liste gelöscht.
  Um das Crashen der Desktop Anwendung zu verhindern wurden Exceptions eingeführt und wenn diese auftreten werden passende Messageboxen angezeigt.
  Außerdem musste ich bei der Selection Changed Funktion eine kleine Änderung vornehmen. Diese wird aktiviert wenn man auf ein Element in der Liste klickt. Durch das löschen wurde die Auswahl jedoch ebenfalls geändert weshalb nach jedem Löschen ein Artistview geöffnet wurde.
  Um dem Gegenzuwirken wurde ein nullcheck eingefügt.
  
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605205433.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605210647.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605210711.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605210951.png)
### Web Client
Der Web Client dient dem reinen Anzeigen der Songs.
Wenn man auf der Overview Seite in einer Songcard auf ein Album oder eine Single klickt öffnet sich ein Modal welches den Namen und die Songs bzw den Song des jeweiligen Objektes anzeigt.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605211640.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605211859.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605211923.png)
Auf der Artists Seite kann man nach seinem Artist suchen oder einfach mehrere Artists filtern.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605212609.png)
Auf der Songs Seite kann man alle Songs aus Alben und Singles filtern oder einfach einen Artist suchen und alle seine Songs anzeigen lassen.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605212805.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605212902.png)
Erwähnenswert ist hierbei dass alle Seiten responsiv sind, wodurch sich die Karten untereinander anordnen und die Navbar mit einem Toggler verfügbar wird.

![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605213027.png)
#### Installieren von Lit
Lit diente dem einfachen verpacken meiner Navbar.
Meine Navbar wurde in ein Javascript file gepackt und als Lit Component gerendered.
Dies ermöglichte es mir den Component "my-navbar" in jeder html Seite zu laden.
Außerdem hab ich dadurch direkt eine Toggler Funktion von Lit benutzen können anstatt zu JQuery oder weiteren Methoden greifen zu müssen.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230522173524.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/ce748a4f4bc0f1dd83b8eb97046e2e0cb2cde748/Pos_Projekt/Pasted%20image%2020230605212451.png)
#### Probleme welche mich aufgehalten haben:
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230522181659.png)

War ein einfacher Logikfehler auf den ich aber eine Zeit lang nicht gekommen bin.
Ich musste bei der Single zusätzlich noch in den Song gehen und das hatte dann folgenden Fehler bei der Anzeige gegeben:
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230522181828.png)
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/4b9c6e21abbc715e67fde1aab4be0b697055c3f2/Pos_Projekt/Pasted%20image%2020230522181904.png)

Ein weiteres Problem stellte die Navbar dar welche ich responsiv haben wollte.
Bootstrap war eingebunden und die benötigten Funktionen waren eigentlich auch im Code vorhanden jedoch funktionierten diese nicht und ich wusste lange nicht wieso und hab diesen Teil erstmal pausiert. Später hab ich dann rausgefunden, dass für diese Funktionen JQuery eingebunden werden muss.
Dies funktionierte zwar aber ich habe noch nach einer weiteren Möglichkeit gesucht und herausgefunden dass mein Framework Lit ebenfalls eine Funktionalität dafür anbietet.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605213549.png)
Abgesehen davon gab es noch unzählige Probleme in der Desktop Anwendung mit WPF wie zum Beispiel die Exception beim löschen von Einträgen, das aktualisieren der Datenbank als auch der in WPF erstellten Liste, das unselecten eines Songs in der Albumliste wie auch das ermöglichen vom Song bearbeiten aus der Albumliste.

Außerdem hab ich anfangs eine Methode gefunden um meine Daten aus der Datenbank (MongoDB) zu bekommen und auch auf diese zuzugreifen und sie zu verändern. 
Dies war mithilfe eines Nuggets ganz einfach Möglich.
Das ganze musste ich dann jedoch verwerfen, da mir bewusst wurde dass ich auf meine API zugreifen muss und nicht direkt auf meine Datenbank wodurch ich meinen bisherigen Fortschritt auf den Kopf stellen musste.
![](https://github.com/Janoran/Pos_Semesterprojek_2023_ArtistAPI/blob/16bf78eeaf6cd09c9b685a9d7108a0de82bf5483/Pos_Projekt/Pasted%20image%2020230605213912.png)
## Zusammenfassung
Am Ende lässt sich festhalten, dass ich mit diesem Projekt vieles gelernt habe, darunter vorallem wie man mit WPF umgeht und sich das Leben mit Bindings einfacher macht und wie man eine API schreibt und auf diese zugreift.
Zusätzlich konnte ich mein Wissen in der Webentwicklung wieder auffrischen und erweitern, z.B mit Lit und Cors wovon ich nicht wusste wie wichtig es ist.
Mein gewähltes Thema hat mir viel spaß gemacht und war weder zu einfach noch zu kompliziert welches perfekt war um eine Challenge darzustellen und die Frustration nicht zu viel wurde.
In Zukunft könnte man das Projekt um viele Funktionen wie einen random Button erweitern welche bei Click eine "Song Empfehlung" ausgibt.
Die WPF Umgebung könnte man noch verschönern und den gesamten Code müsste man noch auf mögliche Fehler testen und diese Abfangen also ein Exception handling einbauen.
Viele konnte ich finden (wie das löschen mit leerer id) und beheben, jedoch wird es bestimmt noch einige geben welche man fixen müsste.

## Quellen
Bootstrap:
https://getbootstrap.com/
Lit:
https://lit.dev/
Für die API hab ich folgendes Video als Hilfe benutzt:
https://www.youtube.com/watch?v=fgTGADljAeg&t=1532s&pp=ygUSaG93IHRvIG1ha2UgYW4gYXBp
