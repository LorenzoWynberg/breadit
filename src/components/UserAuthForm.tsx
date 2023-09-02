'use client';

import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { Icons } from './Icons';
import { useToast } from '@/hooks/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      throw new Error('OAuth not implemented');
      await signIn('google');
    } catch (error) {
      // TODO: 'Handle error with toast notification'
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in with Google.',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        size="sm"
        onClick={loginWithGoogle}
        className="w-full"
        isLoading={isLoading}
      >
        {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
