import { toast } from 'sonner';

export const useToast = () => {
  const showSuccessToast = (message: string) => toast.success(message);
  const showErrorToast = (message: string) => toast.error(message);
  const showWarningToast = (message: string) => toast.warning(message);
  const showInfoToast = (message: string) => toast.info(message);

  return {
    showInfoToast,
    showSuccessToast,
    showErrorToast,
    showWarningToast,
  };
};
