export const CirclesListItem = ({ circle, index }) => {
  return (
    <div className="PointsListItem"
         key={index}
    >
      <div className="Avatar">{circle.name}</div>
      <span>Center (x: {circle.x}, y: {circle.y}, name: {circle.name})</span>
      <span>Radius {circle.radius}</span>
    </div>
  )
}

// [
//   { center: [{ x: 1, y: 2, name: 'A' }], radius: 4 },
//   { center: [{ x: 3, y: 4, name: 'B' }], radius: 7 },
// ],
