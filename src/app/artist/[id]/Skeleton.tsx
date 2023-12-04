import React from 'react'
import { Skeleton } from '@nextui-org/react'

const SkeletonArtist = () => {
    return (
        <div className='flex flex-col gap-12'>
            <header className='flex items-center justify-center gap-12 pt-3'>
                <Skeleton
                    className='w-40 aspect-square rounded-full '
                />
                <div className='flex flex-col gap-5'>
                    <Skeleton className='w-72 h-8 rounded-md' />
                    <Skeleton className='w-52 h-4 rounded-md' />
                </div>
            </header>
            <section className='flex justify-between items-center '>
                <div className='flex flex-col gap-4 items-center w-1/2'>
                    <Skeleton className='w-60 h-6 rounded-md' />
                    <div className='flex flex-col gap-2'>
                        {Array(5).fill(0).map((_, index) => (
                            <div key={index} className='flex items-center gap-4'>
                                <Skeleton className='w-12 aspect-square py-1' />
                                <Skeleton className='w-52 h-3 py-1 rounded-md' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center w-1/2'>
                    <Skeleton className='w-60 h-6 rounded-md' />
                    <div className='flex flex-col gap-2'>
                        {Array(5).fill(0).map((_, index) => (
                            <div key={index} className='flex items-center gap-4'>
                                <Skeleton className='w-12 aspect-square py-1' />
                                <Skeleton className='w-52 h-3 py-1 rounded-md' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkeletonArtist