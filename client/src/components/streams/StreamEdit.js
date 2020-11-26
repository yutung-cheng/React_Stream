import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>

        {/*
        initialValues names title and description is because in StreamForm -> <Field>,
        we named it 'title' and 'description'
        initialValues ={{ title:'EDIT ME', description:'CHANGE ME TOO' }}

        We Only want to let the user to edit title and description.
        Use lodash _.pick to pass into the values.
        */}
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// Get some initial values for the form
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
