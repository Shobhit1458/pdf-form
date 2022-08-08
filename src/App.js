import "./App.css";
import React from "react";
import { useState } from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";


const App = () => {
  const [formData, setformData] = useState({
    placeAddress:"",
    propertyOwnerName: "",
    OwnerGender: "MR",
    propertyByOwner: "",
    byOwnerGender: "S/O",
    propertyAddress: "",
    ownerAddress:"",
    tenOneName: "",
    tenOneParent: "",
    tenTwoName: "",
    tenTwoParent: "",
    tenThreeName: "",
    tenThreeParent: "",
    tenFourName: "",
    tenFourParent: "",
    tenOneAddress: "",
    tenTwoAddress: "",
    tenThreeAddress: "",
    tenFourAddress: "",
    tenOneGender: "S/O",
    tenTwoGender: "S/O",
    tenThreeGender: "S/O",
    tenFourGender: "S/O",
    witness1: "",
    witness2: "",
    shiftingDate: "",
    rentEnd: "",
    rent: "",
    security: "",
    ten1gender: "MR",
    ten2gender: "MR",
    ten3gender: "MR",
    ten4gender: "MR",
    thingsGiven: [{ entity: "", units: "" }],
  });

  // let c = 0;

  const handleThingChange = (i, str, val) => {
    setformData((formData) => {
      const thingsGiven = [...formData.thingsGiven];
      thingsGiven[i] = { ...thingsGiven[i], [str]: val };
      if (i === thingsGiven.length - 1) {
        // c++;
        thingsGiven.push({ entity: "", units: "" });
      }
      return { ...formData, thingsGiven };
    });
  };

  const handleThingDelete = (i) => {
    setformData((formData) => {
      const thingsGiven = [...formData.thingsGiven];
      thingsGiven.splice(i, 1);
      return { ...formData, thingsGiven };
    });
  };

  

  async function storeInCloud(blob) {
    var formData = new FormData();
    console.log(blob);
    const url = "https://api.cloudinary.com/v1_1/shobhit1402/image/upload";
    let file = blob;
    formData.append("file", file);
    formData.append("public_id", `RentAgreement`);
    formData.append("upload_preset", "RentPdf");
    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    let data = await response.json();
    console.log(data.url);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="form-hide">
        <h1>Rent Agreement</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setformData({
              placeAddress:"",
              propertyOwnerName: "",
              OwnerGender: "MR",
              propertyByOwner: "",
              byOwnerGender: "S/O",
              propertyAddress: "",
              ownerAddress:"",
              tenOneName: "",
              tenOneParent: "",
              tenRelation: "",
              tenTwoName: "",
              tenTwoParent: "",
              tenThreeName: "",
              tenThreeParent: "",
              tenFourName: "",
              tenFourParent: "",
              tenOneAddress: "",
              tenTwoAddress: "",
              tenThreeAddress: "",
              tenFourAddress: "",
              tenOneGender: "S/O",
              tenTwoGender: "S/O",
              tenThreeGender: "S/O",
              tenFourGender: "S/O",
              witness1: "",
              witness2: "",
              shiftingDate: "",
              rentEnd: "",
              rent: "",
              security: "",
              ten1gender: "MR",
              ten2gender: "MR",
              ten3gender: "MR",
              ten4gender: "MR",
              // clauses: "",
            });
          }}
        >
          <label htmlFor="html"> Place at which the rent agreement is executed : </label>
          <input
            type="text"
            placeholder="District,State"
            onChange={(e) => {
              setformData({ ...formData, placeAddress: e.target.value });
            }}
            value={formData.rentEnd}
            required
          />{" "}
          <br />
          <select
            name="gender"
            id="gender"
            value={formData.OwnerGender}
            onChange={(e) => {
              setformData({ ...formData, placeAddress: e.target.value });
            }}
          >
            <option value="MR">MR</option>
            <option value="MRS">MRS</option>
          </select>
          <input
            type="text"
            placeholder="Property Owner Name"
            onChange={(e) => {
              setformData({ ...formData, propertyOwnerName: e.target.value });
            }}
            value={formData.propertyOwnerName}
            required
          />{" "}
          <select
            name="gender"
            id="gender"
            value={formData.byOwnerGender}
            onChange={(e) => {
              setformData({ ...formData, byOwnerGender: e.target.value });
            }}
          >
            <option value="S/O">S/O</option>
            <option value="W/O">W/O</option>
          </select>
          <input
            type="text"
            // placeholder="W/O"
            onChange={(e) => {
              setformData({ ...formData, propertyByOwner: e.target.value });
            }}
            value={formData.propertyByOwner}
            required
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Property Address"
            onChange={(e) => {
              setformData({ ...formData, propertyAddress: e.target.value });
            }}
            value={formData.propertyAddress}
            required
          />{" "}
          <input
            type="text"
            placeholder="Owner Address"
            onChange={(e) => {
              setformData({ ...formData, ownerAddress: e.target.value });
            }}
            value={formData.ownerAddress}
            required
          />{" "}
          <br />
          <select
            name="gender"
            id="gender"
            value={formData.ten1gender}
            onChange={(e) => {
              setformData({ ...formData, ten1gender: e.target.value });
            }}
          >
            <option value="MR">MR</option>
            <option value="MS">MS</option>
          </select>
          <input
            type="text"
            placeholder="Tenant 1 Name"
            onChange={(e) => {
              setformData({ ...formData, tenOneName: e.target.value });
            }}
            value={formData.tenOneName}
            required
          />{" "}
          <select
            name="gender"
            id="gender"
            value={formData.tenOneGender}
            onChange={(e) => {
              setformData({ ...formData, tenOneGender: e.target.value });
            }}
          >
            <option value="S/O">S/O</option>
            <option value="D/O">D/O</option>
          </select>
          <input
            type="text"
            // placeholder="W/O"
            onChange={(e) => {
              setformData({ ...formData, tenOneParent: e.target.value });
            }}
            value={formData.tenOneParent}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Tenant 1 Address"
            onChange={(e) => {
              setformData({ ...formData, tenOneAddress: e.target.value });
            }}
            value={formData.tenOneAddress}
            required
          />{" "}
          <br />
          <select
            name="gender"
            id="gender"
            value={formData.ten2gender}
            onChange={(e) => {
              setformData({ ...formData, ten2gender: e.target.value });
            }}
          >
            <option value="MR">MR</option>
            <option value="MS">MS</option>
          </select>
          <input
            type="text"
            placeholder="Tenant 2 Name"
            onChange={(e) => {
              setformData({ ...formData, tenTwoName: e.target.value });
            }}
            value={formData.tenTwoName}
          />{" "}
          <select
            name="gender"
            id="gender"
            value={formData.tenTwoGender}
            onChange={(e) => {
              setformData({ ...formData, tenTwoGender: e.target.value });
            }}
          >
            <option value="S/O">S/O</option>
            <option value="D/O">D/O</option>
          </select>
          <input
            type="text"
            // placeholder="W/O"
            onChange={(e) => {
              setformData({ ...formData, tenTwoParent: e.target.value });
            }}
            value={formData.tenTwoParent}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Tenant 2 Address"
            onChange={(e) => {
              setformData({ ...formData, tenTwoAddress: e.target.value });
            }}
            value={formData.tenTwoAddress}
          />{" "}
          <br />
          <select
            name="gender"
            id="gender"
            value={formData.ten3gender}
            onChange={(e) => {
              setformData({ ...formData, ten3gender: e.target.value });
            }}
          >
            <option value="MR">MR</option>
            <option value="MS">MS</option>
          </select>
          <input
            type="text"
            placeholder="Tenant 3 Name"
            onChange={(e) => {
              setformData({ ...formData, tenThreeName: e.target.value });
            }}
            value={formData.tenThreeName}
          />{" "}
          <select
            name="gender"
            id="gender"
            value={formData.tenThreeGender}
            onChange={(e) => {
              setformData({ ...formData, tenThreeGender: e.target.value });
            }}
          >
            <option value="S/O">S/O</option>
            <option value="D/O">D/O</option>
          </select>
          <input
            type="text"
            // placeholder="W/O"
            onChange={(e) => {
              setformData({ ...formData, tenThreeParent: e.target.value });
            }}
            value={formData.tenThreeParent}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Tenant 3 Address"
            onChange={(e) => {
              setformData({ ...formData, tenThreeAddress: e.target.value });
            }}
            value={formData.tenThreeAddress}
          />{" "}
          <br />
          <select
            name="gender"
            id="gender"
            value={formData.ten4gender}
            onChange={(e) => {
              setformData({ ...formData, ten4gender: e.target.value });
            }}
          >
            <option value="MR">MR</option>
            <option value="MS">MS</option>
          </select>
          <input
            type="text"
            placeholder="Tenant 4 Name"
            onChange={(e) => {
              setformData({ ...formData, tenFourName: e.target.value });
            }}
            value={formData.tenFourName}
          />{" "}
          <select
            name="gender"
            id="gender"
            value={formData.tenFourGender}
            onChange={(e) => {
              setformData({ ...formData, tenFourGender: e.target.value });
            }}
          >
            <option value="S/O">S/O</option>
            <option value="D/O">D/O</option>
          </select>
          <input
            type="text"
            onChange={(e) => {
              setformData({ ...formData, tenFourParent: e.target.value });
            }}
            value={formData.tenFourParent}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Tenant 4 Address"
            onChange={(e) => {
              setformData({ ...formData, tenFourAddress: e.target.value });
            }}
            value={formData.tenFourAddress}
          />{" "}
          <br />
          <label htmlFor="html">Shifting Date</label>
          <input
            type="date"
            placeholder="Shifting Date"
            onChange={(e) => {
              setformData({ ...formData, shiftingDate: e.target.value });
            }}
            value={formData.shiftingDate}
            required
          />{" "}
          <br />
          <label htmlFor="html"> Date when the tenant vacate the property : </label>
          <input
            type="date"
            placeholder="Rent End"
            onChange={(e) => {
              setformData({ ...formData, rentEnd: e.target.value });
            }}
            value={formData.rentEnd}
            required
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Rent"
            onChange={(e) => {
              setformData({ ...formData, rent: e.target.value });
            }}
            value={formData.rent}
            required
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Security"
            onChange={(e) => {
              setformData({ ...formData, security: e.target.value });
            }}
            value={formData.security}
            required
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Witness 1"
            onChange={(e) => {
              setformData({ ...formData, witness1: e.target.value });
            }}
            value={formData.witness1}
            required
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Witness 2"
            onChange={(e) => {
              setformData({ ...formData, witness2: e.target.value });
            }}
            value={formData.witness2}
            required
          />{" "}
          <br />
          
          <br />
          <label htmlFor="html">Items/Facilities provided to the tenant : </label>
          {formData.thingsGiven.map((thing, i) => (
            <div key={i}>
              <div key={i}>
                {i !== formData.thingsGiven.length - 1 && (
                  <button onClick={() => handleThingDelete(i)}>X</button>
                )}
                <input
                  type="text"
                  placeholder="Enter the entity"
                  value={thing.entity}
                  onChange={(e) =>
                    handleThingChange(i, "entity", e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Enter the no. of units"
                  value={thing.units}
                  onChange={(e) =>
                    handleThingChange(i, "units", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </form>
      </div>

      <PDFDownloadLink
        document={
            <PDFFile formData={formData} />
        }
        fileName="FORM"
      >
        <button type="submit">Download</button>
      </PDFDownloadLink>
      <BlobProvider
        document={
            <PDFFile formData={formData} />
        }
        fileName="FORM"
      >
        {({ blob, url, loading, error }) => {
          return (
            <button onClick={() => storeInCloud(blob)}>
              Save in Cloudinary
            </button>
          );
        }}
      </BlobProvider>
    </div>
  );
};

export default App;
