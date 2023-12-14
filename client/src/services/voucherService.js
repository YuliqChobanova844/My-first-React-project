import * as request from '../lib/request'


const basedUrl = 'http://localhost:3030/jsonstore'



export const getAll = async () => {
  const response = await fetch(`${basedUrl}/vouchers`, {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    },

  });
  
  const result = await response.json();

  return Object.values(result);
 
}

export const getOne = async (voucherId) => {
  const result = await request.get(`${basedUrl}/vouchers/${voucherId}`);
  return result;
}







export const create = async (voucherData) => {
 const response = await fetch(`${basedUrl}/vouchers`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(voucherData)
  });

  const result = await response.json();

  return result;

}