export default function timeFormat(seconds: number) { 
    const min = Math.trunc(seconds / 60)
    const seg = seconds % 60

    if (seg.toString().length > 1) {
        return `${min}:${seg}`        
    }
    
    return `${min}:0${seg}`
}