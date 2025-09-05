
// Digital Clock Module

// Digital Clock Module with AD | BS Toggle
(function DigitalClockModule() {
    // DOM Elements
    const clock = document.querySelector('.clock');
    const dateBox = document.getElementById('dateBox');
    const toggleBtn = document.getElementById('toggleCalendar');

    // Clock structure: [HH, :, MM, :, SS]
    const structure = [2, ':', 2, ':', 2];
    let calendarType = 'AD'; // 'AD' or 'BS'

    // Nepali numerals and months
    const nepaliNumbers = ['०','१','२','३','४','५','६','७','८','९'];
    const nepaliWeekdays = ['आइतबार','सोमबार','मंगलबार','बुधबार','बिहीबार','शुक्रबार','शनिबार'];
    const nepaliMonths = ['बैशाख','जेठ','असार','साउन','भदौ','आश्विन','कार्तिक','मंसिर','पुष','माघ','फाल्गुण','चैत्र'];

    // Initialize clock digits and colons
    function createClockElements() {
        structure.forEach(part => {
            if (part === ':') {
                const colon = document.createElement('div');
                colon.className = 'colon';
                colon.textContent = ':';
                clock.appendChild(colon);
            } else {
                for (let i = 0; i < part; i++) {
                    const digit = document.createElement('div');
                    digit.className = 'digit';
                    digit.textContent = '0';
                    clock.appendChild(digit);
                }
            }
        });
    }

    // Format AD date for display
    function formatADDate(date) {
        return date.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });
    }

    // Convert AD date to BS (Bikram Sambat) - scratch implementation
    function convertToBS(adDate) {
        // This is a simplified scratch implementation for reference only
        // For real conversion, use a library or official conversion table
        // Here, we just add 56 years and 8 months (approximate)
        let bsYear = adDate.getFullYear() + 56;
        let bsMonth = adDate.getMonth() + 9;
        let bsDay = adDate.getDate() + 15;
        let bsWeekday = adDate.getDay();
        if (bsMonth > 12) {
            bsYear += 1;
            bsMonth -= 12;
        }
        return {
            year: bsYear,
            month: bsMonth,
            day: bsDay,
            weekday: bsWeekday
        };
    }

    // Format BS date in Nepali
    function formatBSDate(date) {
        const bs = convertToBS(date);
        // Convert numbers to Nepali
        function toNepaliNum(num) {
            return String(num).split('').map(d => nepaliNumbers[parseInt(d,10)] || d).join('');
        }
        const weekday = nepaliWeekdays[bs.weekday];
        const month = nepaliMonths[bs.month-1];
        return `${weekday}, ${toNepaliNum(bs.day)} ${month} ${toNepaliNum(bs.year)}`;
    }

    // Update the date box with animation
    function updateDateBox(date) {
        let dateStr;
        if (calendarType === 'AD') {
            dateStr = formatADDate(date);
        } else {
            dateStr = formatBSDate(date);
        }
        if (dateBox.textContent !== dateStr) {
            dateBox.textContent = dateStr;
            dateBox.classList.add('flip');
            setTimeout(() => dateBox.classList.remove('flip'), 600);
        }
    }

    // Update the clock digits with animation
    function updateClockDigits(date) {
        let timeStr;
        if (calendarType === 'AD') {
            timeStr = date.toLocaleTimeString('en-GB');
        } else {
            // Convert time to Nepali numerals
            timeStr = date.toLocaleTimeString('en-GB').replace(/\d/g, d => nepaliNumbers[parseInt(d,10)]);
        }
        const numbers = timeStr.replace(/:/g, '').split('');
        const digits = document.querySelectorAll('.digit');
        numbers.forEach((num, i) => {
            if (digits[i].textContent !== num) {
                digits[i].textContent = num;
                digits[i].classList.add('flip');
                setTimeout(() => digits[i].classList.remove('flip'), 500);
            }
        });
    }

    // Main update function
    function updateDateTime() {
        const now = new Date();
        updateClockDigits(now);
        updateDateBox(now);
    }

    // Toggle calendar type
    function toggleCalendar() {
        calendarType = calendarType === 'AD' ? 'BS' : 'AD';
        toggleBtn.textContent = calendarType === 'AD' ? 'AD | BS' : 'BS | AD';
        updateDateTime();
    }

    // Initialize and start interval
    function init() {
        createClockElements();
        updateDateTime();
        setInterval(updateDateTime, 1000);
        toggleBtn.addEventListener('click', toggleCalendar);
    }

    // Start the clock
    init();
})();