import classes from './contacts.module.scss';
import { Title } from '@/components/shared/title';
import contactsConfig from '@config/contacts.config';
import { YandexMap } from '@/components/map';
import { Link } from 'react-router';

export const Contacts = () => {
    const { items, title } = contactsConfig;
    return (
        <div className={classes.contacts}>
            <div className="_container-default">
                <Title>{title}</Title>
                <div className={classes.row}>
                    <div className={classes.info}>
                        {items.map(({ id, name, note, icon, link }) => (
                            <div key={id} className={classes.item}>
                                <div className={classes.img}>
                                    <img src={icon} alt="icon" />
                                </div>
                                <div className={classes.body}>
                                    <div className={classes.name}>{name}</div>
                                    {link ? (
                                        <a href={link} className={classes.note}>
                                            {note}
                                        </a>
                                    ) : (
                                        <div className={classes.note}>
                                            {note}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={classes.map}>
                        <YandexMap />
                    </div>
                </div>
            </div>
        </div>
    );
};
