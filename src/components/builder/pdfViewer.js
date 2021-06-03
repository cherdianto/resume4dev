import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import { connect } from 'react-redux'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1
  }
});

// Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>First Name :</Text>
//         <Text>Last Name :</Text>
//         <Text>Address :</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>firstname</Text>
//         <Text>lastname</Text>
//         <Text>Address</Text>
//       </View>
//     </Page>
//   </Document>
// );

const pdfViewer = (props) => (
    <div style={{ height: '100%'}}>
    <BlobProvider document={
        <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                  <Text>First Name </Text>
                  <Text>Last Name </Text>
                  <Text>Address </Text>
                  <Text>Expertise </Text>
                  <Text>Experience </Text>
                  <Text>Tech Stack </Text>
                  <Text>Bio </Text>
              </View>
              <View style={styles.section}>
                  <Text>:</Text>
                  <Text>:</Text>
                  <Text>:</Text>
                  <Text>:</Text>
                  <Text>:</Text>
                  <Text>:</Text>
                  <Text>:</Text>
              </View>
              <View style={styles.section}>
                  <Text>{props.data.firstName}</Text>
                  <Text>{props.data.lastName}</Text>
                  <Text>{props.data.address}</Text>
                  <Text>{props.data.expertise}</Text>
                  <Text>{props.data.experience}</Text>
                  <Text>{props.data.techStack}</Text>
                  <Text>{props.data.bio}</Text>
              </View>
            </Page>
        </Document>
    }>
      {({ url }) => <iframe src={url} style={{ width: '100%', height: '95%'}} /> }
    </BlobProvider>
    <PDFDownloadLink document={
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>First Name :</Text>
                    <Text>Last Name :</Text>
                    <Text>Address :</Text>
                </View>
                <View style={styles.section}>
                <Text>{props.data.firstName}</Text>
                <Text>{props.data.lastName}</Text>
                <Text>{props.data.address}</Text>
                </View>
                </Page>
            </Document>
    } 
    
    fileName="{props.data.firstName}.pdf"
    style={{
        textDecoration: "none",
        padding: "10px",
        color: "#fff",
        backgroundColor: "#0275d8",
        border: "none",
        borderRadius: '5px'
      }}
    >
      {({blob, url, loading, error}) =>
        loading ? 'Loading document...' : 'Download Now!'
      }
    </PDFDownloadLink>
  </div>
)

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(pdfViewer)