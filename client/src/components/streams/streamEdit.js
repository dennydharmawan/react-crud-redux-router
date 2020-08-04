import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div> loading... </div>;
    }

    return (
      <div>
        <div>
          Edit the stream
          <StreamForm
            onSubmit={this.onSubmit}
            stream={stream}
            initialValues={_.pick(this.props.stream, "title", "description")}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
