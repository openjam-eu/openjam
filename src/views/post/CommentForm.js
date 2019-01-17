// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import TextAreaFieldGroup from '../../components/input/TextAreaFieldGroup';
import { addComment } from '../../reducers/ui/views/share';
import { getErrors } from '../../reducers/data/error';
import { getUser } from '../../reducers/auth';
import withTheme from '../../hocs/withTheme';

type Props = {
  addComment: (postId: string) => void,
  postId: string,
  user: {
    firstName: string,
    lastName: string,
    avatar: string,
  },
  errors: {},
  theme: { primarySemantic: string },
};

type State = {
  text: string,
  errors: {},
};

class CommentForm extends PureComponent<Props, State> {
  state = {
    text: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const { user, postId } = this.props;

    const newComment = {
      text: this.state.text,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
  };

  render() {
    const { errors } = this.state;
    const { theme } = this.props;

    return (
      <div>
        <p>Make a comment...</p>
        <Form error noValidate onSubmit={this.handleSubmit}>
          <TextAreaFieldGroup
            placeholder="Reply to post"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            error={errors.text}
          />
          <Form.Button
            fluid
            size="large"
            color={theme.primarySemantic}
            content="Submit"
            onClick={this.handleSubmit}
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  errors: getErrors(state),
});

export default withTheme(
  connect(
    mapStateToProps,
    { addComment },
  )(CommentForm),
);
