import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Loading:React.FC = () => {
  return (
    <>
      <div className="col-md-6">
        <Skeleton height={400} width={400}/>
      </div>
    </>
  ) 
}

export default Loading
