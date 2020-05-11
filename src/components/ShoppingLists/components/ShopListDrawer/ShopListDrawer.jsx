import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Form, Input, Button, Select,
} from 'antd';

import styles from './shopListDrawer.scss';
import useShopListDrawerHook from './useShopListDrawerHook';

const ShopListDrawer = ({ drawerCtrl, submitShopList }) => {
  const {
    form, submitForm, categories, titleText, submitText,
  } = useShopListDrawerHook(drawerCtrl, submitShopList);

  return (
    <Drawer
      title={titleText}
      placement="right"
      closable
      getContainer={false}
      onClose={drawerCtrl.close}
      visible={drawerCtrl.visible}
    >
      <Form form={form} layout="vertical" size="middle" onFinish={submitForm}>

        <Form.Item name="name" label="Name" hasFeedback rules={[{ required: true, message: 'Name is required' }]}>
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item name="description" label="Description" hasFeedback rules={[{ type: 'string', max: 120, message: 'Maximum 120 characters' }]}>
          <Input.TextArea placeholder="Description" autoSize={{ minRows: 3, maxRows: 6 }} />
        </Form.Item>

        <Form.Item
          name="category_id"
          label="Category"
          hasFeedback
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Category" data-testid="selectedOption">
            {categories.map((cat) => (
              <Select.Option key={cat.id} value={cat.id}>
                <div className={styles.selectedCategory}>
                  {cat.name}
                  <div
                    className={styles.selectedCategory__color}
                    style={{ backgroundColor: cat.color }}
                  />
                </div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div className={styles.buttons}>
          <Button type="primary" htmlType="submit" data-testid="submitButton">
            {submitText}
          </Button>
          <Button type="default" onClick={() => form.resetFields()} data-testid="resetButton">
            Reset
          </Button>
        </div>

      </Form>
    </Drawer>
  );
};

ShopListDrawer.propTypes = {
  drawerCtrl: PropTypes.shape({
    close: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    shopListToEdit: PropTypes.shape({}),
  }).isRequired,
  submitShopList: PropTypes.func.isRequired,
};

export default ShopListDrawer;
