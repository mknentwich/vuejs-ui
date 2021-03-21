<template>
  <div class="terms">
    <v-row class="justify-center align-center">
      <v-col cols="auto" class="hidden-xs-only">
        <v-img
          :src="require('@/assets/nentwichVerlag_logos_color.svg')"
          height="90"
          width="200"
          contain
        ></v-img>
      </v-col>
      <v-col cols="auto" class="text-center mb-3">
        <h1 class="text-h4 font-weight-bold primary--text">Allgemeine Geschäftsbedigungen</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-expansion-panels accordion focusable class="mb-3">
        <v-expansion-panel
          v-for="(item,i) in terms"
          :key="i"
          
        >
          <v-expansion-panel-header class="font-weight-bold primary--text text-h6">{{ item.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="text-body-1">
            <div class="pa-6" v-html="item.body">
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: 'Terms',
    data: () => ({
      terms: [
        {
          title: 'Vertragspartner',
          body: `
          <p>Auf Grundlage dieser Allgemeinen Geschäftsbedingungen (AGB) kommt zwischen dem Kunden und </p>
          <p>
            Markus Nentwich - Komponist und Musiker <br>
            <b>Vertreten durch</b>: Markus Nentwich <br>
            <b>Adresse</b>: Vereinsgasse 25/14, A-1020 Wien, Österreich <br>
            nachfolgend “Anbieter” genannt, der Vertrag zustande.
          </p>
          `        
        },
        {
          title: 'Vertragsgegenstand',
          body: `
          <p>Durch diesen Vertrag wird der Verkauf von Notenmaterial (Originalnoten) über das Shop-System auf der Seite <b>Noten</b> des Anbieters geregelt. Wegen der Details des jeweiligen Angebotes wird auf die Produktbeschreibung der Angebotsseiten verwiesen.</p>
          `        
        },
        {
          title: 'Vertragsschluss',
          body: `
          <p>Der Vertrag kommt ausschließlich im elektronischen Geschäftsverkehr über das Shop-System zustande. Der Bestellvorgang zum Vertragsschluss umfasst im Shop-System folgende Schritte:</p>

          <ol class="arabic">
          <li>
          <p>Auswahl der Noten (Menüpunkt <b class="menuref">Notenshop</b>)</p>
          </li>
          <li>
          <p>Eingabe der Rechnungs- und Lieferadresse</p>
          </li>
          <li>
          <p>Bestätigung der AGB</p>
          </li>
          <li>
          <p>Betätigen des Buttons “Kostenpflichtig Bestellen”</p>
          </li>
          <li>
          <p>Eine automatisch generierte Bestätigungsmail wird an den Käufer versandt</p>
          </li>
          <li>
          <p>Mit der Zusendung der Bestellbestätigung kommt der Vertrag zustande</p>
          </li>
          </ol>
          `        
        },
        {
          title: 'Preise, Versandkosten, Rücksendekosten',
          body: `
          <p>
            Alle Preise sind Endpreise und enthalten die gesetzliche Umsatzsteuer.
            Pro Bestellung fallen einmalig folgende Versandkostenpauschalen an: 
          </p>
          <p>
            <ol>
              <li>
                Österreich (Inland): 3,00 €
              </li>
              <li>
                EU-Ausland: 7,00 €
              </li>
              <li>
                Nicht-EU-Land: höher
              </li>
            </ol>
          </p>
          <p>
            Bei Teillieferungen fällt die Pauschale jeweils nur einmal an. Ab einem Bestellwert von brutto 99,00 € fallen keine Versandkosten an.
          </p>
          `        
        },
        {
          title: 'Zahlungs- und Lieferbedingungen',
          body: `
          <p>
            Der Kunde hat ausschließlich folgende Möglichkeit zur Zahlung: Rechnung bei Lieferung (mit beigelegtem Zahlschein).
            Weitere Zahlungsarten werden nicht angeboten und werden zurückgewiesen.
            Der Kunde ist verpflichtet, innerhalb von 14 Tagen nach Erhalt der Bestellung den ausgewiesenen Betrag ohne Abzug auf das auf der Rechnung angegebene Konto zu überweisen.
            Bei Zahlungsverzug erhält der Kunde eine Mahnung und es werden die üblichen Mahnspesen und Verzugszinsen draufgeschlagen.
            Gegebenenfalls (z.B. bei hohen Bestellbeträgen) behält sich Markus Nentwich eine Zahlung per Vorauskasse vor.
          </p>
          <p>
            Die Ware wird schnellstmöglich nach Eingang der Bestellung versandt.
            Die Regellieferzeit beträgt ca. 3 – 7 Werktage.
            Der Anbieter versendet die Bestellung aus eigenem Lager.
            Da die Bestellungen ausschließlich vom eigenen Team bearbeitet werden, kann es unter Umständen zu Lieferverzögerungen kommen (z.B. im Krankheitsfall, wenn Markus Nentwich gerade für längere Zeit auf Tour oder auf Urlaub ist, etc).
            Sollte diese Verzögerung länger als eine Woche in Anspruch nehmen, erhalten Sie eine zusätzliche Information per E-Mail.
          </p>
          `        
        },
        {
          title: 'Widerrufsrecht',
          body: `
          <p>
            Ein Widerruf der bestellten Noten ist ausgeschlossen. Originalnoten werden aufgrund des Kopierschutzes weder zurückgenommen, noch umgetauscht.
          </p>
          `        
        },
        {
          title: 'Eigentumsvorbehalt',
          body: `
          <p>
            Bis zur vollständigen Bezahlung bleibt die gelieferte Ware Eigentum von Markus Nentwich.
            Sie haben die Ware bis dahin pfleglich zu behandeln und Schäden unverzüglich anzuzeigen.
            Bei Zahlungsverzug ist Markus Nentwich berechtigt, vom Vertrag zurückzutreten und die Ware zurückzuverlangen.
            Die Kosten der Rücksendung im Verzugsfall (nach Ablauf der Widerrufsfrist) gehen zu Ihren Lasten und müssen erstattet werden, wenn Sie sie nicht selbst getragen haben.
          </p>
          `        
        },
        {
          title: 'Datenschutz',
          body: `
          <p>
            Für Markus Nentwich ist es sehr wichtig, Sie zufrieden zu stellen und Ihre Privatsphäre zu schützen. Wir speichern nur alle für die Ausführung der Bestellung notwendigen Informationen. Da Sie grundsätzlich auf offene Rechnung bestellen, müssen Sie also keine sensiblen Zahlungsinformationen über das Internet übermitteln. Markus Nentwich gibt Ihre persönlichen Daten selbstverständlich nicht an Dritte weiter.
          </p>
          <p>
            Bitte beachten Sie auch die Datenschutzerklärung.
          </p>
          `        
        },
        {
          title: 'Haftung',
          body: `
          <p>
            Diese Website wurde mit größtmöglicher Sorgfalt zusammengestellt. Trotzdem kann keine Gewähr für die Fehlerfreiheit und Genauigkeit der enthaltenen Informationen übernommen werden. Jegliche Haftung für Schäden, die direkt oder indirekt aus der Benutzung dieser Website entstehen, wird ausgeschlossen, soweit diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.
          </p>
          <p>
            Sofern von dieser Website auf Internetseiten verwiesen wird, die von Dritten betreiben werden, übernimmt Markus Nentwich keine Verantwortung für deren Inhalte.
          </p>
          `        
        },
        {
          title: 'Gerichtsstand',
          body: `
          <p>
            Es gilt österreichisches Recht. Für Streitigkeiten mit Verbrauchern gilt der gesetzliche Gerichtsstand, soweit diese einen allgemeinen Gerichtsstand in Österreich haben. Im übrigen ist bei Streitigkeiten mit Verbrauchern, die keinen allgemeinen Gerichtsstand in Österreich haben, der Gerichtsstand der Sitz des Anbieters. Bei Streitigkeiten aus Rechtsgeschäften mit Kaufleuten, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen gilt ebenfalls der Sitz des Anbieters als Gerichtsstand.
          </p>
          `        
        },
      ]
    }),
  }
</script>