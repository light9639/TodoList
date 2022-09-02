import { useState } from 'react';
import { ListType, StateList } from '../TypeBox';
import styles from '../css/InputItem.module.css';

function InputItem(props: StateList): JSX.Element {
  const [myText, setMyText] = useState<string>();
  // eslint-disable-next-line prefer-const
  let [click, setClick] = useState<number>(1);
  const [id, setId] = useState<string>();

  //고유 id 생성
  function newId(): string {
    return Math.random().toString(36).substr(2, 16);
  }

  return (
    <>
      <div className='Input_Background'></div>
      <div className={styles.InputBox}>
        <input
          onChange={(e) => {
            setMyText(e.target.value);
          }}
          placeholder='할일을 입력해주세요!'
          onClick={(e) => {
            (e.target as HTMLTextAreaElement).value = '';
          }}
        />
        <button
          onClick={() => {
            setMyText('');
            setClick((click = 0));
            setId(newId);
            const box: ListType[] = JSON.parse(localStorage.getItem('myBox') || '{}');
            if (myText == '') {
              alert('할일을 입력해주세요!');
            } else if (box.length === 6) {
              alert('6개이상 입력금지');
            } else {
              box.push({ MyArtcle: myText, Count: click, ThisState: false, OriginId: id });
              localStorage.setItem('myBox', JSON.stringify(box));
              props.setList(box);
            }
          }}
          className={styles.InputBTN}
        >
          ADD
        </button>
      </div>
    </>
  );
}

export default InputItem;
