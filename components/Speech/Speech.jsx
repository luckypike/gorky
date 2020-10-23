import React from "react";
import PropTypes from "prop-types";

const Speech = ({ title, text, author }) => {
  return (
    <div className={styles.root}>
      <div className={styles.intro}>Прямая речь</div>

      {title && <h3>{title}</h3>}

      {text && <div className={styles.text}>{text}</div>}
      {author && (
        <figure className={styles.author}>
          {author.image && (
            <img src={author.image} className={styles.image} alt="image" />
          )}

          <div className={styles.who}>
            {author.name}
            <br />
            <span>{author.desc}</span>
          </div>
        </figure>
      )}
    </div>
  );
};

Speech.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default Speech;
