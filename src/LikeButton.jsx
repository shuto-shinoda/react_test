import React from 'react';

const LikeButton = (props) => {
  // const [count, counter] = useState(0);

  // const countUp = () => {
  //   counter(count + 1)
  // }

  // useEffect( () => {
  //     document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // )

  return(
    <button id={"counter"}>いいね数: {props.count}</button>
  )
};

export default LikeButton