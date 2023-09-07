import styles from './SectionTitle.module.scss'

type Props = {
    btnText: string
    text: string
}

const SectionTitle = ({btnText, text}: Props) => {
    return (
        <div className={styles.main}>
            <div className={styles.btn}>
                {btnText}
            </div>
            <div className={styles.title}>
                {text}
            </div>
        </div>
    );
};

export default SectionTitle;