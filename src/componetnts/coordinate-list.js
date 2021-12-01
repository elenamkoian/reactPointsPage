export const CoordinateList = ( {points}) => {
  return (
    <div  className='CoordinateList'>
      {
        points.map((point, index) => (
          <div className='Coordinate'
               key={index}
          >
            <div className='Avatar'>{point.name}</div>
            <span>Coordinate: x-{point.x}, y-{point.y}</span>
          </div>
        ))
      }
    </div>
  )
}

//
//   points:[
//    { x: 1, y: 2, name: 'A' },
//    { x: 3, y: 4, name: 'B' },
//    { x: 5, y: 6, name: 'C' },
//    { x: 7, y: 8, name: 'D' },
// ],
