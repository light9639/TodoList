import styles from '../css/Title.module.css';

function TitleItem() {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month + '-' + day;

  return (
    <div className={styles.Title}>
      <p>할일 목록</p> <p>{dateString}</p>
    </div>
  );
}
export default TitleItem;
