import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Ini Navbar</h1>
            </div>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
        </nav>
    )
}
