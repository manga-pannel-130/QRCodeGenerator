function generateQR() {
    const inputEl = document.getElementById("qrText");
    const qrImage = document.getElementById("qrImage");
    const imgBox = document.getElementById("imgBox");
    const qrText = inputEl.value.trim();

    if (qrText.length === 0) {
        // add shake class, focus input, then remove it after animation ends
        inputEl.classList.remove("input-error"); // reset in case it's still present
        // Force reflow to restart animation if needed
        void inputEl.offsetWidth;
        inputEl.classList.add("input-error");
        inputEl.focus();

        // Remove the class after animation duration (match CSS duration)
        setTimeout(() => {
            inputEl.classList.remove("input-error");
        }, 360);

        return;
    }

    // Prevent caching issues
    const timestamp = new Date().getTime();
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}&t=${timestamp}`;
    imgBox.classList.add("show-img");
}
