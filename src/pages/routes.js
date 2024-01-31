import {Routes, Route} from 'react-router-dom';
import { Layout, PageComponent } from './';

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>        
        <Route index element={<PageComponent />} />
      </Route>
      {/* <Route path='' element={}/>  */}
    </Routes>
  );
}