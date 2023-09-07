import React from "react";
import styles from "./LoaderSpinner.module.scss";

const LoadingSpinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.loadingSpinner}>
            </div>
        </div>
    );
}

export default LoadingSpinner