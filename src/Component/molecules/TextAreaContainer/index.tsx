/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextArea } from "../../atom";
import { usePhoneData } from "../../../lib/hooks";
import { findPhoneNumbersInText } from "libphonenumber-js";
import { useState } from "react";
import { PHONE_DATA_TYPE } from "../../../lib/hooks/usePhoneData";

const TextAreaContainer = () => {
  const [textContent, setTextContent] = useState("");
  const [demoNote, setDemoNote] = useState(false);
  const { addPhoneData, resetPhoneData } = usePhoneData();

  const handleGeneratePhoneNumbers = () => {
    const phoneDataContent = findPhoneNumbersInText(textContent);
    phoneDataContent.forEach((phoneData: any) => {
      const currentPhoneData: PHONE_DATA_TYPE = {
        country: phoneData.number.country,
        countryCallingCode: phoneData.number.countryCallingCode,
        number: phoneData.number.number,
        nationalNumber: phoneData.number.nationalNumber,
        startsAt: phoneData.startsAt,
        endsAt: phoneData.endsAt,
      };
      addPhoneData(currentPhoneData);
    });
  };

  const handleResetData = () => {
    setTextContent("");
    resetPhoneData();
  };
  return (
    <section id="widget-container" className="mb-5">
      <div>
        <TextArea
          labelClassName="form-label fw-semibold"
          outerClassName="d-flex flex-column"
          label="Enter Text"
          value={textContent}
          placeholder="Paste text with phone numbers here..."
          onTextAreaChange={(e: any) => setTextContent(e.target.value)}
          className="p-3 rounded"
          rows={15}
        />
      </div>

      <div className="my-5 d-flex gap-4 w-100 justify-content-center">
        <button
          disabled={textContent.length === 0}
          className="btn btn-primary"
          onClick={handleGeneratePhoneNumbers}
        >
          Submit
        </button>
        <button
          className="btn btn-danger"
          disabled={textContent.length === 0}
          onClick={handleResetData}
        >
          Reset
        </button>
      </div>

      <div className="mt-3 w-100 text-center">
        <button
          className="btn btn-primary border mb-3"
          onClick={() => setDemoNote(!demoNote)}
        >
          Demo String
        </button>
        {demoNote && (
          <div className="border shadow p-3 rounded bg-light">
            This week has been a whirlwind of international calls. On Monday, I
            got a follow-up from a London client at +44 20 7946 0958 regarding
            the marketing pitch. Shortly after, a supplier from Tokyo called via
            +81 3 4510 2233, confirming shipment details. Tuesday started off
            with a cheerful message from São Paulo at +55 11 93456 7821, just
            before a quick tech check with the team in Sydney through +61 2 9374
            5622. Midweek, I had an unexpected call from a Russian associate on
            +7 495 123 4567, right after touching base with a contact in Toronto
            at +1 416 555 7890. Then, just as I was heading into a meeting, I
            saw a missed call from Paris on +33 1 4020 3344. To round things
            off, my colleague in New Delhi reminded me of the deadline via +91
            98100 22345. Honestly, my phone feels more traveled than I am!
          </div>
        )}
      </div>
    </section>
  );
};

export default TextAreaContainer;
