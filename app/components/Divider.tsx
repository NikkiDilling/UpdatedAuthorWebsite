import classes from '../css/Divider.module.scss';

export default function Divider({ hideOnDesktop }: { hideOnDesktop?: boolean }) {
    const rootClassName = hideOnDesktop ? `${classes.divider} ${classes.hideDesktop}` : classes.divider;

    return (
        <div className={rootClassName} role="presentation" aria-hidden="true">
            <span className={classes.line} />
            <span className={classes.spark}>✦</span>
            <span className={classes.line} />
        </div>
    );
}
