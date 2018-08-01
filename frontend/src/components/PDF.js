import React, { Component, Fragment } from "react";
import jsPDF from "jspdf";

let he = require("he");

class Pdf extends Component {
  printDocument() {
    var x = window.open();
    const input = document.getElementById("divToPrint");
    const pdf = new jsPDF();
    pdf.fromHTML(input);
    var string = pdf.output("dataurlstring");

    var iframe =
      "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
    x.document.open();
    x.document.write(iframe);
    x.document.close();
  }
  printBlanks() {
    // var x = window.open();
    const input = document.getElementById("divToPrint");
    const rDivs = input.childNotes.length;
    console.log("RDIVS", rDivs);
    // const pdf = new jsPDF();
    // pdf.fromHTML(input);
    // var string = pdf.output("dataurlstring");

    // var iframe =
    //   "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
    // x.document.open();
    // x.document.write(iframe);
    // x.document.close();
  }

  render() {
    return (
      <div>
        <button onClick={this.printDocument}>Print</button>
        <button onClick={this.printBlank}>Print Blanks</button>
      </div>
    );
  }
}

export default Pdf;
