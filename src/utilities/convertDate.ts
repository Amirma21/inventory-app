export function convertingDate(date: number) {
    const ourDate = new Date(date).toDateString()
    const splited = ourDate.split(' ')
    return `${splited[1]} ${splited[2]}`
}