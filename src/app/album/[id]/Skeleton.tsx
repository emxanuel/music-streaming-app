import React from 'react'
import { Skeleton } from '@nextui-org/react'

const SkeletonAlbum = () => {
    return (
        <div className='flex flex-col gap-12 h-full'>
            <header className='flex items-center justify-center gap-12 pt-3'>
                <Skeleton
                    className='w-40 aspect-square rounded-full '
                />
                <div className='flex flex-col gap-5'>
                    <Skeleton className='w-72 h-8 rounded-md' />
                    <Skeleton className='w-52 h-4 rounded-md' />
                </div>
            </header>
            <main className='flex flex-col gap-4 items-center w-full overflow-y-scroll pb-20'>
                <div className='flex flex-col gap-2'>
                    {Array(10).fill(0).map((_, index) => (
                        <div key={index} className='flex items-center gap-4'>
                            <Skeleton className='w-16 aspect-square py-1' />
                            <div className='flex gap-2 flex-col'>
                                <Skeleton className='w-96 h-6 py-1 rounded-md' />
                                <Skeleton className='w-80 h-3 py-1 rounded-md' />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default SkeletonAlbum