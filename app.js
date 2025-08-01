const clues = [
    {
    question: "1. Ahol a Duna zúg, s a tér él,Ott egy férfi áll, s hordókat kísér.Nem boltban, pincében áll a készlet,Hanem szoborként őrzi az emlékezet.Ő nem szól, csak kínál némán,Boroshordók sorban, nem is hiány.Nézd körbe jól, figyelj szigorúan:Hány hordó nyugszik körülötte pontosan?",
    answer: "7",
    video: "videos/VID_20250730_083814_052.mp4"
  },
    {
    question: "2. Hol a híd kezdődik, piac nyüzsög,Színek és illatok tengere dübörög.Tetején mázas cserepek csillannak,S fenn a magasban őrök figyelnek szigorral.Nem boltban jársz, nem is az erdőn,Mégis vadakat láthatsz egy bérház tetőjén.Nézz fel bátran, ne csak a földre!Milyen állat les rád a csúcsról közvetlen közelből?Fenséges, szikár, mancsán a rend,Ha ránézel, rögtön érzed: ő védelmet jelent.A szót, amit keresel, egy állat neve:Ez kell, hogy megnyíljon a következő szegmense!",
    answer: "oroszlán",
    video: "videos/VID_20250728_120148_377.mp4"
  },
        {
    question: "3. Hol költőnk nevét őrzi a ház,És betűkből szőnek szellemet, varázst,Ott bújik egy kert, csendes és zárt,S egy kis szobor titkot rejt már száz nyáron át.A padok között, hol gyermek játszik,Egy kőlény figyel, nem mozdul, nem mászik.Fülét hegyezi, de hangra se vár,Mert régóta őrzi már a kis udvart.",
    answer: "nyúl",
    video: "videos/VID_20250727_235926_396.mp4"
  },
          {
    question: "4. Altersrácok és alterlányok törzshelye,Ahol még egy jó pastát is ehetsz.Ha a szív helyett most a lélekre figyelsz.Ott áll fehéren, tisztán, magasban,Történelmet hordoz minden darabja.Fala közt ereklyék, de kívül is beszél:Nézz fel! Mit látsz, ha bejárata elé betérsz?Komoly a sor, görög példát idéz,Hány oszlop tartja a homlokzat ívét?Számold meg jól, ne hagyd, hogy megtévesszen,E szám visz tovább – írd be helyesen!",
    answer: "8",
    video: "videos/VID_20250721_120550_220.mp4"
  },
            {
    question: "SIDEQUEST: Térj be a Mannába és szerezd meg az áhított mannát, amiért minden alter szív megdobban. Ha megvagy írd be az ital nevét és indulhatsz tovább!",
    answer: "Club-Mate",
    video: "videos/VID_20231009_174906.mp4"
  },
                {
    question: "5. Egy férfi áll a tér szívében,Komoly tekintet arcélében.Nem beszél, mégis sokat mond,Könyvekkel teli, gondolatban bolyong.Előtte víz táncol, habzik, csobog,Ő arra néz — vajon mit látott?Ha mögé állsz, látod majd,Merre tekint — s a jelszót megtalálod.",
    answer: "szökőkút",
    video: "videos/VID_20250721_120446_288.mp4"
  },
      {
    question: "6. Ahol a föld alatt három szín összeér,Ott száll a dallam, mit nem hall a fül, csak a kép.Forgatagban áll egy csendes kis csoda,Hol szó nem szól, csak néma dallama.Kőbe faragva egy pásztor zenél,Nem mozdul ajka, mégis zene kél.Figyelj rá, mit tart a kezében,A kulcs ott lapul – e népi emlékben.",
    answer: "furulya",
    video: "videos/IMG_0538.MOV – másolat"
  },
    {
    question: "7. Egy tér, hol múlt és jelen összeér,Hol emlék áll, s néma a beszéd.Ha nyugatra nézel, egy férfi jön,Mosolya derű, de lépte örök.Nem harcolt itt, mégis helyet kapott,Egy hatalom, ki barát volt s nagyot adott.Nézd arcát, s kérdezd meg nevét:Ő volt az, ki mondta: „Mr. Gorbacsov, döntse le e falat!”",
    answer: "Ronald Reagan",
    video: "videos/output.mp4"
  },
  {
    question: "8. Ahol zászló leng és nagy döntések születtek,\nOtt Rákóczi némán áll – emlékezve egy nemzetnek.\nSzavai régiek, nyelvük sem a miénk,\nDe vége rejti a jelszót, ha figyelmesen kísérsz.",
    answer: "vulnera",
    video: "videos/MP4_20250801_154536VLOG.mp4"
  },







];

let current = 0;

const app = document.getElementById("content");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  showClue();
});

function showClue() {
  app.innerHTML = `
    <p><strong>Nyom:</strong> ${clues[current].question}</p>
    <input type="text" id="answerInput" placeholder="Jelszó..." />
    <button id="submitBtn">Beküldés</button>
    <div id="feedback"></div>
  `;

  document.getElementById("submitBtn").addEventListener("click", checkAnswer);
}

function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const correct = clues[current].answer.toLowerCase();

  if (input === correct) {
    playVideo(clues[current].video);
  } else {
    document.getElementById("feedback").innerText = "Sajnos nem jó. Próbáld újra!";
  }
}

function playVideo(videoPath) {
  app.innerHTML = `
    <video id="stationVideo" width="100%" controls autoplay>
      <source src="${videoPath}" type="video/mp4" />
      A videót nem tudtuk lejátszani.
    </video>
  `;

  const video = document.getElementById("stationVideo");
  video.addEventListener("ended", () => {
    current++;
    if (current < clues.length) {
      showClue();
    } else {
      app.innerHTML = `<h2>🎉 Gratulálok! Teljesítetted a küldetést! 🎉</h2>`;
    }
  });
}
