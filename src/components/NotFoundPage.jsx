import React from 'react'
import { Link } from 'react-router-dom'


function NotFoundPage() {
    return (
        <>
            <>
                <div className='flex flex-col items-center justify-center h-screen text-center text-6xl'>
                    <span>404 Page Not Found</span>
                    <div className='m-4'>
                        <Link to='/'>Home</Link>
                    </div>
                </div>
            </>
        </>
    )
}

export default NotFoundPage
