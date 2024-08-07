import axios from 'axios';

export const sendMessage = (message) => {
  const TOKEN = '7345617704:AAHh9waQ-k8ubEgLnKbyc55wHyUMA7MloD4';
  const CHAT_ID = '-1002243475144';
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .catch((err) => {
      console.log(err);
    });
};
