const basedUrl = 'http://localhost:3030/jsonstore'


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