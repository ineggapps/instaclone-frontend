import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
  query eeUser($username: String!) {
    seeUser(username: $username) {
      avatar
      username
      fullName
      isFollowing
      isSelf
      followersCount
      followingCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

export default withRouter(({ match: { params: { username } } }) => {
  const { data, loading } = useQuery(GET_USER, { variables: { username } });
  return <ProfilePresenter loading={loading} data={data} />;
});
