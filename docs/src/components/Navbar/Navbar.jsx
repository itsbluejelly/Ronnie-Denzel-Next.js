// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import Link from 'next/link'

// A NAVBAR FUNCTION THAT GENERATES A NAVBAR ON DEFAULT EXPORT
export default function Navbar(){
    return(
        <nav>
            <Link href={'/'}>Dojo Helpdesk</Link>
            <Link href={'/tickets'}>Tickets Page</Link>
        </nav>
    )
}