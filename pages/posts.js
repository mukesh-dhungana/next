import React from 'react';

function Posts(props) {
    return (
        <div>
            <span>This is root post component</span>
            <div>{props.data}</div>
        </div>
    );
}

export default Posts;


export const getStaticProps=(context)=>{
  let data = Math.random();
  return {
    props:{
      data
    }
  }
}