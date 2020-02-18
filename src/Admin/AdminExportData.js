import React from "react";
import { Container } from "react-bootstrap";

const AdminExportData = props => (
  <div>
    <Container>
      <h1>Export Data</h1>
      <hr></hr>
      <p>
        You can export all data below as csv. EW: PENDING FEATURE, IDEA IS TO
        PULL EVERYTHING FROM ALL TABLES WITHOUT ANY FURTHER MANIPULATION USING
        THIS TOOL https://www.npmjs.com/package/json2csv
      </p>
      <button type="submit" className="btn">
        Export All
      </button>
    </Container>
  </div>
);

export default AdminExportData;
