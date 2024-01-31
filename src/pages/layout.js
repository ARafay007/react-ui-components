import { Outlet } from 'react-router-dom'
import { SideLayout } from '../uiComponents/';
import { navigationList } from '../constants/navigationList';

export const Layout = () => {
  return (
    <SideLayout navigationLinks={navigationList}>
      <Outlet />
    </SideLayout>
  )
}