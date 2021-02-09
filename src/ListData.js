import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListData() {
  const [todoList, setTodoList] = useState([]);
  const [start, setStart] = useState(0);

  const fetchData = useCallback(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos?',
      params: {
        _start: start,
        _limit: 10,
      },
    })
      .then((response) => {
        console.log(response);
        setTodoList(response.data);
        // setStart(`${_start} + ${_limit}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <ul>
        {todoList.map((list) => (
          <li key={list.id} className='listdata'>
            Todo: {list.id} --- {list.title}
          </li>
        ))}
      </ul>
      <button onClick={fetchData} className='button'>
        Click to Load More
      </button>
    </div>
  );
}

export default ListData;
