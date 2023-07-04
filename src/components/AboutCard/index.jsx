import styles from "./leftImg.module.css";
const AboutCard = (props) => {
    const { image, title, description, number, a } = props;

    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.card_img_div} style={{ order: a=="reverse"?"1":"0" }} >
                    <img className={styles.card_img} src={image} alt="" />
                
                </div>
                <div className={styles.card_content_div} style={{ order:  a=="reverse"?"0":"1" }}>
                    <span className={styles.card_number}>{number}</span>
                    <span className={styles.card_title}>{title}</span>
                    <p className={styles.card_description}>{description}</p>
                </div>
            </div>
        </>
)
}

export default AboutCard;