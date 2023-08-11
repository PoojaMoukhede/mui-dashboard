import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Emport from '../../../Image/export.png';
// import '../Reports.css'


export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button onClick={(e) => exportToCSV(apiData, fileName)} className='btn btn-secondary' style={{padding:'0.5rem', marginLeft:'0.45rem'}}>
      <img alt='export' className='icon11' src={Emport}/>
    </button>
  );
};