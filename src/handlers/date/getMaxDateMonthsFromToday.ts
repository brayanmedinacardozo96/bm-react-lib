export function getMaxDateMonthsFromToday(month: number) {
    const today = new Date();
    today.setMonth(today.getMonth() + month);
    if (today.getDate() !== new Date().getDate()) {
        today.setDate(0);
    }
    return today.toISOString().split("T")[0];
}