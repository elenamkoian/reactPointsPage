export const CirclesListItem = ( { circle, index } ) => {
  return (
    <div className="PointsListItem"
         key={index}
    >
      <div className="Avatar">{circle.name}</div>
      <span>Coordinate (x: {circle.x}, y: {circle.y})</span>
    </div>
  )
}
