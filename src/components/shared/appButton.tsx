import type { FC, ReactNode } from 'react';
import classes from './appButton.module.scss';
import classNames from '@/shared/lib/classNames';

export enum ButtonVariants {
    WHITE_NON_RADIUS = 'wnr',
    GOLD_NON_RADIUS = 'gnr',
    GOLD_RADIUS = 'gr',
}

interface IAppButton {
    variant: ButtonVariants;
    children: string | ReactNode;
}

export const AppButton: FC<IAppButton> = ({ children, variant }) => {
    return (
        <div
            className={classNames(
                classes.appButton,
                {
                    [classes[ButtonVariants.WHITE_NON_RADIUS]]:
                        variant === ButtonVariants.WHITE_NON_RADIUS,
                    [classes[ButtonVariants.GOLD_NON_RADIUS]]:
                        variant === ButtonVariants.GOLD_NON_RADIUS,
                    [classes[ButtonVariants.GOLD_RADIUS]]:
                        variant === ButtonVariants.GOLD_RADIUS,
                },
                []
            )}
        >
            {children}
        </div>
    );
};
