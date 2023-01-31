import React from 'react';
import { ListType, StateList } from '@src/TypeBox';
import styles from '@src/scss/ListItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function ListItem(props: StateList): JSX.Element {
  return (
    <React.Fragment>
      <div className={styles.myListBox}>
        {props.list?.map(function (item: ListType, idx: number): JSX.Element {
          return (
            <div key={idx} className={styles.myListBoxItem}>
              <div className={styles.myList}>
                <FontAwesomeIcon
                  className={item.ThisState === false ? styles.checkBTN : styles.checkBTN2}
                  icon={faCheck}
                  onClick={() => {
                    const myBox: ListType[] = JSON.parse(localStorage.getItem('myBox') || '{}');
                    let myBoxContent: any = myBox[idx].Count;

                    myBoxContent++;
                    localStorage.setItem('myBox', JSON.stringify(myBox));
                    props.setList(myBox);

                    if (myBoxContent % 2 === 0) {
                      myBox[idx].ThisState = false;
                      localStorage.setItem('myBox', JSON.stringify(myBox));
                      props.setList(myBox);
                    } else if (myBoxContent % 2 === 1) {
                      myBox[idx].ThisState = true;
                      localStorage.setItem('myBox', JSON.stringify(myBox));
                      props.setList(myBox);
                    }
                  }}
                ></FontAwesomeIcon>

                <span className={item.ThisState === true ? styles.myText : styles.myText2}>
                  {item.MyArticle}
                </span>
              </div>

              <FontAwesomeIcon
                className={styles.TrashBTN}
                icon={faTrashCan}
                onClick={() => {
                  const myBox: ListType[] = JSON.parse(localStorage.getItem('myBox') || '{}');
                  const newArray: ListType[] = myBox.filter(function (x: ListType) {
                    return x.OriginId !== item?.OriginId;
                  });
                  localStorage.setItem('myBox', JSON.stringify(newArray));
                  props.setList(newArray);
                }}
              ></FontAwesomeIcon>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
