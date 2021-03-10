import React from 'react';

const Article = (props) => {
  let publishState = "";
  if (props.isPublished) {
    publishState = "公開"
  }else {
    publishState = "非公開"
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlfor="check">公開状態</label>
      <input type="checkbox" checked={props.isPublished} />
    </div>
  )
};

export default Article;