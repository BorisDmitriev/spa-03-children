# Zählende Kinder
[![Statusübersicht Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)


Dies ist eine Vorlage von einer Online-Seite.
Du kannst die darin enthaltenen Dateien gerne erforschen, aber das ist absolut nicht notwendig, um diese Übung zu absolvieren.
Du musst nur deine eigene JavaScript-Datei erstellen und sicherstellen, dass sie in der Datei `index.html` enthalten ist.

Du kannst Visual Code Live Server verwenden, um das Projekt auszuführen.

## 1.
* Erfasse die Kinder und die Anzahl der Kinder des Elements mit der ID `wrapper` und gib sie als Liste auf der Konsole aus.
        Dein `console.log()` erhält zwei Argumente das erste Argument ist __*children elements*__ das zweite Argument ist __*children element count*__

* Iteriere über diese Elemente und gib die Anzahl der Kinder und die Länge der Kinder in der Konsole aus.
        Dein `console.log()` erhält zwei Argumente erstes Argument ist __*children elements*__ das zweite Argument ist __*children element length*__ .

Hinweis: Wir wollen diese Operation nicht rekursiv durchführen, sondern nur für die Kinder des Wrappers und seine Kinder.

Hinweis: Es gibt 2 Möglichkeiten, die Anzahl der Kinder zu drucken - probiere beide aus.

## 2.

* Als Nächstes müssen wir herausfinden, welches der Kinder des Elements mit der id `wrapper` die höchste Anzahl von Klassen hat.

    Wenn zum Beispiel ein Element 2 Klassen und ein anderes 3 Klassen hat, hat das Element mit den 3 Klassen die höchste Anzahl an Klassen.

    Schreiben wir eine Funktion, die ein Objekt zurückgibt, das das Element mit den meisten Klassen und die Gesamtzahl der Klassen enthält.

[//]: # (autograding info start)
## Ergebnisse


### Aufgabe1: Kinderliste prüfen

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Sollte Kinderliste von Element `wrapper` ausgeben. |

### Aufgabe2: Überprüfe die Anzahl der Kinder

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Sollte die Anzahl der Kinder des Elements `wrapper` drucken. |

### Aufgabe 3: Iterieren von print über die Kinder von "wrapper".

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Sollte print Element mit id `wrapper` Kinder und Kinder Länge sowie wie viele sie sind Iterieren. |

### Aufgabe4: Finde das Kind des Elements mit der id `wrapper`, das die höchste Anzahl von Klassen hat.

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Sollte das Element mit der höchsten Anzahl von Klassen und die Gesamtzahl der Klassen ausgeben. |



[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/Browser-DOM-traversing-children-count/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-DOM-traversing-children-count&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FBrowser-DOM-traversing-children-count)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/Browser-DOM-traversing-children-count/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
