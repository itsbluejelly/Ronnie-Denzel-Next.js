// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import Link from 'next/link'
import Image from 'next/image'
    // IMPORTING IMAGES
import dojoLogo from '../../../public/logos/dojo-logo.png'

// A NAVBAR FUNCTION THAT GENERATES A NAVBAR ON DEFAULT EXPORT
export default function Navbar(){
    return(
        <nav>
            <Image
                src={dojoLogo}
                loading='lazy'
                width={70}
                quality={100}
                placeholder='blur'
            />

            <h1>Dojo Helpdesk</h1>
            <Link href={'/'}>Dashboard</Link>
            <Link href={'/tickets'}>Tickets</Link>
        </nav>
    )
}