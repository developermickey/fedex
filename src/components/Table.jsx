import React from 'react'
// import FedEx_Freight from './images/FedEx_Freight.png';
 import FedEx_Freight from './FedEx_Freight.png';
const Table = () => {
  return (
    
     
    <>
      <table>
        <tr>
          <td className="top-strip"><b>UNIFORM STRAIGHT BILL OF LADING ORIGINAL---NOT NEGOTIABLE</b><br />ALL SERVICES SUBJECT TO THE TERMS AND CONDITIONS OF THE FXF 100 SERIES RULES TARIFF. SEE FEDEX.COM FOR DETAILS. --- QUESTIONS? CALL 1.866.393.4585</td>
        </tr>
      </table>
      <table className="main-table">
        <tr>
          <td rowSpan="2" className="fedex-logo"><img src={FedEx_Freight} /></td>
          <td className="date-div"><b>Date</b><br /><input type="text" className="input-box" /></td>
          <td className="date-div"><b>Purchase Order# </b><br /><input type="text" className="input-box" /></td>
        </tr>
        <tr>
          <td className="date-div second-date"><b>Shipper #</b><br /><input type="text" className="input-box" /></td>
          <td className="date-div"><b>Shipper #</b><br /><input type="text" className="input-box" /></td>
        </tr>
        <tr>
          <td></td>
          <td className="required-service"><b>REQUIRED: Please select a service type</b><br /><label><input type="checkbox" />FedEx Freight® Priority</label><br /><label><input type="checkbox" />FedEx Freight® Economy</label></td>
          <td className="required-service"><b>OPTIONAL: You may select a money-back guarantee delivery (charges and tariff limitations may apply).</b><br /><label className="money-back-delivery"><input type="checkbox" />A.M. Delivery</label><label className="money-back-delivery"><input type="checkbox" />Close of Business Delivery</label></td>
        </tr>
      </table>
    </>

    
  )
}

export default Table
