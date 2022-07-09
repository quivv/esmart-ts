import React from 'react'
type props = {
  title: string;
}
const Loading:React.FC<props> = ({title}) => {
  if(title='product'){
    return (
      <div className='text-center'>
        Loading...
      </div>
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
