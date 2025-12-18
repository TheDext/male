import classes from './footer.module.scss';

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="_container-default">
                <div className={classes.text}>
                    Вся представленная на сайте информация носит информационный
                    характер и не является публичной офертой, определяемой
                    положениями статьи <br /> 437 (2) ГК РФ. Все цены, указанные
                    на данном сайте, носят информационный характер.
                    Опубликованная на данном сайте информация может быть
                    изменена в любое время без предварительного уведомления.
                </div>
            </div>
        </footer>
    );
};
