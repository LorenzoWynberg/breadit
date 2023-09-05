'use client';

import { User } from 'next-auth';
import { FC } from 'react';
import { DropdownMenu } from './ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import UserAvatar from './UserAvatar';

interface NavUserDropdownProps {
  user: Pick<User, 'name' | 'email' | 'image'>;
}

const NavUserDropdown: FC<NavUserDropdownProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="w-8 h-8"
          user={{ name: user.name || null, image: user.image || null }}
        />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default NavUserDropdown;
