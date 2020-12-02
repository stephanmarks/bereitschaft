import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sparten: Array<any> = [
    { id: 1012,
      titel: 'XTH Entenhausen ausf. Ber. Leitungstechnik',
      checked: false,
      sort: 0,
      new: true},
    { id: 1011,
      titel: 'XTM Automatisierungs- u. Prozeßtechnik',
      checked: false,
      sort: 0,
      new: true},
    { id: 1001,
      titel: 'XTW Leiter',
      checked: true,
      sort: 1,
      new: false},
     { id: 1002,
      titel: 'XTW übergreifende Ing. Bereitschaft',
      checked: true,
      sort: 2,
      new: false},
    { id: 1003,
      titel: 'XTW Automatisierungs- u. Prozeßtechnik',
      checked: true,
      sort: 3,
      new: false},
    { id: 1004,
      titel: 'XTW Wasserstadt Entstördienstführung',
      checked: true,
      sort: 4,
      new: false},
    { id: 1005,
      titel: 'XTW Wasserstadt ausf. Ber. Leitungstechnik',
      checked: true,
      sort: 5,
      new: false},
    { id: 1006,
      titel: 'XTN Leiter',
      checked: false,
      sort: 6,
      new: false},
    { id: 1007,
      titel: 'XTN übergreifende Ing. Bereitschaft',
      checked: false,
      sort: 7,
      new: false},
    { id: 1008,
      titel: 'XTN Automatisierungs- u. Prozeßtechnik',
      checked: false,
      sort: 8,
      new: false},
    { id: 1009,
      titel: 'XTN Waldstadt Entstördienstführung',
      checked: false,
      sort: 9,
      new: false},
    { id: 1010,
      titel: 'XTN Waldstadt ausf. Ber. Leitungstechnik',
      checked: false,
      sort: 10,
      new: false}
  ];

  bereitschaften: Array<any> = [
    {
      id: 5001,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-01T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    },
    {
      id: 5001,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    },
    {
      id: 5002,
      spartefk: 1002,
      name: "Klaus Klever",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 866911",
      tel2a: "+49 171 8727612",
      tel3a: "",
      tel1b: "+49 123 854312",
      tel2b: "+49 171 8727622",
      tel3b: "",
      mail: "klaus.klever@firma.com"
    },
    {
      id: 5003,
      spartefk: 1003,
      name: "Peter Panik",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "00:00",
      timeend: "12:00",
      tel1a: "",
      tel2a: "+49 171 7727621",
      tel3a: "+49 176 72345131",
      tel1b: "+49 123 754312",
      tel2b: "",
      tel3b: "",
      mail: "peter.panik@firma.com"
    },
    {
      id: 5004,
      spartefk: 1003,
      name: "Rüdiger Ruhig",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "12:00",
      timeend: "24:00",
      tel1a: "",
      tel2a: "+49 171 5727621",
      tel3a: "+49 176 52345131",
      tel1b: "+49 123 554312",
      tel2b: "+49 176 52345122",
      tel3b: "",
      mail: "ruediger.ruhig@firma.com"
    },
    {
      id: 5005,
      spartefk: 1004,
      name: "Ludger Langsam",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 666911",
      tel2a: "+49 171 6727621",
      tel3a: "",
      tel1b: "+49 123 654312",
      tel2b: "+49 171 6727622",
      tel3b: "",
      mail: "ludger.langsam@firma.com"
    },
    {
      id: 5006,
      spartefk: 1005,
      name: "Waldemar Willig",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "00:00",
      timeend: "10:00",
      tel1a: "+49 123 266911",
      tel2a: "+49 171 2727621",
      tel3a: "",
      tel1b: "+49 123 254312",
      tel2b: "+49 171 2727622",
      tel3b: "+49 176 2234532",
      mail: "waldemar.willig@firma.com"
    },
    {
      id: 5007,
      spartefk: 1005,
      name: "Ludger Lustig",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "10:00",
      timeend: "14:00",
      tel1a: "+49 123 166911",
      tel2a: "+49 171 1727621",
      tel3a: "",
      tel1b: "+49 123 154312",
      tel2b: "+49 171 1727622",
      tel3b: "",
      mail: "waldemar.willig@firma.com"
    },
    {
      id: 5008,
      spartefk: 1005,
      name: "Waldemar Willig",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "14:00",
      timeend: "16:15",
      tel1a: "",
      tel2a: "+49 171 2727621",
      tel3a: "+49 176 2234531",
      tel1b: "",
      tel2b: "+49 171 2727622",
      tel3b: "+49 176 2234532",
      mail: "waldemar.willig@firma.com"
    },
    {
      id: 5009,
      spartefk: 1005,
      name: "Gabi Günstig",
      date: "2020-12-02T00:00:00.000Z",
      timestart: "16:15",
      timeend: "24:00",
      tel1a: "+49 123 366911",
      tel2a: "",
      tel3a: "",
      tel1b: "+49 176 3254312",
      tel2b: "",
      tel3b: "",
      mail: "gabi.guenstig@firma.com"
    },
    {
      id: 5010,
      spartefk: 1001,
      name: "Jürgen Jungingenieur",
      date: "2020-12-03T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 999 999999",
      tel2a: "",
      tel3a: "",
      tel1b: "+49 999 999999",
      tel2b: "",
      tel3b: "",
      mail: "juergen.jungingenieur@firma.com"
    },
    {
      id: 5011,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-04T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    },
    {
      id: 5011,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-05T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    },
    {
      id: 5011,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-06T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    },
    {
      id: 5011,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-07T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    },
    {
      id: 5011,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-08T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    },
    {
      id: 5011,
      spartefk: 1001,
      name: "Jürgen Jung",
      date: "2020-12-09T00:00:00.000Z",
      timestart: "00:00",
      timeend: "24:00",
      tel1a: "+49 123 966911",
      tel2a: "",
      tel3a: "+49 176 92345113",
      tel1b: "+49 123 954312",
      tel2b: "+49 171 9727622",
      tel3b: "+49 176 9234532",
      mail: "juergen.jung@firma.com"
    }
  ];

  constructor() { }

  getBereitschaften() {
    return this.bereitschaften;
  }

  getBereitschaftById(id) {
    return this.bereitschaften.filter(item => item.id === id);
  }

  getBereitschaftenBySparte(myfilter) {
    return this.bereitschaften.filter(item => myfilter.includes(item.spartefk));
    // return this.items.filter(item => !myfilter.includes(item.spartefk));
  }

  getBereitschaftenBySparteDate(myfilter, myDate) {
    const bereitschaftDate = this.bereitschaften.filter( item => item.date === myDate);
    return bereitschaftDate.filter(item => myfilter.includes(item.spartefk));
  }

  updateBereitschaften(newValues) {
    const index = this.bereitschaften.findIndex(item => item.id === newValues.id);
    this.bereitschaften[index] = newValues;
  }

  getMarkedSparten() {
    // return _.filter(this.sparten, [ 'checked', true ]);
    return this.sparten.filter( sparte => sparte.checked === true );
  }

  getSparteById(id) {
    return this.sparten.filter( sparte => sparte.id == id );
  }

  filterSparten(searchTerm) {
    return this.sparten.filter(item => {
      return item.titel.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  reorderSparte(event) {
    // console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    const draggedItem = this.sparten.splice(event.detail.from, 1)[0];
    draggedItem.new = false; // Kennzeichnen, dass Sparte benutzt wurde
    this.sparten.splice(event.detail.to, 0, draggedItem);
    // console.log(this.sparten);

    // Arraysortierung in Feld sort eintragen
    let count = 0;
    for (const sparte of this.sparten) {
      sparte.sort = count;
      this.sparten[count] = sparte;
      count++;
    }

    event.detail.complete();
  }

  updateSparte(newSparte) {
    const sparteIndex = this.sparten.findIndex(sparte => sparte.id == newSparte.id);
    newSparte.new = false; // Kennzeichnen, dass Sparte benutzt wurde
    this.sparten[sparteIndex] = newSparte;
    // console.log(this.sparten);
  }
}
