const quotes = [
  { text: "Lock in, don’t check out—your future self is watching.", author: "David Goggins" },
  { text: "Every moment of resistance to temptation is a victory.", author: "Frederick William Faber" },
  { text: "We gain the strength of the temptation we resist.", author: "Ralph Waldo Emerson" },
  { text: "It is easier to stay out than get out.", author: "Mark Twain" },
  { text: "A silly idea is current that good people do not know what temptation means… Only those who try to resist temptation know how strong it is.", author: "C. S. Lewis" },
  { text: "Temptation is the devil looking through the keyhole. Yielding is opening the door.", author: "Billy Sunday" },
  { text: "The temptation to take the easy road is always there. But discipline is paramount to ultimate success.", author: "Jocko Willink" },
  { text: "God tests, but he does not tempt.", author: "Criss Jami" },
  { text: "The only way to get rid of temptation is to yield to it.", author: "Oscar Wilde" },
  { text: "Lead me not into temptation; I can find the way myself.", author: "Rita Mae Brown" },
  { text: "Every worthy act is difficult. Ascent is always tricky.", author: "Mahatma Gandhi" },
  { text: "The road to success is dotted with many tempting parking spaces.", author: "Will Rogers" },
  { text: "Temptation coaxes us toward sin…", author: "Steve Maraboli" },
  { text: "Most dangerous is that temptation that goads us on to sin in loving virtue.", author: "William Shakespeare" },
  { text: "Once a person steps into sin, the stagnating power of sin becomes activated.", author: "Enoch Adeboye" },
  { text: "If you're not growing, you're stagnant. Push yourself.", author: "Lucas" },
  { text: "Life’s too short to be anything but completely yourself.", author: "Mia" },
  { text: "Your vibe attracts your tribe—choose your energy wisely.", author: "Jalen" },
  { text: "Dream big, fail hard, and get up even stronger.", author: "Zoe" },
  { text: "You’re the main character—act like it.", author: "Maya" },
  { text: "Stop chasing perfection, start chasing progress.", author: "Kayla" },
  { text: "Fire up the lockdown: stay locked in, not logged on.", author: "David Goggins" },
  { text: "Lock in beats log on—focus fuels freedom.", author: "David Goggins" },
  { text: "Temptation is real—so is the win when you resist.", author: "Frederick William Faber" },
  { text: "Resist the temptation. Strength is built in the burst.", author: "Ralph Waldo Emerson" },
  { text: "Stay locked in. Your goals aren’t gonna hit themselves.", author: "David Goggins" },
  { text: "Life’s too short to drop into a spiral. Stay woke.", author: "Criss Jami" },
  { text: "Avoid the trap—glory’s in the grind.", author: "Jocko Willink" },
  { text: "Discipline beats desire. Every. Single. Time.", author: "David Goggins" },
  { text: "Don’t tempt the devil—shut the door before he knocks.", author: "Billy Sunday" },
  { text: "Temptation hides in moments—you stay locked forever.", author: "David Goggins" },
  { text: "Lead yourself, don’t follow the urge.", author: "Rita Mae Brown" },
  { text: "Yielding feels nice then regrets crash the party.", author: "Oscar Wilde" },
  { text: "That dopamine dip ain’t worth your soul’s credit.", author: "Steve Maraboli" },
  { text: "Don’t park in temptation’s lot—success drives on.", author: "Will Rogers" },
  { text: "Every lock-in builds your brain-bank of discipline.", author: "David Goggins" },
  { text: "Tests don't destroy you—they define you.", author: "Criss Jami" },
  { text: "Only yourself can open temptation’s door.", author: "Billy Sunday" },
  { text: "Thrill fades—mastery stays.", author: "Jocko Willink" },
  { text: "Resist now, thrive later.", author: "Frederick William Faber" },
  { text: "You’re not basic—don’t act basic.", author: "Lucas" },
  { text: "Make progress, not excuses.", author: "Zoe" },
  { text: "Late-night tabs are cheap thrills—your dream is premium.", author: "Kayla" },
  { text: "You didn’t come this far to binge-backslide.", author: "Mia" },
  { text: "Hold your line—your future’s watching.", author: "Maya" },
  { text: "Real flex? Discipline over desire.", author: "Jalen" },
  { text: "Forget log-off—lock in.", author: "David Goggins" },
  { text: "Resisting is the move. Every. Single. Time.", author: "Ralph Waldo Emerson" },
  { text: "Your phone buzz fades—your legacy doesn’t.", author: "Criss Jami" },
  { text: "Lock in mode: ON. Distraction: OFF.", author: "Jocko Willink" },
  { text: "Earn focus—don’t rent distractions.", author: "David Goggins" },
  { text: "Discipline is hot. Temptation is cheap.", author: "Lucas" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const backButton = document.getElementById('backButton');
const statusElement = document.getElementById('status');

function displayNewQuote() {
  quoteElement.style.opacity = 0;
  authorElement.style.opacity = 0;
  setTimeout(() => {
      chrome.storage.local.get(['lastQuote'], (data) => {
          const availableQuotes = quotes.filter(q => q.text !== data.lastQuote);
          const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
          quoteElement.textContent = randomQuote.text;
          authorElement.textContent = `— ${randomQuote.author}`;
          chrome.storage.local.set({ lastQuote: randomQuote.text });
          quoteElement.style.opacity = 1;
          authorElement.style.opacity = 1;
          console.log('Displayed quote:', randomQuote.text);
      });
  }, 300);
}

function returnToDashboard() {
  statusElement.textContent = 'Opening Purge...';
  chrome.runtime.sendMessage({ action: 'openPopup' });
}

displayNewQuote();
setInterval(displayNewQuote, 20000);
backButton.addEventListener('click', returnToDashboard);