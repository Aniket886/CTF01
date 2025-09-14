// Certificate Generator
function generateCredentialId() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";
    for (let i = 0; i < 5; i++) {
        randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return "CTF-2025-AT-" + randomPart;
}

async function downloadPNG() {
    const node = document.getElementById('certificate');
    const canvas = await html2canvas(node, {backgroundColor: null, scale: 2});
    const dataURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'Certificate.png';
    a.click();
}

async function downloadPDF() {
    const node = document.getElementById('certificate');
    const canvas = await html2canvas(node, {backgroundColor: '#0a0e12', scale: 2});
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({orientation:'landscape', unit:'pt', format:'a4'});
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pageW / canvas.width, pageH / canvas.height);
    const w = canvas.width * ratio;
    const h = canvas.height * ratio;
    const x = (pageW - w) / 2;
    const y = (pageH - h) / 2;
    pdf.addImage(imgData, 'PNG', x, y, w, h);
    pdf.save('Certificate.pdf');
}

function initializeCertificate(playerName) {
    document.getElementById('certName').textContent = playerName.toUpperCase();
    document.getElementById('credId').textContent = generateCredentialId();
    document.getElementById('btnPng').addEventListener('click', downloadPNG);
    document.getElementById('btnPdf').addEventListener('click', downloadPDF);
}
