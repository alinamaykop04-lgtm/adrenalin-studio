import './globals.css';
import Link from 'next/link';
export const metadata={title:'ADRENALIN STUDIO',description:'Visual art / space / digital'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><div className="shell"><header className="header"><Link className="brand" href="/">ADRENALIN STUDIO</Link><nav className="nav"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav></header>{children}<footer id="contact" className="footer"><span>ADRENALIN STUDIO</span><span>Art · Space · Digital</span><span>Contact →</span></footer></div></body></html>}
