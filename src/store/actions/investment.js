import { serverErrors } from '../../data/content';

export const RECEIVE_USER_INVESTMENT = 'linus/RECEIVE_USER_INVESTMENT';

export const saveInvestment = data => ({
    type: RECEIVE_USER_INVESTMENT,
    email: data.email,
    amount: data.amount
});

//Mocking request/response BE. Normally used axios.post()
export const sendInvestment = (result, investment) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(result) {
                res(serverErrors.success);
            } else {
                rej(serverErrors.failure);
            }
        }, 3000);
    });
}