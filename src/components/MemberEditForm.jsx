import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Input } from 'antd';

const MemberEditForm = ({ visible, member, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title='メンバー情報の編集'
      okText='更新'
      cancelText='キャンセル'
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
          })
          .catch((info) => console.log('バリデーション失敗:', info));
      }}
    >
      <Form
        form={form}
        layout='vertical'
        name='form_in_modal'
        initialValues={{
          name: member.Name,
          title: member.Title,
          bio: member.Bio,
          email: member.['Email address'],
        }}
      >
        <Form.Item
          name='name'
          label='名前'
          rules={[
            {
              required: true,
              message: '名前を入力してください。',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='title'
          label='タイトル'
          rules={[
            {
              required: true,
              message: 'タイトルを入力してください。',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='bio' label='プロフィール'>
          <Input.TextArea autoSize='true' />
        </Form.Item>
        <Form.Item
          name='email'
          label='メールアドレス'
          rules={[
            {
              required: false,
              type: 'email',
              message: 'Eメールアドレスとして適切なものを入力してください。',
            },
          ]}
        >
          <Input placeholder='abc@pitang1965.com' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MemberEditForm;