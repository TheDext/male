import classes from './certificates.module.scss';
import certificatesConfig from '@config/certificates.config';
import { CardItem } from '@/components/cardItem/cardItem';
import { Title } from '@/components/shared/title';

export const Certificates = ({ setShowBueModal }) => {
    const { title, subtitle, note, items } = certificatesConfig;

    return (
        <div className={classes.certificates}>
            <div className="_container-default">
                <Title>{title}</Title>
                <div className={classes.subtitle}>{subtitle}</div>
                <div className={classes.note}>{note}</div>
                <div className={classes.row}>
                    {items.map(({ id, img, name, price, description }) => (
                        <div className={classes.column} key={id}>
                            <CardItem
                                img={img}
                                name={name}
                                price={price}
                                description={description}
                                setShowBueModal={setShowBueModal}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
