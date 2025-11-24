import classes from './services.module.scss';
import { Title } from '@/components/shared/title';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';
import { servicesConfig } from '@config/services.config';
import { Subtitle } from '@/components/shared/subtitle';
import Tilt from 'react-parallax-tilt';
import classNames from '@/shared/lib/classNames';

export const Services = () => {
    const { services, title } = servicesConfig;
    return (
        <div className={classes.services}>
            <div className={'_container-default'}>
                <Title>{title}</Title>

                <div className={classes.body}>
                    {services.map(({ title, id, img, items }) => (
                        <Tilt
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            // glareEnable={true}
                            // glareColor="#463F3F44"
                            perspective={1200}
                            className={classNames(classes.wrapper, {}, [
                                '_tilt',
                            ])}
                        >
                            <div
                                className={classNames(classes.block, {}, [
                                    '_tilt',
                                ])}
                                key={id}
                            >
                                <div className={classes.inner}>
                                    <Subtitle>{title}</Subtitle>
                                </div>

                                <div className={classes.service}>
                                    <div className={classes.img}>
                                        <img src={img} alt="serviceImg" />
                                    </div>
                                    <div className={classes.items}>
                                        {items.map(({ id, title, price }) => (
                                            <div
                                                className={classes.item}
                                                key={id}
                                            >
                                                <div
                                                    className={
                                                        classes.itemTitle
                                                    }
                                                >
                                                    {title}
                                                </div>
                                                <div
                                                    className={
                                                        classes.itemPrice
                                                    }
                                                >
                                                    {price}
                                                </div>
                                                <div className={classes.btn}>
                                                    <AppButton
                                                        variant={
                                                            ButtonVariants.GOLD_NON_RADIUS
                                                        }
                                                    >
                                                        Записаться
                                                    </AppButton>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    );
};
