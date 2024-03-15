export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export interface MovieFile extends File {
  type: string;
}

export enum UPLOAD_STATES {
  INACTIVE = "INACTIVE",
  IMAGE_UPLOAD = "IMAGE_UPLOAD",
  IMAGE_SUCCESS = "IMAGE_SUCCESS",
  FORM_SUCCESS = "FORM_SUCCESS",
  ERROR = "ERROR",
}
