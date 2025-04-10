/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { downloadCSV } from "../../../lib/helpers";
import { usePhoneData } from "../../../lib/hooks";
import { PHONE_DATA_TYPE } from "../../../lib/hooks/usePhoneData";
import { TextField } from "../../atom";
import style from "./style.module.scss";

const PhoneNumberDisplay = () => {
  const { phoneDataList } = usePhoneData();
  const [nameOfCSVFile, setNameOfCSVFile] = useState("contact-info");
  const handleCopyToClipBoard = (phoneNumber: string) => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy phone number: ", err);
      });
  };
  const handleCopyToClipBoardAllPhoneNumber = () => {
    let phoneCopyData = "";
    phoneDataList.forEach((phoneData: PHONE_DATA_TYPE) => {
      phoneCopyData += phoneData.number + ", ";
    });

    navigator.clipboard
      .writeText(phoneCopyData)
      .then(() => {
        alert("Copy all phone number");
      })
      .catch(() => {
        alert("Failed to copy all phone number");
      });
  };
  return (
    <div className={`${phoneDataList.length == 0 ? "d-none" : ""} p-2 text-center pt-5`}>
      <h2 className="fw-bold"> 📞 List of all numbers 📞 </h2>
      <div className="d-flex gap-3 flex-wrap">
        {phoneDataList.map((phoneData: PHONE_DATA_TYPE, keyIndex: number) => (
          <div
            className={`my-3 border shadow p-3 ${style["result-card"]} d-flex justify-content-between align-items-start w-100`}
          >
            <div className="text-start">
              <p className="fw-bold">S.NO: {keyIndex + 1}</p>
              <p>Country: {phoneData.country}</p>
              <p>Country Code: {phoneData.countryCallingCode}</p>
              <p>
                National Number:{" "}
                <a href={`tel:${phoneData.nationalNumber}`}>
                  {phoneData.nationalNumber}
                </a>
              </p>
              <p>
                Phone Number:{" "}
                <a href={`tel:${phoneData.number}`}>{phoneData.number}</a>
              </p>
              <p>Text Number Start At: {phoneData.startsAt}</p>
              <p>Text Number Ends At: {phoneData.startsAt}</p>
            </div>
            <button
              className="btn btn-transparent"
              onClick={() => handleCopyToClipBoard(phoneData.number)}
            >
              <img
                src="./copy-to-clipboard.png"
                alt="Copy to clipboard"
                width={20}
                height={20}
              />
            </button>
          </div>
        ))}
      </div>
      <div
        className={`my-3 border shadow p-3 ${style["result-card"]} d-flex justify-content-between align-items-start w-100`}
      >
        <p>Copy all number to clipboard </p>
        <button
          className="btn btn-transparent"
          onClick={() => handleCopyToClipBoardAllPhoneNumber()}
        >
          <img
            src="./copy-to-clipboard.png"
            alt="Copy to clipboard"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div
        className={`my-3 border shadow p-3 ${style["result-card"]} w-100`}
      >
        <p>Download CSV File: </p>
        <TextField
          label=""
          placeholder="Add name of CSV file"
          className=""
          type="text"
          value={nameOfCSVFile}
          onTextFieldChange={(e:any) => setNameOfCSVFile(e.target.value)}
        />
        <button className="btn btn-transparent text-dark" onClick={() => downloadCSV(phoneDataList,nameOfCSVFile)}>Download CSV</button>
      </div>
    </div>
  );
};
export default PhoneNumberDisplay;
