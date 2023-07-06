import styles from "./teamcard.module.css";

const TeamCard = (props)=>{
    const {number} = props;
    return(
        <div className={styles.forBorder}>
        <div className={styles.card_container}>
            <span className={styles.card_number}>{number}</span>
            <span className={styles.card_title}>Governance Token Launch on BSC ($ASD)</span>

            <ul className={styles.card_list}>
                <li>Launch Date: Jan 8th, 2022 Contract Audit</li>
                <li>TechAudit Completed on Jan 21st, 2022 5k Telegram members</li>
                <li>Launch Date: Jan 8th, 2022 Contract Audit</li>
                <li>Launch Date: Jan 8th, 2022 Contract Audit</li>
                <li>Launch Date: Jan 8th, 2022 Contract Audit</li>
            </ul>
        </div>
        </div>
    )
}
export default TeamCard;