import { useEffect, useState } from 'react';
import classes from './cosmetics.module.scss';
import cosmeticsConfig from '@config/cosmetics.config';
import { Title } from '@/components/shared/title';
import { CardItem } from '@/components/cardItem/cardItem';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';

export const Cosmetics = () => {
    const { items, title } = cosmeticsConfig;
    const ITEMS_PER_PAGE = 4;

    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setIsExpanded(visibleCount >= items.length);
    }, [visibleCount, items.length]);

    const visibleItems = items.slice(0, visibleCount);
    const hasMoreItems = visibleCount < items.length;

    const handleShowMore = () => {
        const nextCount = Math.min(visibleCount + ITEMS_PER_PAGE, items.length);
        setVisibleCount(nextCount);
    };

    const handleShowLess = () => {
        setVisibleCount(ITEMS_PER_PAGE);
    };

    return (
        <div className={classes.cosmetics}>
            <div className="_container-default">
                <Title>{title}</Title>
                <div className={classes.row}>
                    {visibleItems.map(
                        ({ id, img, title: name, price, description }) => (
                            <div key={id} className={classes.column}>
                                <CardItem
                                    id={id}
                                    title={title}
                                    name={name}
                                    price={price}
                                    description={description}
                                    img={img}
                                />
                            </div>
                        )
                    )}
                </div>

                <div className={classes.showMoreBtn} onClick={handleShowMore}>
                    {hasMoreItems && (
                        <AppButton variant={ButtonVariants.WHITE_NON_RADIUS}>
                            Смотреть больше
                        </AppButton>
                    )}
                </div>
            </div>
        </div>
    );
};
