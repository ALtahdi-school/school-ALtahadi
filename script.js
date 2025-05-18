function searchStudent() {
    const code = document.getElementById("studentCode").value.trim();
    const status = document.getElementById("status");
    const pdfViewer = document.getElementById("pdfViewer");

    if (!code) {
        status.textContent = "يرجى إدخال كود الطالب.";
        return;
    }

    status.textContent = "يرجى الانتظار، سيتم جلب بيانات الطالب...";
    pdfViewer.style.display = "none";

    const pdfPath = `pdfs/${code}.pdf`;

    fetch(pdfPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("لم يتم العثور على بيانات الطالب.");
            }
            pdfViewer.src = pdfPath;
            pdfViewer.style.display = "block";
            status.textContent = "";
        })
        .catch(() => {
            status.textContent = "لم يتم العثور على بيانات الطالب.";
            pdfViewer.style.display = "none";
        });
}
