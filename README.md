# Backendprogrammering och databaser - Labb 2

## Outcome
Final grade: VG
Time to completion: 2h

### Notes about project:
Biggest challenge was to creat favourites with minimal amount of code. Populating the database was timeconsuming, I used http://www.pannkakor.se/ to get the data.

## Mål och syfte

I Labb 2 använder vi MongoDB som är en NoSQL-databas. Vi strukterar upp databasen enligt
standardför NoSQL – MongoDB och skriver kod i MongoDB Shell (mongosh).
Deadline
Labb 2 ska lämnas in senast söndag 3/4 kl.23.59.

### Uppgift

• Databasen ska innehålla recept.
• Vi använder MongoDB och skriver kod i Mongo Shell.
• All kod ska sparas i en textfil (utifrån det som vi har gått genom på lektionen). Se mongodbauthors.txt på ITHSDistans för exempel.
• Inlämningsuppgiften ska göras individuellt.

Följande ska finnas med när du lämnar in labben:
• En textfil med all kod (enligt betygskraven). Namnge textfilen med klass och ditt namn.
Betygskriterier

#### Krav för G

• Du ska använda MongoDB.
• Databasen ska innehålla recept och du skriver kod utifrån NoSQL-MongoDB´s standard.
Du bestämmer själv vilka key:value som ska vara med för Recepten t ex namn på receptet,
tillagningstid, kategori, ingredienser. Något av dessa måste vara en array.
• Du skriver all kod i Mongo Shell (mongosh) och kollar att allting fungerar innan du lämnar in.
• All kod sparas i en textfil som du lämnar in (utifrån det som vi har gått genom på lektionen).
Se mongodb-authors.txt på ITHSDistans för exempel.
• Du ska spara några recept (document i en collection) med insertMany().
• Du ska ha CRUD-funktionalitet:

- CREATE insertOne() (som lägger till ett nytt recept)
- Read find() (som visar alla recept)
- UPDATE updateOne() (som uppdaterar ett recept)
- DELETE deleteOne() (som tar bort ett specifikt recept)
  • Du ska kunna räkna hur många recept som finns totalt med .countDocuments()

#### Krav för VG

Utöver kraven för G:
• Du ska kunna söka på något specifikt för ett recept t ex kategori.
• Du ska göra så att man kan göra ett recept till en favorit.
För att göra det behöver du visa detta i koden:

1. Uppdatera så att alla recept får relevant key:value för att sedan kunna spara ett recept
   som en favorit.
2. Skriva kod så att minst ett specifikt recept nu blir som en favorit.
3. Räkna alla recept som är markerade som en favorit.
4. Visa alla recept som är markerade som en favorit.
   Litteratur
   Kurskompendiet, powerpoints och kodexempel från föreläsningarna.
