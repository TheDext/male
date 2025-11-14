import classes from './nav.module.scss';
import nav from '@config/nav.config';
import { Link } from 'react-router';

export const Nav = () => (
    <nav className={classes.nav}>
        <ul className={classes.list}>
            {nav.map(({ id, label, link }) => (
                <Link key={id} to={link} className={classes.link}>
                    <li>{label}</li>
                </Link>
            ))}
        </ul>
    </nav>
);
