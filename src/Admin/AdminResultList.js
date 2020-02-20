import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AdminResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { results } = this.props;
    return (
      <div>
        <Container>
          <h1>Manage Results</h1>
          <hr />
          <p>
            You are viewing all the available results at the current moment.
          </p>

          <table className="tftable" border="1">
            <tr>
              <th>Result ID</th>
              <th>User ID</th>
              <th>Quiz ID</th>
              <th>Quiz Name</th>
              <th>Quiz Language</th>
              <th>Time</th>
              <th>Completion Date</th>
              <th>Score</th>
            </tr>
            {results.map((res) => (
              <tr>
                <td>{res.id}</td>
                <td>{res.user_id}</td>
                <td>{res.quiz_id}</td>
                <td>{res.quiz_name}</td>
                <td>{res.quiz_language_id}</td>
                <td>{res.time_to_complete_seconds}</td>
                <td>{res.time_of_day}</td>
                <td>{res.score_out_of_10}</td>
              </tr>
            ))}
          </table>
        </Container>
      </div>
    );
  }
}
AdminResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};
export default AdminResultList;
