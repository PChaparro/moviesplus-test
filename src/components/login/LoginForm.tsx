import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from '@tanstack/react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useSession } from '@/hooks/useSession';
import { useToast } from '@/hooks/useToast';

import { Button } from '@/components/shared/button/button';

// Validation schema
const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
});

type LoginFormData = yup.InferType<typeof loginFormSchema>;

export const LoginForm = () => {
  // Form state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(loginFormSchema),
  });

  // Global session state
  const { login } = useSession();

  // Helpers
  const { showSuccessToast, showErrorToast } = useToast();
  const navigate = useNavigate();

  // Submit callback
  const handleFormSubmit: SubmitHandler<LoginFormData> = async ({
    email,
    password,
  }) => {
    try {
      await login({ email, password });
      showSuccessToast('You have successfully logged in');
      navigate({ to: '/' });
    } catch (error) {
      // Default error message
      let errorMessage =
        'We had a problem trying to log you in, please try again';

      // Try to get the error message from the error object
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      showErrorToast(errorMessage);
    }
  };

  return (
    <form
      className='grid max-w-sm gap-4'
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='text-sm text-white/90'>
          Email
        </label>
        <input
          {...register('email')}
          id='email'
          type='email'
          className='w-full rounded-md px-2 py-3'
          placeholder='Enter your email here'
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby='email-error'
        />
        {errors.email ? (
          <span
            className='text-red-500'
            id='email-error'
            aria-live='polite'
            role='alert'
          >
            {errors.email.message}
          </span>
        ) : null}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='password' className='text-sm text-white/90'>
          Password
        </label>
        <input
          {...register('password')}
          id='password'
          type='password'
          className='w-full rounded-md px-2 py-3'
          placeholder='Enter your password here'
          aria-invalid={errors.password ? 'true' : 'false'}
          aria-describedby='password-error'
        />
        {errors.password ? (
          <span
            className='text-red-500'
            id='password-error'
            aria-live='polite'
            role='alert'
          >
            {errors.password.message}
          </span>
        ) : null}
      </div>
      <Button type='submit' className='mt-2'>
        Submit
      </Button>
    </form>
  );
};
