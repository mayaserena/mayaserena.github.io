import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../pics/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {

    render() {
        return(
            <div className="resume">
                <Document file={resume}>
                <Page pageNumber={1} />
                </Document>
            </div>
        )
    }
}

export default Resume;
