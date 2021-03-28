
export function calcualteScore(percentage) {
    let result = 0
    if (percentage >= 80) {
        result = 0.875
    } else if (percentage >= 71 && percentage < 80) {
        result = 0.675
    } else if (percentage >= 34 && percentage < 71) {
        result = 0.375
    } else {
        result = 0.125
    }
    return result
}