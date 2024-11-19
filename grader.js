function grader(score) {
    switch(true){
        case (score <= 1 && score >= 0.9):
            return 'A'
        case (score < 0.9 && score >= 0.8):
            return 'B'
        case (score < 0.8 && score >= 0.7):
            return 'C'
        case (score < 0.7 && score >= 0.6):
            return 'D'
        default:
            return 'F'
    }
}