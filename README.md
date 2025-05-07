# API för arbetslivserfarenheter
Repot innehåller källkod för ett REST API. Det hanterar olika arbetslivserfarenheter och stödjer CRUD.

## Länk
Grundlänken till API:et är https://dt207g-lab-3-2.onrender.com/experience.

## Användning
API:et tar emot GET, POST, PUT och DELETE metoder.

| Metod     | Länk           | Resultat                          |
|-----------|----------------|-----------------------------------|
| Get       | /experience    | Hämtar alla erfarenheter          |
| Get       | /experience/:id| Hämtar specifik erfarenhet        |
| Post      | /experience    | Lägger till ny erfarenhet         |
| Put       | /experience/:id| Uppdaterar existerande erfarenhet |
| Delete    | /experience/:id| Tar bort vald erfarenhet          |

För att lägga till en ny erfarenhet eller redigera en existerande, med Post eller Put, måste ett objekt med en nyckel för varje värde läggas till. ID skapas automatiskt när en ny erfarenhet läggs till.

## Svar
Vid anrop till API:et returneras objekt i JSON-format. Se exempel nedan.

```json
  {
    "_id": "681b217a69c3b6012af30a45",
    "employer": "Hälsinglands Utbildningsförbund",
    "jobtitle": "Kommunikatör",
    "location": "Bollnäs",
    "startdate": "2024-02-01T00:00:00.000Z",
    "enddate": "2024-12-30T00:00:00.000Z"
  }
```