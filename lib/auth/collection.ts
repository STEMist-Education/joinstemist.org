import db from "../serverApp";

export const getData = async <DataValue>(
  key: string,
  collection: string
): Promise<DataValue> => {
  const data = await db.collection(collection).doc(key).get();
  return data.data() as DataValue;
};

export const addData = async <DataValue>(
  data: Partial<DataValue>,
  key: string,
  collection: string
): Promise<void> => {
  await db.collection(collection).doc(key).set(data);
};

export const updateData = async <DataValue>(
  data: Partial<DataValue>,
  key: string,
  collection: string
): Promise<void> => {
  await db.collection(collection).doc(key).update(data);
};

export const deleteData = async (
  key: string,
  collection: string
): Promise<void> => {
  await db.collection(collection).doc(key).delete();
};

export const getMultiple = async <DataValue>(
  collection: string
): Promise<DataValue[]> => {
  const data = await db.collection(collection).get();
  return data.docs.map((doc) => doc.data()) as DataValue[];
};
