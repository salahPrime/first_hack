document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("xInteractiveSvg");
    const lightGradient = document.getElementById("cursorLight");
    const identifierInput = document.getElementById("identifierInput");
    const continueBtn = document.getElementById("continueBtn");

    // 1. White Lighting Pointer Effect on the Large 'X'
    if (svg && lightGradient) {
        // Track mouse across the document so the glow smoothly enters/exits the edges of the X
        document.addEventListener("mousemove", (e) => {
            const rect = svg.getBoundingClientRect();
            
            // Convert screen mouse coordinates into the SVG's 300x271 viewBox coordinate system
            const scaleX = 300 / rect.width;
            const scaleY = 271 / rect.height;

            const svgX = (e.clientX - rect.left) * scaleX;
            const svgY = (e.clientY - rect.top) * scaleY;

            lightGradient.setAttribute("cx", svgX);
            lightGradient.setAttribute("cy", svgY);
        });

        // Hide the glow when the cursor leaves the browser window
        document.addEventListener("mouseleave", () => {
            lightGradient.setAttribute("cx", "-500");
            lightGradient.setAttribute("cy", "-500");
        });
    }

    // 2. Enable/Disable 'Continue' button based on input text
    if (identifierInput && continueBtn) {
        identifierInput.addEventListener("input", () => {
            continueBtn.disabled = identifierInput.value.trim().length === 0;
        });
    }
});