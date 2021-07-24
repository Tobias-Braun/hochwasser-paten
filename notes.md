## IDEE:

So gehts:

1. Betroffene posten ihr Patengesucht auf der Seite

2. Helfende können sich als Paten anbieten und mit den Betroffenen in Kontakt treten

3. Betroffene nehmen das Angebot an

4. Ihr könnt euch mithilfe des Kalenders sowie WhatsApp / sozialen Netzwerken absprechen und vor Ort was erreichen

## Datenstruktur

### POST (Hilfegesuch):

1. title (text)
2. ort (text)
2. poster (profile_id)
3. image (image_id)
4. description (text)


### OFFER (Patenangebot)

1. offerer (profile_id)
2. description (text)
3. contact_info (contact_info)

### PATEGROUP (Patengruppe)

1. helpee (profile_id)
2. pates (list(profile_id))
3. calendar (calendar)

### PROFILE (Profil)

1. id
2. Vorname
3. Nachname
4. Profilbild (image_id)
5. Beschreibung (text)
6. 

CALENDAR (Kalender)

TBD

### CONTACT_INFO (Kontaktinformation)

1. Straße + Hausnr.
2. PLZ
3. Ortsname
4. Telefonnummer
5. sonstiges


## SEITEN:

Homepage (Erklärung, wie es geht, verlinkung zu den posts und zur registrierung / einloggen)
Login (einloggen)
Registrieren (registrieren)
Post page (grid wo alle posts aufgereiht sind)
create post page (fenster zum erstellen von posts)
create offer page (fenster zum erstellen von offers)
your offers page (fenster zum ansehen und annehmen von offers)
your pate groups (fenster zum browsen von patengruppen)
patengruppe (patengruppe, ansehen von mitgliedern, kalender ?, einsehen von Kontaktinformationen)