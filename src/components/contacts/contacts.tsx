import classes from './contacts.module.scss';
import { Title } from '@/components/shared/title';
import contactsConfig from '@config/contacts.config';
import { YandexMap } from '@/components/map';

export const Contacts = () => {
    const { items, title } = contactsConfig;
    return (
        <div className={classes.contacts}>
            <div className="_container-default">
                <Title>{title}</Title>
                <div className={classes.row}>
                    <div className={classes.info}>
                        {items.map(({ id, name, note, icon }) => (
                            <div key={id} className={classes.item}>
                                <div className={classes.img}>
                                    <img src={icon} alt="icon" />
                                </div>
                                <div className={classes.body}>
                                    <div className={classes.name}>{name}</div>
                                    <div className={classes.note}>{note}</div>
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
