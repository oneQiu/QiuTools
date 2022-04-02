declare namespace RichEditor {
  interface Field {
    key: string;
    name: string;
  }

  interface BlobInfo {
    id: () => string;
    name: () => string;
    filename: () => string;
    blob: () => Blob;
    base64: () => string;
    blobUri: () => string;
    uri: () => string | undefined;
  }

  type UploadHandler = (
    blobInfo: BlobInfo,
    success: (url: string) => void,
    failure: (err: string, options?: any) => void,
    progress?: (percent: number) => void
  ) => Promise<string>;

  type Mode = 'normal' | 'auction' | 'preview';
}
