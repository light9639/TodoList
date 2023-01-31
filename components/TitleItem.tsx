import styles from '@src/scss/Title.module.scss';

export default function TitleItem(): JSX.Element {
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
