import React from 'react'
// import FedEx_Freight from './images/FedEx_Freight.png';
 import FedEx_Freight from './FedEx_Freight.png';
const Table = () => {
  return (
    <>
      <table>
  <tr>
    <td className="top-strip">
      <b>UNIFORM STRAIGHT BILL OF LADING ORIGINAL---NOT NEGOTIABLE</b>
      <br />
      ALL SERVICES SUBJECT TO THE TERMS AND CONDITIONS OF THE FXF 100 SERIES RULES TARIFF. SEE FEDEX.COM FOR DETAILS. --- QUESTIONS? CALL 1.866.393.4585
    </td>
  </tr>
</table>
<table style={{border: "1px solid #482e92", width: "100%", padding: "0px", borderSpacing: "none"}} cellSpacing="0" cellPadding="0">
  <tr>
    <td rowspan="2" className="fedex-logo"><img src={FedEx_Freight}/></td>
    <td className="date-div"><b>Date</b><br/><input type="text" style={{width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px"}}/></td>
    <td className="date-div"><b>Purchase Order# </b><br/><input type="text" style={{width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px"}}/></td>
  </tr>
  <tr>
  <td className="date-div second-date">
    <b>Shipper #</b><br />
    <input type="text" style={{ width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px" }} />
  </td>
  <td className="date-div">
    <b>Shipper #</b><br />
    <input type="text" style={{ width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px" }} />
  </td>
</tr>
<tr>
  <td></td>
  <td className="required-service">
    <b>REQUIRED: Please select a service type</b><br />
    <label>
      <input type="checkbox" />
      FedEx Freight® Priority
    </label>
    <br />
    <label>
      <input type="checkbox" />
      FedEx Freight® Economy
    </label>
  </td>
  <td className="required-service">
    <b>OPTIONAL: You may select a money-back guarantee<br />delivery (charges and tariff limitations may apply).</b><br />
    <label style={{marginTop: '15px', display: 'inline-block'}}>
      <input type="checkbox" />
      A.M. Delivery
    </label>
    <label style={{paddingLeft: '20px', marginTop: '10px', display: 'inline-block'}}>
      <input type="checkbox" />
      Close of Business Delivery
    </label>
  </td>
</tr>


</table>

    </>

    
  )
}

export default Table
