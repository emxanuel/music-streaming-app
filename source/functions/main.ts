function toHex24(value: string): string {
    const regex = /^[0-9a-fA-F]$/
    if (typeof value === 'string' && regex.test(value)) {
        return value;
    } else if(typeof value === 'string' && !regex.test(value)){
        return value.padStart(24, '0').toString()
    } else {
        return '';
    }
}

export {
    toHex24
}