// src/components/NavItem.jsx

import { ReactNode } from 'react';

const NavItem = ({ children, icon }: { children: ReactNode; icon: ReactNode }) => (
  <li className="flex items-center gap-2 cursor-pointer px-2 py-2 rounded-lg hover:bg-slate-900 hover:text-white text-slate-300">
    {icon}
    <span>{children}</span>
  </li>
);

export default NavItem;

  