import utils from "./utils.mjs";

/**
 * Gets the stored date of the last visit
 * @returns Date | null
 */
function getLastVisitDate() {
    const storedValue = localStorage.getItem('lastVisit');
    if (storedValue) {
        const storedInt = parseInt(storedValue);
        return new Date(storedInt);
    } else {
        return null;
    }
}

/**
 * Sets the last visit date.
 * @param {Date} now 
 */
function setLastVisitDate(now) {
    localStorage.setItem('lastVisit', now.getTime())
}

/**
 * Calculates the number of days between two dates.
 * @param {Date} lastVisit 
 * @param {Date} now 
 * @returns {number} The number of days between the two dates.
 */
function getDaysSinceLastVisit(lastVisit, now) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const timeDifference = now.getTime() - lastVisit.getTime();
    return Math.floor(timeDifference/millisecondsPerDay);
}

function setVisitationMessage(message) {
    utils.qs('.visitation-message').textContent = message;
}

function Page() {
    const now = new Date();
    const lastVisitDate = getLastVisitDate();
    if (!lastVisitDate) {
        setVisitationMessage('Welcome! Let us know if you have any questions.')
    } else {
        const daysSinceLastVisit = getDaysSinceLastVisit(lastVisitDate, now);
        if (daysSinceLastVisit === 0) {
            setVisitationMessage('Back so soon! Awesome!');
        } else {
            setVisitationMessage(`You last visited ${daysSinceLastVisit} days ago.`)
        }
    }
    setLastVisitDate(now);
}

Page();