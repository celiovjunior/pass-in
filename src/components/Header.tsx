import nlwUniteIcon from '../assets/nlw-unite-icon.svg';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} alt="Nlw Logo" />

      <nav className='flex items-center gap-5'>
        <NavLink  href='/events'>Events</NavLink>
        <NavLink href='/attendants'>Attendants</NavLink>
      </nav>

    </div>
  )
}