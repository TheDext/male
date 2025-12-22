import classes from './certificates.module.scss';
import certificatesConfig from '@config/certificates.config';
import { CardItem } from '@/components/cardItem/cardItem';
import { Title } from '@/components/shared/title';
import { useInView } from 'react-intersection-observer';
import classNames from '@/shared/lib/classNames';
import useMatchMedia from '@/core/hooks/useMatchMedia';

export const Certificates = ({ setShowBueModal }) => {
    const { title, subtitle, note, items } = certificatesConfig;
    const { isDesktop } = useMatchMedia();
    const { ref, inView } = useInView({
        threshold: isDesktop ? 0.3 : 0,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={classNames(
                classes.certificates,
                { [classes._inView]: inView },
                []
            )}
        >
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
