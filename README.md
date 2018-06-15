# GestoreDipendenti

Il progetto è stato generato con [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Il funzionamento prevede l'utilizzo di un database SQL, aventi le tabelle create mediante il file *initDatabase.sql* presente in /back-end/dbfiles
Una volta attivo il database sulla porta 3306 è possibile avviare il server back-end mediante il comando **node app.js** dalla directory /js a seguito della compilazione dei file tramite il comando **tsc**.
In questo modo sarà avviato *localhost:8080*.
Successivamente basterà avviare **ng serve** ed andare alla pagina *localhost:4200*

## Funzionalità

L'applicativo permette di gestire i dati dei dipendenti, i team, ed i ruoli che loro ricoprono.
Ogni dipendente ha la possibilità di 
Ogni utente ha la possibilità di aggiungere delle skill al suo profilo.

Gli utenti possono:
- visionare i profili dei colleghi senza possibilità di editarne i contenuti
- visionare il proprio profilo ed editarne i contenuti
- visionare i teams e le loro infomazioni
- aggiungere skills al proprio profilo
- aggiungere dei tag al proprio profilo ed a quello degli altri
- visionare la skill matrix contenente utenti e skill

Gli admin possono:
- aggiungere i ruoli che ricoprono i dipendenti all'interno di un team
- aggiungere e/o rimuovere skill da quelle selezionabili
- aggiungere teams

Le liste dei dipendenti possono filtrate sia per tag che per i dati dei dipendenti
La skill matrix può filtrare i contenuto in base alla skills inserita

L'accesso ai servizi dell'applicativo prevede il login, a seguito della registrazione, il quale fornirà:
- il *token* necessario all'utilizzo delle API del backend
- le informazioni sul l'utente loggato
 
Nella cartella app sono presenti 3 cartelle principali:
- **Components**: contiene tutti i componenti dell'applicativo raggruppati. Al suo interno sono presenti differti cartelle le quali raggruppano molteplici componenti.
- **Models**: contiene i modelli utilizzati
- **Services**: contiene i servizi utilizzati dalle componeti


Le credenziali di accesso sono ( username - password ):

            
*admin*  -->  andrea  -  root

*user1*  -->   rick   -  morty    

*user2*  -->  bojack  -  horseman