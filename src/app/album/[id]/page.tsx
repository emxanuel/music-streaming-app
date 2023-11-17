import { TSong } from '@/types'
import React, {useState, useEffect} from 'react'

const Album = ({params}: {params: {id: number}}) => {
    const [songs, setSongs] = useState<TSong[]>([])

    useEffect(() => {
        
    })

    return (
        <div>  
        </div>
    )
}

export default Album