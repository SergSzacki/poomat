let shifts = loadShifts();

function calculateDefect(counter, finished) {
    return counter - finished;
}

function addShift(shift) {
    shifts.push(shift);
    saveShifts(shifts);
}
