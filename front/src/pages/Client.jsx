import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {getclients } from '../store/client';

export default function Client() {
    const clientStore = useSelector((state) => state.client);
    const dispatch = useDispatch();
    useEffect(() => {
              dispatch(getclients());
            }, []);

  return (
    <div>
    {clientStore.clients.map(({ name, email }, index) => (
        <div key={index}> 
            <p>{index}</p>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    ))}
</div>
  )
}
