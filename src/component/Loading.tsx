import React from 'react'
import Skeleton from 'react-loading-skeleton';
type props = {
  title: string;
}
const Loading:React.FC<props> = ({title}) => {
  if(title='product'){
    return (
      <>
        {console.log(title)}
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>      
      </>
    )
  }else{
    return (
      <div>
        No Loading...
      </div>
    )
  }
 
}

export default Loading
