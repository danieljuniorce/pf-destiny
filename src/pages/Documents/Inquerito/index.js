import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import { Container } from "./styled";

function Inquerito(props) {
  return (
    <Document>
      <Container>{props.match.params.number}</Container>
    </Document>
  );
}

export default Inquerito;
