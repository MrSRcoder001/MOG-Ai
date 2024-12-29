const btn = document.querySelector('.input')
const content = document.querySelector('.content')
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}


var togglebtn = document.getElementById('btn')
function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Satish Boss...")
    }
    else if (hour > 12 && hour < 17) {
        speak("Good Afternoon Satish Boss...")
    }

    else {
        speak("Good Evenining Satish Boss...")
    }

}

window.addEventListener('load', () => {
    speak("Initializing Stranger Mog...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());
//     student_module(transcript.toLowerCase());
// }
// btn.addEventListener('click', () => {
//     content.textContent = "Listening...."
//     recognition.start();
// })

function student_module() {
    speak("Initializing students Section ...");
    togglebtn.style.left = '122px'
    recognition.onresult = (event) => {
        const currentIndex = event.resultIndex;
        const transcript = event.results[currentIndex][0].transcript;
        content.textContent = transcript;
        //takeCommand(transcript.toLowerCase());
        modules(transcript.toLowerCase());

    }

    btn.addEventListener('click', () => {
        content.textContent = "Listening...."
        recognition.start();
    })
    document.addEventListener('keydown', () => {
        content.textContent = "Listening...."
        recognition.start();
    })
    function modules(message) {
        if (message.includes('hello student') || message.includes('Haker')) {
            speak("its is working bro");
        }
        return 0;
    }


}
function leftClick() {
    togglebtn.style.left = '0'
    recognition.onresult = (event) => {
        const currentIndex = event.resultIndex;
        const transcript = event.results[currentIndex][0].transcript;
        content.textContent = transcript;
        takeCommand(transcript.toLowerCase());
        // modules(transcript.toLowerCase());

    }

    btn.addEventListener('click', () => {
        content.textContent = "Listening...."
        recognition.start();
    })
    document.addEventListener('keydown', () => {
        content.textContent = "Listening...."
        recognition.start();
    })



    function takeCommand(message) {

        if (message.includes('hey') || message.includes('hello')) {
            speak("Hello satish, How May I Help You?");
        }
        else if (message.includes("who is your owner")) {
            speak("My owner is. mr.satish Rathod .... that can devloped me on june 2022");
        }
        else if (message.includes("open google")) {
            window.open("https://google.com", "_blank");
            speak("Opening Google...")
        }

        else if (message.includes("open youtube")) {
            window.open("https://youtube.com", "_blank");
            speak("Opening Youtube...");
        }
        else if (message.includes("open chatgpt")) {
            window.open("https://chatgpt.com", "_blank");
            speak("Opening chatgpt AI...")
        }
        else if (message.includes("open facebook")) {
            window.open("https://facebook.com", "_blank");
            speak("Opening Facebook...")
        }

        else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what i found on internet regarding " + message;
            speak(finalText);

        }
        else if (message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
            const finalText = "This is what i found on wikipedia regarding " + message;
            speak(finalText);
        }
        else if (message.includes('time')) {
            const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
            const finalText = time;
            speak(finalText);
        }

        else if (message.includes('date')) {
            const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
            const finalText = date;
            speak(finalText);
        }

        else if (message.includes('open calculator') || message.includes('opening calculator')) {
            window.open('Calculator:///')
            const finalText = "Opening Calculator";
            speak(finalText);
        }
        else if (message.includes('open camera')) {
            window.open('microsoft.windows.camera:')
            const finalText = "Opening Camera";
            speak(finalText);
        }
        else if (message.includes('open calendar') || message.includes('opening calendar')) {
            window.open('outlookcal:')
            const finalText = "Opening calendar";
            speak(finalText);
        }
        else if (message.includes('open e-mail') || message.includes('opening e-mail')) {
            window.open('mailto:email:')
            const finalText = "Opening emails";
            speak(finalText);
        }
        else if (message.includes('open setting') || message.includes('opening setting')) {
            window.open('ms-settings:')
            const finalText = "Opening settings";
            speak(finalText);
        }
        else if (message.includes('open display setting') || message.includes('opening display setting')) {
            window.open('ms-settings:display')
            const finalText = "Opening display settings";
            speak(finalText);
        }
        else if (message.includes('open duplicate display') || message.includes('opening  duplicate display')) {
            window.open('ms-settings:quietmomentspresentation')
            const finalText = "Opening duplicate display";
            speak(finalText);
        }
        else if (message.includes('open battery setting') || message.includes('opening battery setting')) {
            window.open('ms-settings:batterysaver-settings')
            const finalText = "Opening battery setting";
            speak(finalText);
        }
        else if (message.includes('battery uses setting') || message.includes('opening battery usage setting')) {
            window.open('ms-settings:batterysaver-usagedetails')
            const finalText = "Opening battery usage setting";
            speak(finalText);
        }
        else if (message.includes('open night light setting') || message.includes('opening night light setting')) {
            window.open('ms-settings-connectabledevices:devicediscovery')
            const finalText = "Opening night light setting";
            speak(finalText);
        }
        else if (message.includes('connect wireless display') || message.includes('connecting to wireless display')) {
            window.open('ms-settings:nightlight')
            const finalText = "Opening wireless display setting";
            speak(finalText);
        }
        else if (message.includes('open graphic setting') || message.includes('opening graphics setting')) {
            window.open('ms-settings:display-advancedgraphics')
            const finalText = "Opening graphics setting";
            speak(finalText);
        }
        else if (message.includes('rotating screen') || message.includes('rotate screen') || message.includes('pls display orientation')) {
            window.open('ms-settings:screenrotation')
            const finalText = "rotating screen";
            speak(finalText);
        }
        else if (message.includes('open sound setting') || message.includes('opening sounds setting') || message.includes('sound setting')) {
            window.open('ms-settings:sound')
            const finalText = "open sound setting";
            speak(finalText);
        }
        else if (message.includes('open notification') || message.includes('opening notification') || message.includes('pls open notification')) {
            window.open('ms-settings:notifications')
            const finalText = "opening notification bar";
            speak(finalText);
        }
        else if (message.includes('open sleep setting') || message.includes('open power setting') || message.includes('open power and sleep setting')) {
            window.open('ms-settings:powersleep')
            const finalText = "open pawer & sleep setting";
            speak(finalText);
        }
        else if (message.includes('open storage setting') || message.includes('opening storage setting')) {
            window.open('ms-settings:storagesense')
            const finalText = "Opening storage setting";
            speak(finalText);
        }

        else if (message.includes('open tablet mode setting') || message.includes('opening tablet mode setting')) {
            window.open('ms-settings:tabletmode ')
            const finalText = "Opening tablet mode setting";
            speak(finalText);

        }
        else if (message.includes('open clipboard') || message.includes('opening clipboard setting')) {
            window.open('ms-settings:clipboard')
            const finalText = "Opening clipboard setting";
            speak(finalText);
        }
        else if (message.includes('open remote desktop setting') || message.includes('remote desktop setting')) {
            window.open('ms-settings:remotedesktop')
            const finalText = "Opening remote desktop setting";
            speak(finalText);
        }
        else if (message.includes('open about setting') || message.includes('openning about setting')) {
            window.open('ms-settings:about')
            const finalText = "Opening about setting";
            speak(finalText);
        } else if (message.includes('open bluetooth setting') || message.includes('openning bluetooth setting')) {
            window.open('ms-settings:bluetooth')
            const finalText = "Opening bluetooth setting";
            speak(finalText);
        }
        else if (message.includes('open printer setting') || message.includes('openning printer setting') || message.includes('open scanner setting') || message.includes('openning scanner setting')) {
            window.open('ms-settings:printers')
            const finalText = "Opening printers setting";
            speak(finalText);
        }
        else if (message.includes('open mouse setting') || message.includes('openning mouse setting')) {
            window.open('ms-settings:mousetouchpad')
            const finalText = "Opening mouse setting";
            speak(finalText);
        }
        else if (message.includes('open touchpad setting') || message.includes('openning touchpad setting')) {
            window.open('ms-settings:devices-touchpad')
            const finalText = "Opening touchpad setting";
            speak(finalText);
        }
        else if (message.includes('open typing setting') || message.includes('openning typing setting')) {
            window.open('ms-settings:typing')
            const finalText = "Opening typing setting";
            speak(finalText);
        }
        else if (message.includes('open hardware keyboard setting') || message.includes('openning hardware keyboard setting')) {
            window.open('ms-settings:devicestyping-hwkbtextsuggestions')
            const finalText = "Opening  hardware key board setting";
            speak(finalText);
        }
        else if (message.includes('open wheel setting') || message.includes('openning wheels setting')) {
            window.open('ms-settings:wheel')
            const finalText = "Opening wheel setting";
            speak(finalText);
        }
        else if (message.includes('open windows ink setting') || message.includes('openning windows pen setting')) {
            window.open('ms-settings:pen')
            const finalText = "Opening windows ink setting";
            speak(finalText);
        }
        else if (message.includes('open autoplay setting') || message.includes('openning autoplay setting')) {
            window.open('ms-settings:autoplay')
            const finalText = "Opening autoplay setting";
            speak(finalText);
        }
        else if (message.includes('open usb setting') || message.includes('openning usb setting')) {
            window.open('ms-settings:usb')
            const finalText = "Opening usb setting";
            speak(finalText);
        }
        else if (message.includes('open phone setting') || message.includes('openning phone setting')) {
            window.open('ms-settings:mobile-devices')
            const finalText = "Opening phone setting";
            speak(finalText);
        }
        else if (message.includes('open network setting') || message.includes('openning network setting') || message.includes('openning internet setting')) {
            window.open('ms-settings:network')
            const finalText = "Opening network setting";
            speak(finalText);
        }
        else if (message.includes('open network status setting') || message.includes('openning network status setting') || message.includes('openning internet status setting')) {
            window.open('ms-settings:network-status')
            const finalText = "Opening network status setting";
            speak(finalText);
        }
        else if (message.includes('open and show available network setting') || message.includes('openning show available network setting') || message.includes('openning show available internet setting')) {
            window.open('ms-availablenetwork:')
            const finalText = "Opening show available network setting";
            speak(finalText);
        }
        else if (message.includes('open cellular setting') || message.includes('openning cellular and sim setting') || message.includes('openning sim setting')) {
            window.open('ms-settings:network-cellular')
            const finalText = "Opening cellular & sim setting";
            speak(finalText);
        }
        else if (message.includes('open WIFI setting') || message.includes('openning wifi setting') || message.includes('open wifi setting')) {
            window.open('ms-settings:network-wifI')
            const finalText = "Opening wifi setting";
            speak(finalText);
        }
        else if (message.includes('open manage known network setting') || message.includes('openning manage known network setting') || message.includes('open manage network setting')) {
            window.open('ms-settings:network-wifIsettings')
            const finalText = "Opening manage network setting";
            speak(finalText);
        }
        else if (message.includes('open wifi calling setting') || message.includes('openning wifi calling setting')) {
            window.open('ms-settings:network-wifIcalling')
            const finalText = "Opening wifi calling setting";
            speak(finalText);
        }
        else if (message.includes('open ethernet setting') || message.includes('openning ethernet setting')) {
            window.open('ms-settings:network-ethernet')
            const finalText = "Opening ethernet setting";
            speak(finalText);
        }
        else if (message.includes('open dial-up setting') || message.includes('openning dial up setting')) {
            window.open('ms-settings:network-dialup')
            const finalText = "Opening dial-up setting";
            speak(finalText);
        }
        else if (message.includes('open direct access setting') || message.includes('openning direct access setting')) {
            window.open('ms-settings:network-directaccess')
            const finalText = "Opening direct access setting";
            speak(finalText);
        }
        else if (message.includes('open VPN setting') || message.includes('openning vpn setting')) {
            window.open('ms-settings:network-vpn')
            const finalText = "Opening vpn setting";
            speak(finalText);
        }
        else if (message.includes('open airplane mode setting') || message.includes('openning airplane mode setting') || message.includes('open airoplane mode setting')) {
            window.open('ms-settings:network-airplanemode')
            const finalText = "Opening airplane mode setting";
            speak(finalText);
        }
        else if (message.includes('open mobile hotspot setting') || message.includes('openning mobile hotspot setting') || message.includes('open hotspot setting')) {
            window.open('ms-settings:network-mobilehotspot')
            const finalText = "Opening mobile hotspot setting";
            speak(finalText);
        }
        else if (message.includes('open data usage setting') || message.includes('openning data usage setting') || message.includes('opened data usage setting')) {
            window.open('ms-settings:network-datausage')
            const finalText = "Opening data usage setting";
            speak(finalText);
        }
        else if (message.includes('open proxy setting') || message.includes('openning proxy setting') || message.includes('opened proxy setting')) {
            window.open('ms-settings:network-proxy')
            const finalText = "Opening proxy setting";
            speak(finalText);
        }
        else if (message.includes('open personalization setting') || message.includes('openning personalization setting')) {
            window.open('ms-settings:personalization')
            const finalText = "Opening personalization setting";
            speak(finalText);
        }
        else if (message.includes('open background setting') || message.includes('openning background setting')) {
            window.open('ms-settings:personalization-background')
            const finalText = "Opening background setting";
            speak(finalText);
        }
        else if (message.includes('open lock screen setting') || message.includes('openning lock screen setting')) {
            window.open('ms-settings:lockscreen')
            const finalText = "Opening lockscreen setting";
            speak(finalText);
        }
        else if (message.includes('open themes setting') || message.includes('openning themes setting')) {
            window.open('ms-settings:themes')
            const finalText = "Opening themes setting";
            speak(finalText);
        }
        else if (message.includes('open font setting') || message.includes('openning fonts setting')) {
            window.open('ms-settings:fonts')
            const finalText = "Opening font setting";
            speak(finalText);
        }
        else if (message.includes('open taskbar setting') || message.includes('openning taskbar setting')) {
            window.open('ms-settings:taskbar')
            const finalText = "Opening taskbar setting";
            speak(finalText);
        }
        else if (message.includes('open startup setting') || message.includes('openning startup setting')) {
            window.open('ms-settings:startupapps')
            const finalText = "Opening startup setting";
            speak(finalText);
        }
        else if (message.includes('open offline map setting') || message.includes('openning offline map setting')) {
            window.open('ms-settings:maps')
            const finalText = "Opening offline map setting";
            speak(finalText);
        }
        else if (message.includes('open my info setting') || message.includes('openning my information setting')) {
            window.open('ms-settings:yourinfo')
            const finalText = "Opening your information setting";
            speak(finalText);
        }
        else if (message.includes('open email account setting') || message.includes('openning email account setting')) {
            window.open('ms-settings:emaillandaccounts')
            const finalText = "Open your email account setting";
            speak(finalText);
        }
        else if (message.includes('open sing-in setting') || message.includes('openning sing-in setting')) {
            window.open('ms-settings:singinoptions')
            const finalText = "Openning sing-in account setting";
            speak(finalText);
        }
        else if (message.includes('open date and time setting') || message.includes('openning date setting') || message.includes('openning time setting')) {
            window.open('ms-settings:dateandtime')
            const finalText = "Openning date and time setting";
            speak(finalText);
        }
        else if (message.includes('open language setting') || message.includes('openning language setting')) {
            window.open('ms-settings:regionlanguage')
            const finalText = "Openning language setting";
            speak(finalText);
        }
        else if (message.includes('open speech setting') || message.includes('openning speech setting')) {
            window.open('ms-settings:speech')
            const finalText = "Openning speech setting";
            speak(finalText);
        }
        else if (message.includes('open keyboard setting') || message.includes('openning keyboard setting')) {
            window.open('ms-settings:keyboard')
            const finalText = "Openning keyboard setting";
            speak(finalText);
        }
        else if (message.includes('open window update setting') || message.includes('openning window update setting') || message.includes('openning update window setting')) {
            window.open('ms-settings:windowsupdate')
            const finalText = "Openning window update setting";
            speak(finalText);
        }
        else if (message.includes('open update setting') || message.includes('openning update setting')) {
            window.open('ms-settings:windowsupdate-action')
            const finalText = "Openning update setting";
            speak(finalText);
        }
        else if (message.includes('open window security setting') || message.includes('openning window security setting')) {
            window.open('ms-settings:windowsdefender')
            const finalText = "Openning window security setting";
            speak(finalText);
        }
        else if (message.includes('open backup setting') || message.includes('openning backup setting')) {
            window.open('ms-settings:backup')
            const finalText = "Openning backup setting";
            speak(finalText);
        }
        else if (message.includes('open troubleshoot setting') || message.includes('openning troubleshoot setting')) {
            window.open('ms-settings:troubleshoot')
            const finalText = "Openning troubleshoot setting";
            speak(finalText);
        }
        else if (message.includes('open recovery setting') || message.includes('openning recovery setting')) {
            window.open('ms-settings:recovery')
            const finalText = "Openning recovery setting";
            speak(finalText);
        }
        else if (message.includes('open activation setting') || message.includes('openning activation setting')) {
            window.open('ms-settings:activation')
            const finalText = "Openning activation setting";
            speak(finalText);
        }
        else if (message.includes('open find my device setting') || message.includes('openning find my device setting')) {
            window.open('ms-settings:findmydevice')
            const finalText = "Openning find my device setting";
            speak(finalText);
        }
        else if (message.includes('open developer setting') || message.includes('openning developer setting')) {
            window.open('ms-settings:developers')
            const finalText = "Openning find my device setting";
            speak(finalText);
        }
        else if (message.includes('open environment setting') || message.includes('openning environment setting')) {
            window.open('ms-settings:privacy-holographic-environment')
            const finalText = "Openning environment setting";
            speak(finalText);
        }
        else if (message.includes('open headset display setting') || message.includes('openning headset setting')) {
            window.open('ms-settings:privacy-holographic-headset')
            const finalText = "Openning headset setting";
            speak(finalText);
        }
        else if (message.includes('open uninstall setting') || message.includes('openning uninstall setting')) {
            window.open('ms-settings:privacy-holographic-management')
            const finalText = "Openning uninstall setting";
            speak(finalText);
        }
        else if (message.includes('open alarm') || message.includes('openning alerm') || message.includes('openning clock') || message.includes('open clock')) {
            window.open('ms-clock:')
            const finalText = "Openning clock application";
            speak(finalText);
        }
        else if (message.includes('openning camera')) {
            window.open('microsoft.windows.camera:')
            const finalText = "Openning clock application";
            speak(finalText);
        }
        else if (message.includes('open feedback hub') || message.includes('openning feedback hub')) {
            window.open('feedback-hub:')
            const finalText = "Openning feedback hub application";
            speak(finalText);
        }
        else if (message.includes('open music app') || message.includes('openning music application')) {
            window.open('mswindowsmusic:')
            const finalText = "Openning music application";
            speak(finalText);
        }
        else if (message.includes('open maps ') || message.includes('openning maps application')) {
            window.open('bingmaps:')
            const finalText = "Openning maps application";
            speak(finalText);
        }
        else if (message.includes('open media player') || message.includes('openning media player application')) {
            window.open('mswindowsmusic:')
            const finalText = "Openning media player application";
            speak(finalText);
        }
        else if (message.includes('open microsoft edge') || message.includes('openning microsoft edge application') || message.includes('openning microsoft edge')) {
            window.open('microsoft-edge:')
            const finalText = "Openning microsoft edge application";
            speak(finalText);
        }
        else if (message.includes('open microsoft news') || message.includes('openning microsoft news application') || message.includes('openning microsoft news')) {
            window.open('bingnews:')
            const finalText = "Openning microsoft news application";
            speak(finalText);
        }
        else if (message.includes('open microsoft store') || message.includes('openning microsoft store application') || message.includes('openning microsoft store')) {
            window.open('ms-windows-store:')
            const finalText = "Openning microsoft store application";
            speak(finalText);
        }
        else if (message.includes('open movies') || message.includes('openning movies application') || message.includes('openning TV')) {
            window.open('mswindowsvideo:')
            const finalText = "Openning movies application";
            speak(finalText);
        }
        else if (message.includes('open notfication center') || message.includes('openning notfication center application') || message.includes('openning notfication center')) {
            window.open('ms-actioncenter:')
            const finalText = "Openning notfication center application";
            speak(finalText);
        }
        else if (message.includes('open people') || message.includes('openning people application') || message.includes('openning people')) {
            window.open('ms-people:')
            const finalText = "Openning people application";
            speak(finalText);
        }
        else if (message.includes('open photos') || message.includes('openning gallery') || message.includes('openning photo')) {
            window.open('ms-photos:')
            const finalText = "Openning people application";
            speak(finalText);
        }
        else if (message.includes('open snipping tool') || message.includes('openning snapshot') || message.includes('openning screenshot')) {
            window.open('ms-ScreenSketch:')
            const finalText = "Openning snipping tool application";
            speak(finalText);
        }
        else if (message.includes('open weather') || message.includes('openning weather application') || message.includes('openning weather')) {
            window.open('msnweather:')
            const finalText = "Openning snipping tool application";
            speak(finalText);
        }









        else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "I found some information for " + message + " on google";
            speak(finalText);
        }
    }
}