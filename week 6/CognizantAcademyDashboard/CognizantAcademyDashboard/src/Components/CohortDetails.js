import styles from './CohortDetails.module.css';

export default function CohortDetails({cohort}){
  return(
    <div className={styles.box}>
      <h3 style={{color:cohort.status==='ongoing'?'green':'blue'}}>{cohort.name}</h3>
      <dl>
        <dt>Status</dt><dd>{cohort.status}</dd>
        <dt>Trainer</dt><dd>{cohort.trainer}</dd>
        <dt>Strength</dt><dd>{cohort.strength}</dd>
      </dl>
    </div>
  );
}
