import React, { Component } from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
          <Link to="/">
            <button type="submit" className="btn">
            Export Data
            </button>
          </Link>
          <table className="tftable" border="1">
            <tr>
              <th>Result id</th>
              <th>Quiz name</th>
              <th>User id</th>
              <th>Time to Complete</th>
              <th>Time of Day</th>
              <th>Edit Result</th>
              <th>Delete Result</th>
            </tr>
            {results.map((res) => (
              <tr>
                <td>{res.id}</td>
                <td>
                  {res.name}
                </td>
                <td>{res.time_to_complete}</td>
                <td>{res.time_of_day}</td>
                <td>
                  <Link to={`/admin/result_editor/${res.id}`} params={res.id}>
                    <button type="submit" className="btn-list">
                        Edit Result ►
                    </button>
                    {' '}
                  </Link>
                </td>
                <td>
                  <Link to={`/admin/result_delete/${res.id}`} params={res.id}>
                    <button type="submit" className="btn-list">
                        Delete Result ►
                    </button>
                    {' '}
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </Container>
      </div>
    );
  }
}
export default AdminResultList;
