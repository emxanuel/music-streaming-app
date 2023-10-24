import crypto from 'crypto'

function sha256(value: string): string {
    const hash = crypto.createHash('sha256')
    hash.update(value)
    return hash.digest('hex')
}

export {
    sha256
}