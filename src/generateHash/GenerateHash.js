import { useState } from "react";
import "./GenerateHash.css";
import CryptoJS from "crypto-js";

const GenerateHash = () => {
  const [publicKey, setPublicKey] = useState("");
  const [cid, setCid] = useState("");
  const [hash, setHash] = useState("");

  const generate_hash = (e) => {
    const cipherString = CryptoJS.AES.encrypt(
      cid.toString(),
      publicKey.toString()
    ).toString();
    const bytes = CryptoJS.AES.decrypt(cipherString, publicKey.toString());
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);

    setHash(cipherString);
  };

  return (
    <div className="main_container">
      <div className="box">
        <h1 className="hash_headline">Generate Hash</h1>
        <form
          className="address"
          onSubmit={(e) => {
            generate_hash(e);
            e.preventDefault();
          }}
        >
          <input
            className="address_input"
            type="text"
            placeholder="Enter Public Key"
            name="publicKey"
            required
            onChange={(e) => setPublicKey(e.target.value)}
          ></input>
          <input
            className="address_input"
            type="text"
            placeholder="Enter Content ID"
            name="cid"
            required
            onChange={(e) => setCid(e.target.value)}
          ></input>
          <input type="submit" value="Generate Hash" className="hash_btn" />
        </form>
        <div className="hash">{hash}</div>
      </div>
    </div>
  );
};

export default GenerateHash;
