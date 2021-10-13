// import { db } from 'config/initFirebase';
import { CircularProgress } from '@mui/material';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
} from 'firebase/firestore';
import React, { useEffect } from 'react';
import {
  useFirestore,
  useFirestoreCollection,
  useFirestoreCollectionData,
  useFirestoreDocData,
} from 'reactfire';

const Main: React.FC = () => {
  const firestore = useFirestore();
  const characterCollection = collection(firestore, 'characters');
  const charactersQuery = query(characterCollection);

  const { status, data } = useFirestoreCollectionData(charactersQuery);

  // const getData = () => {
  //   // const snapshot = await getDocs(collection(db, 'characters'));
  //   // console.log(snapshot);
  //   // const data = snapshot.data();
  //   // const d: any[] = [];
  //   // snapshot.forEach((s) => d.push(s.data()));
  //   // console.log(d);
  // };

  useEffect(() => {
    console.log(`status`, status);
    console.log(data);
  }, [status, data]);

  return (
    <div>
      {status === 'loading' && <CircularProgress />}
      {status === 'success' &&
        data.map((d) => (
          <div key={d.NO_ID_FIELD}>
            {d.itemLvl} - {d.name}
          </div>
        ))}
    </div>
  );
};

export default Main;
