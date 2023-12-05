import React from 'react'
import { Skeleton } from '@nextui-org/react'

const SkeletonSearch = () => {
    return (
        <div className='w-full flex flex-col gap-3 py-5'>
            {Array(7).fill(0).map((_, index) => (
                <div key={index} className='flex items-center w-full justify-around'>
                    <Skeleton className='w-24 aspect-square' />
                    <div className='flex gap-1 flex-col'>
                        <Skeleton className='w-80 h-5 rounded-md'/>
                        <Skeleton className='w-60 h-3 rounded-md'/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonSearch