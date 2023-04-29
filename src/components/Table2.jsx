import React from 'react'

const Table2 = () => {
  return (
    <>
    <table className="blue-table-color">
      <tr>
        <td className="table-half-50">SHIPPER (from) Please provide ZIP codes and phone numbers</td>
        <td className="table-half-50">CONSIGNEE (to)</td>
      </tr>
    </table>
    <table className="table-full" cellspacing="0" cellpadding="0">
      <tr>
        <td className="width-30"><span>Shipper</span><br /><input type="text" style={{ width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px" }} /></td>
        <td className="width-20"><span>FXF Acct. #</span><br /><input type="text" style={{ width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px" }} /></td>
        <td className="width-30"><span>Consignee</span><br /><input type="text" style={{ width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px" }} /></td>
        <td className="width-20"><span>FXF Acct. #</span><br /><input type="text" style={{ width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px" }} /></td>
      </tr>
    </table>
  </>
  )
}

export default Table2
