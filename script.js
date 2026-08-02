// ==========================================
// ENVI'S FRIENDSHIP DAY WEBSITE
// ==========================================


// ---------- PAGE NAVIGATION ----------

function go(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }

    window.scrollTo(0, 0);
}


// ---------- FLOATING EMOJIS ----------

const floatingEmojis = [
    "✨",
    "♡",
    "🌸",
    "🦋",
    "💗",
    "⭐",
    "🎀"
];

function createFloatingEmoji() {
    const container = document.getElementById("floating");

    if (!container) return;

    const emoji = document.createElement("div");

    emoji.className = "float";

    emoji.innerText =
        floatingEmojis[
            Math.floor(Math.random() * floatingEmojis.length)
        ];

    emoji.style.left =
        Math.random() * 100 + "%";

    emoji.style.fontSize =
        (12 + Math.random() * 18) + "px";

    emoji.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    container.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 12000);
}

setInterval(createFloatingEmoji, 700);


// ---------- OPEN FIRST GIFT ----------

function openGift() {
    for (let i = 0; i < 12; i++) {
        setTimeout(createFloatingEmoji, i * 100);
    }

    setTimeout(() => {
        go("gift");
    }, 500);
}


// ---------- OPEN ENVELOPES ----------

function openEnvelope(number) {
    const envelope =
        document.getElementById("env" + number);

    if (!envelope) return;

    envelope.classList.add("open");

    if (number === 1) {
        setTimeout(() => {
            go("shortLetter");

            typeWriter(
                "shortText",
                `No matter how much life changes, I hope one thing never does — our friendship.

I hope we always stay the same idiots who can talk about absolutely anything and still understand each other without saying much. 🤍`,
                35,
                "toMemories"
            );
        }, 1100);
    }

    if (number === 2) {
        setTimeout(() => {
            go("bigLetter");

            typeWriter(
                "bigText",
                bigLetterText,
                20,
                "toFinal"
            );
        }, 1100);
    }
}


// ---------- SHORT LETTER ----------

const shortLetterText = `
No matter how much life changes, I hope one thing never does — our friendship.

I hope we always stay the same idiots who can talk about absolutely anything and still understand each other without saying much. 🤍
`;


// ---------- BIG LETTER ----------

const bigLetterText = `
Happy Friendship Day! 🤍

I honestly don't know where to begin because there are so many things I want to say.

Thank you for being the kind of friend everyone wishes they had. Thank you for listening to my endless nonsense, laughing with me over the dumbest things, supporting me when I needed someone, and making even ordinary days feel special.

Some of my favorite memories exist because of you.

No matter how much life changes, I hope one thing never does — our friendship. I hope we always stay the same idiots who can talk about absolutely anything and still understand each other without saying much.

Waise ek baat bolu... ab naya banda hai toh meri zarurat kam ho gayi hai, aur Kota mein naye dost bhi mil gaye hain. 😒😂

Bas mujhe completely replace mat kar dena, warna Friendship Day pe strike kar dungi!

Jokes aside, I'm really proud of you.

I hope you meet amazing people, make beautiful memories, and achieve everything you've dreamed of. You deserve all the happiness in the world.

Just promise me one thing — that no matter where life takes us, we'll never become strangers.

Distance, new friends, or even new chapters in life should never change what we have.

Thank you for being my best friend, my favorite person to annoy, and someone I can always count on.

Happy Friendship Day once again.

I love you so much, and I'm lucky to have you in my life.

With lots of love,

Your forever annoying best friend. 🤍
`;


// ---------- TYPEWRITER EFFECT ----------

function typeWriter(
    elementId,
    text,
    speed = 30,
    buttonId = null
) {
    const element =
        document.getElementById(elementId);

    if (!element) return;

    element.innerHTML = "";

    if (buttonId) {
        const button =
            document.getElementById(buttonId);

        if (button) {
            button.classList.add("hidden");
        }
    }

    let index = 0;

    function write() {
        if (index < text.length) {
            element.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(write, speed);
        } else {
            if (buttonId) {
                const button =
                    document.getElementById(buttonId);

                if (button) {
                    button.classList.remove("hidden");
                }
            }
        }
    }

    write();
}


// ==========================================
// MEMORY PHOTOS
// ==========================================

const memories = [
    {
        image: "photo1.png",
        title: "A little memory ♡",
        text: "One of those moments I'll always remember."
    },
    {
        image: "photo2.png",
        title: "Us being us 🤍",
        text: "Another memory that makes me smile."
    },
    {
        image: "photo3.png",
        title: "Good times ✨",
        text: "Some moments are just too special to forget."
    },
    {
        image: "photo4.png",
        title: "Forever a memory 🌸",
        text: "And hopefully, there are many more to come."
    }
];


// ---------- OPEN MEMORY ----------

let openedMemories = 0;

function memory(number) {
    const selected =
        memories[number];

    if (!selected) return;

    const image =
        document.getElementById("memoryImg");

    const title =
        document.getElementById("memoryTitle");

    const caption =
        document.getElementById("memoryCaption");

    image.src = selected.image;

    image.alt = "A memory of us";

    title.innerText =
        selected.title;

    caption.innerText =
        selected.text;

    const modal =
        document.getElementById("modal");

    modal.classList.add("show");

    openedMemories++;

    if (openedMemories >= 4) {
        const nextButton =
            document.getElementById("toBig");

        if (nextButton) {
            nextButton.classList.remove("hidden");
        }
    }
}


// ---------- CLOSE MEMORY ----------

function closeMemory() {
    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.remove("show");
    }
}


// ---------- CLOSE MODAL WHEN CLICKING OUTSIDE ----------

const modal =
    document.getElementById("modal");

if (modal) {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeMemory();
        }
    });
}


// ---------- ESC KEY CLOSES PHOTO ----------

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMemory();
    }
});


// ---------- EXTRA SPARKLES ----------

function sparkleBurst() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingEmoji();
        }, i * 150);
    }
}


// ---------- START ----------

document.addEventListener("DOMContentLoaded", function() {
    go("intro");
});

function openFinalGift() {
    const gift = document.getElementById("finalGift");
    const reveal = document.getElementById("finalReveal");
    const hint = document.getElementById("finalHint");

    gift.classList.add("open");

    hint.innerHTML = "wait... there's something inside ✨";

    setTimeout(() => {
        reveal.classList.add("show");
        hint.innerHTML = "♡";
    }, 850);
}


function finalSurprise() {
    const message =
        document.getElementById("tinyFinalMessage");

    message.innerHTML =
        "Okay, now go annoy someone else. 😭🤍";

    for (let i = 0; i < 18; i++) {
        const sparkle = document.createElement("span");

        sparkle.innerHTML =
            ["✨", "💕", "♡", "🌸", "✦"][Math.floor(Math.random() * 5)];

        sparkle.style.position = "fixed";
        sparkle.style.left = "50%";
        sparkle.style.top = "55%";
        sparkle.style.zIndex = "999";

        sparkle.style.fontSize =
            (12 + Math.random() * 15) + "px";

        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 180;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        sparkle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(.5)",
                    opacity: 0
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.2)`,
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x * 1.3}px), calc(-50% + ${y * 1.3}px)) scale(.7)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            sparkle.remove();
        }, 1200);
    }
}

function playMusic() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.35;
    music.play();
}
