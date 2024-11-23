const facts = [
    "I am a tech enthusiast with a passion for innovation.",
    "I have significant experience in IoT and hardware development.",
    "I am deeply interested in AI and prompt engineering.",
    "I have expertise in full-stack web development.",
    "I am skilled in Android app development, building impactful solutions."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
