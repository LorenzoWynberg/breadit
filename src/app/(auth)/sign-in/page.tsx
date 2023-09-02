import SignIn from '@/components/SignIn';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

const page: FC = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="flex flex-col items-center justify-center h-full gap-20 mx-auto max-w 2xl">
        <Link
          href="/sign-in
          "
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'self-start -mt-20',
          )}
        >
          Sign In
        </Link>
        <SignIn />
      </div>
    </div>
  );
};

export default page;
