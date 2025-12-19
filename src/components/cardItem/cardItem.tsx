import classes from './cardItem.module.scss';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';
import { useEffect, useState } from 'react';
import { CosmeticsModal } from '@/components/cosmeticsModal';
import { bodyLock } from '@/shared/lib/bodyLock';

export const CardItem = ({
    img,
    description,
    name,
    price,
    setShowBueModal,
    sections,
}) => {
    const [showCosmeticModal, setShowCosmeticModal] = useState(false);
    const checkTarget = (e) => {
        console.log(e);
        if (e.target.id !== 'appBtn' && sections) {
            setShowCosmeticModal(true);
        }
    };

    useEffect(() => {
        if (showCosmeticModal) {
            bodyLock.enable();
        } else {
            bodyLock.disable();
        }
    }, [showCosmeticModal]);

    return (
        <>
            <div className={classes.item} onClick={(e) => checkTarget(e)}>
                <img src={img} alt="cosmetic" />
                <div className={classes.body}>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.description}>{description}</div>
                    <div className={classes.price}>{price} ₽</div>
                    <div
                        className={classes.btn}
                        onClick={() => setShowBueModal(true)}
                    >
                        <AppButton variant={ButtonVariants.WHITE_NON_RADIUS}>
                            Купить
                        </AppButton>
                    </div>
                </div>
            </div>
            {showCosmeticModal && sections && (
                <CosmeticsModal
                    setShowCosmeticModal={setShowCosmeticModal}
                    setShowBueModal={setShowBueModal}
                    sections={sections}
                    img={img}
                    name={name}
                    price={price}
                />
            )}
        </>
    );
};
