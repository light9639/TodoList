import { useEffect, useState } from 'react';
import { ListType } from './TypeBox';
import InputItem from './components/InputItem';
import TitleItem from './components/TitleItem';
import ListItem from './components/ListItem';

const Hello = () => {
  const [list, setList] = useState<ListType[]>();

  useEffect(() => {
    if (localStorage.getItem('myBox') == null) {
      localStorage.setItem('myBox', JSON.stringify([]));
    } else {
      setList(JSON.parse(localStorage.getItem('myBox') || '{}'));
    }
  }, []);

  return (
    <>
      <div className='Page'>
        <InputItem setList={setList}></InputItem>
        <TitleItem></TitleItem>
        <ListItem list={list} setList={setList}></ListItem>
      </div>
    </>
  );
};

export default Hello;
