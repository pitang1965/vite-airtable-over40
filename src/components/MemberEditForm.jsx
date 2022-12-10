import React from 'react';
import { Modal, Form, Input } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  .ant-modal-header,
  .ant-modal-title,
  .ant-modal-content,
  .ant-input,
  label {
    color: var(--main-fg-color);
    background: var(--card-bg-color);
  }

  /* [キャンセル]ボタンの色 */
  .ant-btn,
  .ant-btn > span {
    color: var(--main-fg-color);
    background-color: var(--card-bg-color);
    transition-duration: 0ms;
  }
  .ant-btn:hover,
  .ant-btn:hover span {
    color: var(--card-bg-color);
    background-color: var(--main-fg-color);
  }

  /* [更新]ボタンの色 */
  .ant-btn-primary,
  .ant-btn-primary > span {
    color: var(--button-fg-color);
    background-color: var(--button-bg-color);
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:hover span {
    color: var(--button-fg-hover-color);
    background-color: var(--button-bg-hover-color);
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
          'Homepage URL': fields['Homepage URL'],
          'Twitter username': fields['Twitter username'],
          'GitHub username': fields['GitHub username'],
          'Instagram username': fields['Instagram username'],
          'YouTube URL': fields['YouTube URL'],
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
          <Input placeholder='Web制作勉強中' />
        </Form.Item>

        <Form.Item
          name='Bio'
          label='プロフィール'
          rules={[
            {
              required: true,
              message: 'プロフィールを入力してください。',
            },
          ]}
        >
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
          <Input placeholder='pitang@example.com' />
        </Form.Item>

        <Form.Item
          name='Homepage URL'
          label='ホームページURL'
          rules={[
            {
              required: false,
              type: 'url',
              message: 'ホームページURとして適切なものを入力してください。',
            },
          ]}
        >
          <Input placeholder='https://example.com' />
        </Form.Item>

        <Form.Item
          name='Twitter username'
          label='Twitterユーザーネーム'
          rules={[
            {
              required: true,
              message: 'Twitterユーザーネームを入力してください。',
            },
          ]}
        >
          <Input placeholder='pitang1965' />
        </Form.Item>

        <Form.Item
          name='GitHub username'
          label='GitHubユーザーネーム'
          rules={[
            {
              required: false,
              message: 'GitHubユーザーネームを入力してください。',
            },
          ]}
        >
          <Input placeholder='pitang1965' />
        </Form.Item>

        <Form.Item
          name='Instagram username'
          label='Instagramユーザーネーム'
          rules={[
            {
              required: false,
              message: 'Instagramユーザーネームを入力してください。',
            },
          ]}
        >
          <Input placeholder='pitang1965' />
        </Form.Item>

        <Form.Item
          name='YouTube URL'
          label='YouTube URL'
          rules={[
            {
              required: false,
              type: 'url',
              message: 'YouTube URLとして適切なものを入力してください。',
            },
          ]}
        >
          <Input placeholder='https://www.youtube.com/channel/xxxxx' />
        </Form.Item>
      </Form>
    </StyledModal>
  );
};

export default MemberEditForm;
