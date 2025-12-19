import { useRef } from 'react';
import { useClickAway } from 'react-use';
import closeIcon from '@icons/close.png';

export const BuyModal = ({ setShowBueModal }) => {
    const ref = useRef(null);
    useClickAway(ref, () => {
        setShowBueModal(false);
    }, ['click']);
    return (
        <div className="modal">
            <div className="modal__body" ref={ref}>
                <div
                    className="modal__close"
                    onClick={() => setShowBueModal(false)}
                >
                    <img src={closeIcon} alt="closeIcon" />
                </div>
                <div className="modal__content">
                    Купить косметику или подарочные сертификаты можно у нас в
                    салоне по адресу: Московская область, Серпухов, улица
                    Ворошилова, 130А, 3й этаж. Если хотите уточнить информацию
                    или необходима консультация позвоните по номеру: <br />
                    <a href="tel:+79779105053">7 (977) 910-50-53</a>
                </div>
            </div>
        </div>
    );
};
