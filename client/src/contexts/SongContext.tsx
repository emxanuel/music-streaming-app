import React, { createContext, useContext, useState } from 'react'
import { Howl } from 'howler'
import { TSong } from '@/types'
import { emptySong } from '@/utilities/emptyObjects'

interface IProps {
    children: React.ReactNode
}

type audioType = {
    info: TSong,
    audio: Howl,
    id?: number
}

type audioContextType = {
    song: audioType
    setSong: (audio: audioType) => void
}

const audioContext = createContext<audioContextType>({song: {info: emptySong, audio: new Howl({src: [''], format: 'mp3'})}, setSong: (audio: audioType) => {}})


const AudioProvider: React.FC<IProps> = ({ children }) => {
    const [audio, dispatch] = useState<audioType>({info: emptySong, audio: new Howl({src: [''], format: 'mp3'})})
    const setSong = (audio: audioType) => {
        dispatch(audio)
    }

    return (
        <audioContext.Provider value={{song: audio, setSong}}>
            {children}
        </audioContext.Provider>
    )
}

const useAudioContext = () => {
    return useContext(audioContext)
}

export {AudioProvider, useAudioContext}