import { ListType, StateList } from '../TypeBox';
import styles from '../css/ListItem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function ListItem(props: StateList): JSX.Element {
  return (
    <>
      <div className={styles.myListBox}>
        {props.list?.map(function (a: ListType, i: number): JSX.Element {
          return (
            <div key={i} className={styles.myListBoxItem}>
              <div className={styles.myList}>
                <FontAwesomeIcon
                  className={a.ThisState === false ? styles.checkBTN : styles.checkBTN2}
                  icon={faCheck}
                  onClick={() => {
                    const myBox: ListType[] = JSON.parse(localStorage.getItem('myBox') || '{}');

                    myBox[i].Count++;
                    localStorage.setItem('myBox', JSON.stringify(myBox));
                    props.setList(myBox);

                    if (myBox[i].Count % 2 === 0) {
                      myBox[i].ThisState = false;
                      localStorage.setItem('myBox', JSON.stringify(myBox));
                      props.setList(myBox);
                    } else if (myBox[i].Count % 2 === 1) {
                      myBox[i].ThisState = true;
                      localStorage.setItem('myBox', JSON.stringify(myBox));
                      props.setList(myBox);
                    }
                  }}
                ></FontAwesomeIcon>

                <span className={a.ThisState === true ? styles.myText : styles.myText2}>
                  {a.MyArtcle}
                </span>
              </div>

              <FontAwesomeIcon
                className={styles.TrashBTN}
                icon={faTrashCan}
                onClick={() => {
                  const myBox: ListType[] = JSON.parse(localStorage.getItem('myBox') || '{}');
                  const newArray: ListType[] = myBox.filter(function (x: ListType) {
                    return x.OriginId !== a?.OriginId;
                  });
                  localStorage.setItem('myBox', JSON.stringify(newArray));
                  props.setList(newArray);
                }}
              ></FontAwesomeIcon>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ListItem;
