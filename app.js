const btn = document.querySelector('.talk')
const content = document.querySelector('.content');

const greetings = ['Im good yu little piece of shit', 'doing good homeboi',
'leave me alone'];

const weather = ['its very hot and my ass is on fire']


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function (){
    console.log('voice is activated yu can speak to microphone');
};
recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

//add listener to thge btn

btn.addEventListener('click', () =>{
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'i dont know what yu said';

if(message.includes('how are you')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)]
    speech.text = finalText;
}

   
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}