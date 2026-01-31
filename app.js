// ==========================================
// 1. THE MASSIVE SCENARIO BANK (30+ Financial Dilemmas)
// ==========================================
const scenarioPool = [
    // ===========================
    // 📈 MONEY IN (Income/Gains)
    // ===========================
    {
        title: "Found Wallet",
        desc: "You found a wallet in a taxi containing ₹10,000 cash and an ID card.",
        icon: "👛",
        options: [
            { text: "Keep the cash", cash: 10000, ethics: -15, risk: 10, advice: "Theft by finding is still theft." },
            { text: "Contact Owner", cash: 0, ethics: 15, risk: 0, advice: "You saved someone's month. Good karma." },
            { text: "Donate it", cash: 0, ethics: 5, risk: 0, advice: "Good intent, but it wasn't yours to give." }
        ]
    },
    {
        title: "Selling Old Car",
        desc: "Selling your car. It has a hidden engine issue that costs ₹20k to fix.",
        icon: "🚗",
        options: [
            { text: "Hide the issue", cash: 200000, ethics: -20, risk: 10, advice: "You cheated the buyer. They will suffer." },
            { text: "Disclose issue", cash: 180000, ethics: 10, risk: 0, advice: "Honesty cost you ₹20k, but you slept well." },
            { text: "Fix it first", cash: 180000, ethics: 15, risk: 0, advice: "Responsible selling." }
        ]
    },
    {
        title: "Corporate Bribe",
        desc: "A vendor offers you a 'commission' to approve their expensive contract.",
        icon: "🤝",
        options: [
            { text: "Accept Bribe", cash: 50000, ethics: -30, risk: 50, advice: "Corruption rots the system. High jail risk." },
            { text: "Reject Sternly", cash: 0, ethics: 15, risk: 0, advice: "Integrity is not for sale." },
            { text: "Report to HR", cash: 5000, ethics: 20, risk: 5, advice: "Whistleblowers are brave. Company gave a bonus." }
        ]
    },
    {
        title: "Crypto Pump",
        desc: "Influencer friend asks you to promote a scam coin. Guaranteed ₹25k payout.",
        icon: "📉",
        options: [
            { text: "Promote it", cash: 25000, ethics: -25, risk: 20, advice: "You helped scam your own followers." },
            { text: "Refuse", cash: 0, ethics: 10, risk: 0, advice: "Protecting others is a duty." },
            { text: "Expose them", cash: 0, ethics: 15, risk: 5, advice: "You might lose a friend, but you saved many." }
        ]
    },
    {
        title: "Extra Paycheck",
        desc: "HR made an error and credited double salary (Extra ₹40,000) this month.",
        icon: "💳",
        options: [
            { text: "Keep quiet", cash: 40000, ethics: -15, risk: 20, advice: "They will eventually find out and deduct it." },
            { text: "Notify HR", cash: 0, ethics: 15, risk: 0, advice: "Professionalism builds trust." },
            { text: "Invest it quickly", cash: 42000, ethics: -20, risk: 30, advice: "Spending money that isn't yours is fraud." }
        ]
    },
    {
        title: "Freelance Tax",
        desc: "Client asks: 'If you take cash without invoice, I pay you ₹5,000 extra.'",
        icon: "📝",
        options: [
            { text: "Take Cash (No Tax)", cash: 5000, ethics: -10, risk: 15, advice: "Black money hurts the economy." },
            { text: "Invoice + GST", cash: -2000, ethics: 10, risk: 0, advice: "Taxes build roads and schools." },
            { text: "Split difference", cash: 2000, ethics: -5, risk: 5, advice: "Compromising ethics." }
        ]
    },

    // ===========================
    // 📉 MONEY OUT (Spending/Loss)
    // ===========================
    {
        title: "Friend's Surgery",
        desc: "Best friend needs emergency surgery. They are short by ₹20,000.",
        icon: "🏥",
        options: [
            { text: "Give Money", cash: -20000, ethics: 25, risk: 0, advice: "Money comes and goes. Friends are forever." },
            { text: "Refuse politely", cash: 0, ethics: -5, risk: 0, advice: "Your money, your choice. But slightly cold." },
            { text: "Lend with Interest", cash: -20000, ethics: -10, risk: 0, advice: "Profiting from a friend's misery?" }
        ]
    },
    {
        title: "Traffic Fine",
        desc: "Caught speeding. Fine is ₹2,000. Cop hints at settling for ₹500.",
        icon: "👮",
        options: [
            { text: "Bribe ₹500", cash: -500, ethics: -15, risk: 10, advice: "Feeding corruption saves money but kills nations." },
            { text: "Pay Challan ₹2k", cash: -2000, ethics: 10, risk: 0, advice: "Owning your mistake is maturity." },
            { text: "Argue & Threaten", cash: -2000, ethics: -5, risk: 15, advice: "Disrespecting uniform adds trouble." }
        ]
    },
    {
        title: "Restaurant Bill",
        desc: "The waiter forgot to add drinks (₹1,500) to your bill.",
        icon: "🍹",
        options: [
            { text: "Pay Bill as is", cash: 0, ethics: -10, risk: 0, advice: "The waiter might have to pay from his pocket." },
            { text: "Point it out", cash: -1500, ethics: 15, risk: 0, advice: "Honesty even when it hurts your wallet." },
            { text: "Leave big tip", cash: -500, ethics: 5, risk: 0, advice: "Partial redemption." }
        ]
    },
    {
        title: "Subscription Forgot",
        desc: "You forgot to cancel a trial. Charged ₹1,000. You can lie to bank to reverse it.",
        icon: "🔄",
        options: [
            { text: "Claim 'Fraud'", cash: 1000, ethics: -15, risk: 10, advice: "Chargeback fraud raises your credit risk." },
            { text: "Accept mistake", cash: -1000, ethics: 5, risk: 0, advice: "Pay for your forgetfulness." },
            { text: "Email Support", cash: 0, ethics: 5, risk: 0, advice: "Legitimate way to ask for a refund." }
        ]
    },
    {
        title: "Charity Drive",
        desc: "Local orphanage needs blankets for winter. Cost ₹5,000.",
        icon: "🧣",
        options: [
            { text: "Donate", cash: -5000, ethics: 20, risk: 0, advice: "Generosity is the wealth of the soul." },
            { text: "Ignore", cash: 0, ethics: -5, risk: 0, advice: "Apathy is free." },
            { text: "Share post only", cash: 0, ethics: 0, risk: 0, advice: "Awareness helps, but cash helps more." }
        ]
    },

    // ===========================
    // 🏛️ STANDARD SCENARIOS
    // ===========================
    {
        title: "GST on Electronics",
        desc: "Buying a laptop. Bill: ₹60k. Without Bill: ₹50k.",
        icon: "💻",
        options: [
            { text: "No Bill (Save ₹10k)", cash: -50000, ethics: -10, risk: 15, advice: "Tax evasion destroys public infrastructure." },
            { text: "Pay GST (₹60k)", cash: -60000, ethics: 10, risk: 0, advice: "Honest taxpayer." },
            { text: "Fake Bill", cash: -50000, ethics: -15, risk: 20, advice: "Forgery is a crime." }
        ]
    },
    {
        title: "Voting Day",
        desc: "Politician offers ₹2,000 for your vote.",
        icon: "🗳️",
        options: [
            { text: "Take Cash", cash: 2000, ethics: -20, risk: 5, advice: "You sold your democracy." },
            { text: "Reject", cash: 0, ethics: 15, risk: 0, advice: "Responsible citizen." },
            { text: "Report him", cash: 0, ethics: 20, risk: 10, advice: "Brave move." }
        ]
    },
    {
        title: "Office Stationery",
        desc: "Taking home office printer paper for personal use.",
        icon: "🖨️",
        options: [
            { text: "Take a ream", cash: 500, ethics: -10, risk: 5, advice: "Petty theft is still theft." },
            { text: "Buy your own", cash: -500, ethics: 5, risk: 0, advice: "Professional boundaries." },
            { text: "Ask Boss", cash: 0, ethics: 5, risk: 0, advice: "Transparency works." }
        ]
    },
    {
        title: "Netflix Sharing",
        desc: "Sharing password with 5 friends vs buying own.",
        icon: "📺",
        options: [
            { text: "Share/Split", cash: 200, ethics: -5, risk: 0, advice: "Against Terms of Service." },
            { text: "Buy Own", cash: -800, ethics: 5, risk: 0, advice: "Supporting creators." },
            { text: "Pirate", cash: 0, ethics: -10, risk: 15, advice: "Malware risk." }
        ]
    },
    {
        title: "Maid's Salary",
        desc: "Maid was sick for 4 days. Cut pay?",
        icon: "🧹",
        options: [
            { text: "Cut Pay", cash: 500, ethics: -10, risk: 0, advice: "Lack of empathy." },
            { text: "Pay Full", cash: -500, ethics: 15, risk: 0, advice: "Compassion builds loyalty." },
            { text: "Cut 50%", cash: 0, ethics: 0, risk: 0, advice: "Middle ground." }
        ]
    },
    {
        title: "Electricity Meter",
        desc: "Tweak meter to save 50% on bills?",
        icon: "⚡",
        options: [
            { text: "Tweak it", cash: 5000, ethics: -25, risk: 40, advice: "Electricity theft is a non-bailable offense." },
            { text: "Pay Full", cash: -2000, ethics: 10, risk: 0, advice: "Honest living." },
            { text: "Solar Panel", cash: -10000, ethics: 20, risk: 0, advice: "Expensive now, cheap later. Green energy!" }
        ]
    },
    {
        title: "Wrong Change",
        desc: "Cashier gave ₹500 extra.",
        icon: "💵",
        options: [
            { text: "Keep it", cash: 500, ethics: -10, risk: 0, advice: "They pay from their salary." },
            { text: "Return it", cash: 0, ethics: 15, risk: 0, advice: "Integrity." },
            { text: "Donate", cash: -500, ethics: 0, risk: 0, advice: "Giving away stolen money isn't charity." }
        ]
    },
    {
        title: "Exam Cheating",
        desc: "Buy exam paper leak for ₹5,000?",
        icon: "📝",
        options: [
            { text: "Buy Paper", cash: -5000, ethics: -25, risk: 40, advice: "If caught, degree cancelled." },
            { text: "Study Hard", cash: 0, ethics: 10, risk: 0, advice: "Knowledge stays forever." },
            { text: "Report Seller", cash: 0, ethics: 20, risk: 10, advice: "Cleaning up the system." }
        ]
    },
    {
        title: "Insurance Fraud",
        desc: "Car scratch. Claim for a big dent to get extra cash?",
        icon: "🚗",
        options: [
            { text: "Do Fraud", cash: 5000, ethics: -20, risk: 25, advice: "Raises premiums for everyone." },
            { text: "Honest Claim", cash: -2000, ethics: 5, risk: 0, advice: "Peace of mind." },
            { text: "Ignore scratch", cash: 0, ethics: 0, risk: 0, advice: "It adds character." }
        ]
    }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let state = {
    cash: 40000,
    ethics: 50,
    risk: 0,
    voiceEnabled: true,
    availableQuestions: [],
    totalQuestions: 15, // Increased length
    currentQuestionCount: 0,
    gameActive: true
};

// ==========================================
// 3. UI ELEMENTS
// ==========================================
const ui = {
    cash: document.getElementById('cash-val'),
    ethics: document.getElementById('ethics-val'),
    riskBar: document.getElementById('risk-bar'),
    qCurrent: document.getElementById('q-current'),
    qTotal: document.getElementById('q-total'),
    title: document.getElementById('scenario-title'),
    desc: document.getElementById('scenario-desc'),
    icon: document.getElementById('scenario-icon'),
    optionsContainer: document.getElementById('options-container'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modal-title'),
    modalText: document.getElementById('modal-text'),
    modalIcon: document.getElementById('modal-icon'),
    statChange: document.getElementById('stat-change'),
    nextBtn: document.getElementById('next-btn'),
    voiceBtn: document.getElementById('toggle-voice')
};

// ==========================================
// 4. ANIMATION STYLES
// ==========================================
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes pop { 50% { transform: scale(1.1); } }
    @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(-1deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 90% { transform: translate(1px, 2px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); } }
    @keyframes fall { 0% { top: -10px; transform: rotate(0deg); opacity: 1; } 100% { top: 100vh; transform: rotate(360deg); opacity: 0; } }
    .modal-win { border: 4px solid #facc15 !important; box-shadow: 0 0 20px #facc15 !important; animation: pop 0.5s ease; background: #fff !important; }
    .modal-loss { border: 4px solid #ef4444 !important; box-shadow: 0 0 20px #ef4444 !important; animation: shake 0.5s; background: #fff1f2 !important; }
    .confetti { position: fixed; top: 0; width: 10px; height: 10px; background-color: #f00; z-index: 9999; pointer-events: none; }
`;
document.head.appendChild(styleSheet);

// ==========================================
// 5. AUDIO UTILS
// ==========================================
let voices = [];
function loadVoices() { voices = window.speechSynthesis.getVoices(); }
window.speechSynthesis.onvoiceschanged = loadVoices;

function speak(text) {
    if (!state.voiceEnabled) return;
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    const preferredVoice = voices.find(voice => 
        voice.name.includes("Google") && voice.lang.includes("en-IN") || 
        voice.name.includes("Rishi") || 
        voice.name.includes("Samantha") ||
        (voice.lang === "en-IN")
    );
    if (preferredVoice) speech.voice = preferredVoice;
    speech.lang = 'en-IN'; speech.rate = 0.95; speech.pitch = 1.05; 
    window.speechSynthesis.speak(speech);
}

function triggerConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// ==========================================
// 6. GAME LOGIC
// ==========================================

function initGame() {
    console.log("Initializing Game...");
    loadVoices();
    state.cash = 40000;
    state.ethics = 50;
    state.risk = 0;
    state.currentQuestionCount = 0;
    state.gameActive = true;
    
    state.availableQuestions = Array.from({length: scenarioPool.length}, (_, i) => i);
    
    ui.modal.classList.remove('modal-win', 'modal-loss', 'active');
    
    updateUI();
    loadRandomScenario();
}

function loadRandomScenario() {
    if (state.cash < 0) return endGame("Bankrupt! You ran out of funds.", "loss");
    if (state.ethics <= 0) return endGame("Socially Boycotted! Your reputation is ruined.", "loss");
    if (state.risk >= 100) return endGame("Jailed! You took too many legal risks.", "loss");
    
    if (state.currentQuestionCount >= state.totalQuestions || state.availableQuestions.length === 0) {
        return endGame("Congratulations! You are a responsible and balanced citizen!", "win");
    }

    const randomIndex = Math.floor(Math.random() * state.availableQuestions.length);
    const scenarioIndex = state.availableQuestions[randomIndex];
    state.availableQuestions.splice(randomIndex, 1); 
    
    const currentScenario = scenarioPool[scenarioIndex];
    state.currentQuestionCount++;

    ui.title.innerText = currentScenario.title;
    ui.desc.innerText = currentScenario.desc;
    ui.icon.innerText = currentScenario.icon;
    ui.qCurrent.innerText = state.currentQuestionCount;
    ui.qTotal.innerText = state.totalQuestions;

    ui.optionsContainer.innerHTML = ''; 

    currentScenario.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option'; 
        btn.innerText = opt.text;
        btn.onclick = (e) => handleChoice(opt, e.target); 
        ui.optionsContainer.appendChild(btn);
    });
}

function handleChoice(choice, btnElement) {
    const isGoodChoice = choice.ethics >= 0 && choice.risk === 0;

    if (isGoodChoice) {
        btnElement.classList.add('btn-correct'); // Green
    } else {
        btnElement.classList.add('btn-wrong');   // Red
    }

    const allBtns = document.querySelectorAll('.btn-option');
    allBtns.forEach(b => b.disabled = true);

    state.cash += choice.cash;
    state.ethics += choice.ethics;
    state.risk += choice.risk;

    if (state.ethics > 100) state.ethics = 100;
    if (state.risk < 0) state.risk = 0;

    updateUI();

    setTimeout(() => {
        showFeedback(choice);
    }, 600); 
}

function showFeedback(choice) {
    ui.modal.classList.remove('modal-win', 'modal-loss'); 
    ui.modalTitle.innerText = "Insight";
    ui.modalText.innerText = choice.advice;
    ui.modalIcon.innerText = choice.ethics >= 0 && choice.risk === 0 ? "✅" : "⚠️";
    
    let changes = [];
    if(choice.cash !== 0) changes.push(`${choice.cash > 0 ? '+' : ''}₹${choice.cash.toLocaleString()}`);
    if(choice.ethics !== 0) changes.push(`${choice.ethics > 0 ? '+' : ''}${choice.ethics} Ethics`);
    if(choice.risk !== 0) changes.push(`${choice.risk > 0 ? '+' : ''}${choice.risk}% Risk`);
    
    if (changes.length === 0) changes.push("No Stat Change");

    ui.statChange.innerText = changes.join(" | ");
    ui.nextBtn.innerText = "Next Situation";
    
    ui.nextBtn.onclick = () => {
        ui.modal.classList.remove('active');
        window.speechSynthesis.cancel();
        loadRandomScenario();
    };
    
    ui.modal.classList.add('active');
    speak(choice.advice);
}

function updateUI() {
    ui.cash.innerText = "₹" + state.cash.toLocaleString();
    ui.ethics.innerText = state.ethics;
    ui.riskBar.style.width = `${state.risk}%`;
    
    ui.ethics.style.color = state.ethics < 30 ? '#ef4444' : '#f59e0b';
    if(state.risk > 70) ui.riskBar.style.background = '#ef4444';
    else ui.riskBar.style.background = 'linear-gradient(90deg, #facc15, #f97316)';
}

function endGame(msg, type) {
    ui.modalTitle.innerText = type === "win" ? "VICTORY!" : "GAME OVER";
    ui.modalText.innerText = msg;
    ui.statChange.innerText = `Final Balance: ₹${state.cash.toLocaleString()} | Ethics: ${state.ethics}`;
    ui.nextBtn.innerText = "Restart Simulation";
    
    if (type === 'win') {
        ui.modalIcon.innerText = "🏆";
        ui.modal.classList.add('modal-win');
        triggerConfetti(); 
    } else {
        ui.modalIcon.innerText = "☠️";
        ui.modal.classList.add('modal-loss'); 
    }

    ui.nextBtn.onclick = () => location.reload();
    ui.modal.classList.add('active');
    speak(msg);
}

ui.voiceBtn.onclick = () => {
    state.voiceEnabled = !state.voiceEnabled;
    ui.voiceBtn.innerText = state.voiceEnabled ? "🔊 Voice: ON" : "🔇 Voice: OFF";
    window.speechSynthesis.cancel();
};

// ==========================================
// 7. STARTUP
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});