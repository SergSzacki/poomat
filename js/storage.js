const STORAGE_KEY = "poomat_shifts";

function loadShifts() {
    return JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || [];
}
function saveShifts(shifts) {
    localStorage.setItem(
        STORAGE_KEY, JSON.stringify(shifts)
    );
}
