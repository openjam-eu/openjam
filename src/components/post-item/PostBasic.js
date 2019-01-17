// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, SegmentGroup } from 'semantic-ui-react';

import { SegmentPostBasic } from '../SegmentPost';
import { deletePost, addLike, removeLike } from '../../reducers/ui/views/share';
import { getUser, getIsAuthenticated } from '../../reducers/auth';

import LikeButton from './LikeButton';
import AddComment from './AddComment';
import Intro from './Intro';
import Comment from './Comment';
import { Content } from './styles';

type Props = {
  user: {},
  post: {
    _id: string,
    text: string,
    likes?: [],
    shares?: [],
    comments?: [],
  },
  isAuthenticated: boolean,
};

class PostBasic extends Component<Props> {
  findUserLike = likes => {
    const { user } = this.props;
    return likes && likes.filter(like => like.user === user._id).length > 0;
  };

  renderComments = comments =>
    comments !== undefined &&
    comments !== null &&
    comments.length > 0 &&
    comments.map(comment => <Comment key={comment._id} comment={comment} />);

  render() {
    const { post, addLike, removeLike, isAuthenticated } = this.props;
    const { text, comments, avatar, likes } = post;
    const likesCount = likes ? likes.length : 0;
    // const sharesCount = shares ? shares.length : 0;

    return (
      <SegmentPostBasic>
        <Intro post={post} />

        <Content>
          <p>{text}</p>

          {comments && (comments.length > 0 || isAuthenticated) && (
            <SegmentGroup>
              {comments.length > 0 && <Segment>{this.renderComments(comments)}</Segment>}
              {isAuthenticated && (
                <Segment>
                  <AddComment avatar={avatar} postId={post._id} />
                </Segment>
              )}
            </SegmentGroup>
          )}

          {isAuthenticated && (
            <LikeButton
              likes={likesCount}
              likeAction={() => addLike(post._id)}
              unlikeAction={() => removeLike(post._id)}
              active={this.findUserLike(post.likes)}
            />
          )}
          {/* TODO: implement the share button */}
          {/* <ShareButton shares={sharesCount} /> */}
        </Content>
      </SegmentPostBasic>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike },
)(PostBasic);
