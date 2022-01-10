import { Breadcrumbs } from '../../componetnts/breadcrumbs/breadcrumbs';
import { PageDetailsContainer } from '../../componetnts/page-details-container/page-details-container';
import { FiguresCanvas } from '../../componetnts/figures-canvas/figures-canvas';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import genUid from 'light-uid';
import { CirclesList } from './circles-list/circles-list';

export const CirclesPage = () => {
  const circles = [
    { center: [{ x: 1, y: 2, name: 'A' }], radius: 4, id: genUid() },
    { center: [{ x: 3, y: 4, name: 'B' }], radius: 7, id: genUid() },
  ]
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleIsFormVisible = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <Breadcrumbs
        isFormVisible={isFormVisible}
        onVisibilityChange={() => handleIsFormVisible()}
        active={1}
      />

      <div className="PageContent">
        <CirclesList circles={circles} />

        <PageDetailsContainer>
          <FiguresCanvas />

          <Outlet />

        </PageDetailsContainer>
      </div>

    </>
  )
}
