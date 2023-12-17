import {requestFactory} from '../lib/request'


const basedUrl = 'http://localhost:3030/data';



  

export const voucherServicefactory = (token) => {
const request = requestFactory(token);


const getAll = async () => {
  const result = await request.get(`${basedUrl}/reserved/vouchers`);
  const vouchers = Object.values(result);
  return vouchers;
 
};

 const getOne = async (voucherId) => {
  const result = await request.get(`${basedUrl}/vouchers/${voucherId}`);
  return result;
  
};


 const create = async (data) => {
 const result = request.post(`${basedUrl}/vouchers`, data);
 return result;

};

return {
  getAll,
  getOne,
  create,
};
  
}