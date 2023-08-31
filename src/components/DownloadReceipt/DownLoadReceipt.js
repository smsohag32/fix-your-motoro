import { PDFDocument, rgb,  StandardFonts } from 'pdf-lib';

// Function to generate and return a PDF receipt as bytes
export async function generateReceiptPDF(service) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.276, 841.890]); // A4 page size in points (210 x 297 mm)


    const receiptContent = `
        Receipt
        --------------------------------
        Service Type: ${service.serviceType}
        Date: ${service.serviceDate}
        Description: ${service.serviceDescription}
        Service Provider: ${service.serviceProvider}
        Status: ${service.serviceStatus}
        Service Cost: ${service.serviceCost}
        Transaction ID: ${service.servicePaymentInfo}



        Visit Our Website: https://fix-your-motoro.vercel.app/
        `;
   

    page.drawText(receiptContent, {
        x: 50,
        y: 750,
        size: 12,
        color: rgb(0, 0, 0), // Black color
        font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    });

    // Add a heading
    page.drawText('Receipt for Service', {
        x: 50,
        y: 750, 
        size: 18,
        color: rgb(0, 0, 0), // Black color
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}
