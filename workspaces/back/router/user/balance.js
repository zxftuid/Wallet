'use strict';

module.exports = async function (api) {

    const balance = await api.getBalance();
    const tokenBalance = await api.getTokenBalance();

    return {
      data: {
        balance: balance,
        token_balance: tokenBalance,
      },
    };
};