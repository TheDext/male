import classes from './cosmeticsModal.module.scss';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';
import closeIcon from '@icons/close.png';
export const CosmeticsModal = ({
    sections,
    img,
    name,
    price,
    setShowCosmeticModal,
    setShowBueModal,
}) => {
    const ref = useRef(null);
    useClickAway(ref, () => {
        setShowCosmeticModal(false);
    }, ['click']);
    return (
        <div className="modal">
            <div className="modal__body" ref={ref}>
                <div
                    className="modal__close"
                    onClick={() => setShowCosmeticModal(false)}
                >
                    <img src={closeIcon} alt="closeIcon" />
                </div>
                <div className="modal__content">
                    <div className={classes.row}>
                        <div className={classes.img}>
                            <img src={img} alt="cosmetic" />
                        </div>
                        <div className={classes.body}>
                            <div className={classes.title}>{name}</div>
                            <div className={classes.descriptions}>
                                {sections.map(({ title, content }) => (
                                    <div className={classes.block}>
                                        <div className={classes.blockTitle}>
                                            {title}
                                        </div>
                                        {content.map((item) => (
                                            <div
                                                className={
                                                    classes.blockParagraph
                                                }
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div
                                className={classes.price}
                                onClick={() => setShowBueModal(true)}
                            >
                                {price} ₽
                            </div>
                            <div
                                className={classes.btn}
                                onClick={() => setShowBueModal(true)}
                            >
                                <AppButton
                                    variant={ButtonVariants.WHITE_NON_RADIUS}
                                >
                                    Купить
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
