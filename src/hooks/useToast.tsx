import { toast } from 'sonner';

export const useToast = () => {
  const showSuccessToast = (message: string) => toast.success(message);
  const showErrorToast = (message: string) => toast.error(message);

  return {
    showSuccessToast,
    showErrorToast,
  };
};
