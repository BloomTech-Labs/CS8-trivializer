import React, { Component } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// class PdfTest extends Component {
//   onPrint = () => {
//     var pdfConverter = require("jspdf");
//     //var converter = new pdfConverter();
//     //var doc = converter.jsPDF('p', 'pt');

//     var doc = new pdfConverter("p", "pt", "c6");

//     doc.setFontSize(22);
//     doc.text(20, 50, "Park Entry Ticket");
//     doc.save("test.pdf");
//   };
// }


export default class Export extends Component {
    constructor(props) {
      super(props);
    }
    printDocument() {
      const input = document.getElementById('divToPrint');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'JPEG', 0, 0);
          pdf.output('dataurlnewwindow');
          // pdf.save("download.pdf");
        })
      ;
    }
  
    render() {
      return (<div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div id="divToPrint" className="mt4">
          <div>Note: Here the dimensions of div are same as A4</div> 
          <div>You Can add any component here</div>
        </div>
      </div>);
    }
  }
