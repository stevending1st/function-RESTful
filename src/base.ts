import axios from 'axios';
import { DataObject, IDType, NewData } from './utility';

export const createRequestFun = (base?: string) => {
  let baseURI = base || '';

  const setBaseURI = (newURI: string) => baseURI = newURI;

  async function updateOne<D extends DataObject> (data: NewData<D>, id?: IDType) {
    return (id
      ? axios.patch(`${baseURI}/${id}`, data)
      : axios.post(`${baseURI}`, data));
  }

  async function deleteOne(id: IDType) {
    return axios.delete(`${baseURI}/${id}`);
  }

  async function getOne(id: IDType) {
    return axios.get(`${baseURI}/${id}`);
  }

  return {
    setBaseURI,
    updateOne,
    deleteOne,
    getOne
  }
}
