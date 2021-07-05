import { saveInvestment } from '../../../store/actions/investment';

test('saveInvestment', () => {
  const data = {
    email: 'testEmail',
    amount: 10
  };

expect(saveInvestment(data)).toEqual({ ...data, type: 'linus/RECEIVE_USER_INVESTMENT' })
});
