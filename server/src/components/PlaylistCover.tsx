import React from 'react'

interface Props {
    color: number,
    shape: number
}

const PlaylistCover: React.FC<Props> = ({ color, shape }) => {
    const colors = [
        '#C81D25',
        '#23395B',
        '#0C8346'
    ]
    return (
        shape === 0 ? (
            <div className='opacity-50'>
                <div className={`absolute left-[-10px] bottom-0 w-10 h-10 rounded-full`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute bottom-0 w-full h-6`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute top-[-10px] w-24 rounded-full left-[-10px] h-7`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute top-0 left-[-15px] w-10 h-10 rounded-full`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute w-12 h-12 rounded-full top-[-12px] left-[7px]`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute w-12 h-12 rounded-full top-[-20px] right-[-15px]`} style={{
                    backgroundColor: colors[color]
                }}/>
            </div>
        ) : shape === 1 && (
            <div className='opacity-50'>
                <div className={`absolute bottom-0 w-full h-6`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute top-[-10px] right-[-15px] rounded-full w-12 h-12`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute top-[-30px] right-[-6px] rounded-full w-14 h-14`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute bottom-0 left-[-15px] rounded-full w-16 h-12`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute bottom-[-10px] left-[30px] rounded-full w-12 h-12`} style={{
                    backgroundColor: colors[color]
                }}/>
                <div className={`absolute bottom-[20px] left-[-40px] rounded-full w-16 h-12`} style={{
                    backgroundColor: colors[color]
                }}/>
            </div>
        )
    )
}

export default PlaylistCover