import {
  useEffect,
  useState,
  useRef,
  LegacyRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { message, Spin } from 'antd';
import Sidebar from './widget/Sidebar';
import { request } from 'ice';
import { LoadingOutlined } from '@ant-design/icons';
// 引入tinymce
import { Editor, IAllProps } from '@tinymce/tinymce-react';
import { baseUrl, getUrl } from './utils';
import './index.less';

export interface EditorRef extends Editor {
  insertHTML: (value: string) => boolean;
}
interface IProps extends Omit<IAllProps, 'onChange' | 'onLoadContent'> {
  /** 普通的富文本 ｜ 发拍 | 只读 */
  mode: RichEditor.Mode;
  value?: string;
  onChange?: (value: string) => void;
  onLoad?: () => void;
  /** 图片上传 */
  onImageUpload?: RichEditor.UploadHandler;
  /** 字段列表 */
  fileList: RichEditor.Field[];
}
export default forwardRef<Partial<EditorRef>, IProps>(
  (
    {
      mode = 'normal',
      onImageUpload,
      init = {},
      value,
      onChange,
      onLoad,
      fileList,
      ...props
    },
    _ref,
  ) => {
    const [loading, setLoading] = useState(false);
    const ref = useRef<Editor>();

    useImperativeHandle(_ref, () => {
      return {
        ...(ref.current || {}),
        insertHTML,
      };
    });

    useEffect(() => {
      setLoading(true);
    }, []);

    const insertHTML = (html: string): boolean => {
      const isSuccess = ref.current?.editor?.execCommand(
        'insertHTML',
        false,
        html,
      );
      if (!isSuccess) {
        message.warn('操作失败');
      }
      return isSuccess ?? false;
    };

    const onFieldClick = (field: RichEditor.Field) => {
      const html = `<input value=$\{${field.name}} data-key=${
        field.key
      } style="border: none;background: none" size=${
        field.name.length * 2 + 2
      } disabled />`;
      insertHTML(html);
    };

    const onEditorChange = (val: string) => {
      onChange?.(val);
    };

    const onLoadContent = () => {
      setLoading(false);
      onLoad?.();
    };

    const imageUploadHandler: RichEditor.UploadHandler = async (
      blobInfo,
      success,
      fail,
      progress = () => {},
    ) => {
      const formData = new FormData();
      const file: any = await blobInfo.blob();
      formData.append('file', file, file.name);
      return '';
    };

    return (
      <Spin
        spinning={loading}
        wrapperClassName={'rich-editor-spin'}
        indicator={<LoadingOutlined />}
      >
        <div className="rich-editor">
          {mode === 'auction' && (
            <Sidebar onFieldClick={onFieldClick} fieldList={fileList} />
          )}
          <div className="editor-container-warp">
            <Editor
              ref={ref as LegacyRef<Editor>}
              onLoadContent={onLoadContent}
              value={value}
              onEditorChange={onEditorChange}
              disabled={mode === 'preview'}
              tinymceScriptSrc={`${baseUrl}/tinymce.min.js`}
              init={{
                language: 'zh_CN',
                height: '100%',
                skin: true,
                resize: false,
                skin_url: `${baseUrl}/skins/ui/oxide`,
                placeholder: '请输入内容',
                base_url: baseUrl,
                images_upload_handler: onImageUpload ?? imageUploadHandler,
                plugins: [
                  'image',
                  'quickbars',
                  'link',
                  'wordcount',
                  'table',
                  'fullscreen',
                  'preview',
                  'textpattern',
                  'searchreplace',
                ],
                toolbar:
                  mode === 'preview'
                    ? false
                    : 'undo redo styleselect image quickbars link wordcount table fullscreen preview textpattern searchreplace | testButton',
                menubar: mode !== 'preview',
                branding: false,
                contextmenu: 'insertField',
                quickbars_insert_toolbar: '',
                quickbars_selection_toolbar:
                  'bold italic forecolor | link blockquote quickimage',
                ...init,
              }}
              {...props}
            />
          </div>
        </div>
      </Spin>
    );
  },
);
