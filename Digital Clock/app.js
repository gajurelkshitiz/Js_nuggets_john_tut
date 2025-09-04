// Digital clock in JS
const clock = document.querySelector('.clock');
const dateBox = document.getElementById('dateBox');

// Pattern: 2 digits, colon, 2 digits, colon, 2 digits
const structure = [2, ":", 2, ":", 2];

structure.forEach(part => {
    if(part === ":") {
        const colon = document.createElement("div");
        colon.className = "colon";
        colon.textContent = ":";
        clock.appendChild(colon);
    }
    else {
        for(let i=0; i < part; i++) {
            const digit = document.createElement('div');
            digit.className="digit";
            digit.textContent="0";
            clock.appendChild(digit);
        }
    }
});

function formatDate(date) {
    // Example: Thursday, 04 September 2025
    return date.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
}

function updateDateBox(now) {
    const dateStr = formatDate(now);
    if (dateBox.textContent !== dateStr) {
        dateBox.textContent = dateStr;
        dateBox.classList.add('flip');
        setTimeout(() => dateBox.classList.remove('flip'), 600);
    }
}

function updateClock() {
    const now = new Date();
    const itemStr = now.toLocaleTimeString("en-GB");
    const numbers = itemStr.replace(/:/g, "").split("");

    const digits = document.querySelectorAll(".digit");
    numbers.forEach((num, i) => {
        if (digits[i].textContent !== num) {
            digits[i].textContent = num;
            digits[i].classList.add("flip");
            setTimeout(() => digits[i].classList.remove("flip"), 500);
        }
    });

    updateDateBox(now);
}

updateClock();
setInterval(updateClock, 1000);