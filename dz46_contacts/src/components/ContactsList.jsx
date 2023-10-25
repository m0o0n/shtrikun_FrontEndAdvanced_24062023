import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersThunk } from '../store/actions';
const ContactsList = (props) => {
  useEffect(() => {
    props.fetchContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Drop</th>
        </tr>
      </thead>
      <tbody>
        {
          props.contacts.map(e => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.lastname}</td>
              <td>{e.number}</td>
              <td><button onClick={() => props.deleteContact(e.id)}>Delete</button></td>
            </tr>
          ))
        }
      </tbody>

    </table>
  )
}

const mapState = (state) => {
  return {
    contacts: state.contacts.items
  }
}

const mapDispatch = (dispatch) => {
  return {
    deleteContact: (id) => {
      dispatch({ type: 'DELETE_CONTACT', payload: { id } })
    },
    fetchContacts: () => {
      dispatch(getUsersThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(ContactsList);