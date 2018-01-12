// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import React, { PropTypes } from 'react';

// Import Style
import styles from './Note.css';

const Note = (props) =>
  <li className={styles.Note} {...props}>{props.children}</li>;

// class Note extends Component {
//   render() {
//     return (
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

Note.propTypes = {
  children: PropTypes.any,
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Note);

export default Note;