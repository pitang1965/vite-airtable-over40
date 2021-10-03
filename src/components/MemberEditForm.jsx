import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Input } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  & .ant-btn-primary, & .ant-btn-primary > span {
    background-color: var(--button-bg-color);
    color: var(--button-text-color);
  }
  & *, label {
    background: var(--card-bg-color);
    color: var(--main-fg-color);
  }
`;

const MemberEditForm = ({
  visible,
  id,
  fields,
  onCreate,
  onCancel,
  updateMember,
}) => {
  const [form] = Form.useForm();
  return (
    <StyledModal
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
            updateMember(id, form.getFieldsValue());
          })
          .catch((info) => console.log('バリデーション失敗:', info));
      }}
    >
      <Form
        form={form}
        layout='vertical'
        name='form_in_modal'
        initialValues={{
          Name: fields.Name,
          Title: fields.Title,
          Bio: fields.Bio,
          'Email address': fields['Email address'],
        }}
      >
        <Form.Item
          name='Name'
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
          name='Title'
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
        <Form.Item name='Bio' label='プロフィール'>
          <Input.TextArea autoSize='true' />
        </Form.Item>
        <Form.Item
          name='Email address'
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
    </StyledModal>
  );
};

export default MemberEditForm;
