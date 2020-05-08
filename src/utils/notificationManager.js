import { message } from 'antd';

message.config({
  duration: 3,
  maxCount: 3,
  top: 10,
});

class Notification {
  constructor() {
    this.id = `${Math.round(Math.random() * 100000)}`;
  }

  info(text) {
    message.info({ content: text, key: this.id });
    return this;
  }

  loading(text) {
    message.loading({ content: text, key: this.id });
    return this;
  }

  success(text) {
    message.success({ content: text, key: this.id });
    return this;
  }

  warning(text) {
    message.warning({ content: text, key: this.id });
    return this;
  }

  error(text = 'Something went wrong. Please try again later') {
    message.error({ content: text, key: this.id });
    return this;
  }
}

export default Notification;
