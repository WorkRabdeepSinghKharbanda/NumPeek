/* eslint-disable @typescript-eslint/no-explicit-any */
export const downloadCSV = (csvData:any, nameofCsvFile: string = "contact-info") => {
  const csv = convertToCSV(csvData);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", nameofCsvFile + ".csv");
  link.click();
};

const convertToCSV = (data : any) => {
  const header = Object.keys(data[0]).join(",");
  const rows = data.map((row:any) => Object.values(row).join(","));
  return [header, ...rows].join("\n");
};
