async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const targetLanguage = document.getElementById("targetLanguage").value;
    const outputText = document.getElementById("outputText");

    if (!inputText.trim()) {
        outputText.innerText = "Please enter text to translate.";
        return;
    }

    // Google Translate URL (Hidden iframe Trick)
    const googleTranslateURL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(inputText)}`;

    try {
        const response = await fetch(googleTranslateURL);
        const data = await response.json();

        // Extract translated text from response
        const translatedText = data[0].map(item => item[0]).join("");
        outputText.innerText = translatedText;
    } catch (error) {
        outputText.innerText = "Translation failed. Try again.";
        console.error("Translation error:", error);
    }
}