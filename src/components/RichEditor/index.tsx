import { Editor } from '@tinymce/tinymce-react';
export default () => {
  return (
    <Editor
      apiKey="zavsfcanffbwhnjvbm0go0lbyn8bjhsgnl3hxbdvs9sm8aco"
      init={{
        min_height: 500,
        language: 'zh_CN'
      }}
    />
  );
};
