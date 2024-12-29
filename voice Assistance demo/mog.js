const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {

    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}
function talkwithme() {
    var day = new Date();
    var hour = day.getHours();
    if (hour > 0 && hour < 12) {
        speak("Good Morning Satish boss");
    }
    else if (hour > 12 && hour < 17) {
        speak("Good Afternoon Satish boss");
    }
    else if (hour > 17 && hour < 24) {
        speak("Good Evening ADITYA  boss ");
    }
    else {
        speak("Good morning Satish boss");
    }
}
window.addEventListener('load', () => {
    speak("Initializing Voice Assistance Stranger MOG ..");
    talkwithme();
    speak("How can i help you?");

});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "  Listening......";
    // speak("hello" )
    recognition.start();
});
function takeCommand(message) {

    if (message.includes('hello')) {
        speak("what happien boss");

    }
    else {
        speak("maked it more intelligent");

    }
}

