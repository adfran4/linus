export const RECEIVE_USER_INVESTMENT = 'linus/RECEIVE_USER_INVESTMENT';

export const saveInvestment = data => ({
    type: RECEIVE_USER_INVESTMENT,
    email: data.email,
    amount: data.amount
});