import React from "react";
import PropTypes from "prop-types";
import TimeAgo from "timeago-react";

import {
  ArticleTitle,
  ArticleTitleLink,
  ArticleSubTitle,
} from "./Story.styles";

const Story = ({ data }) => (
  <article className="border-bottom p-3">
    <header className="mb-2">
      <ArticleTitle>
        {data.url ? (
          <ArticleTitleLink href={data.url} target="_blank">
            {data.title}
          </ArticleTitleLink>
        ) : (
          data.title
        )}
      </ArticleTitle>
    </header>

    <ArticleSubTitle>
      by {data.author.id} ({data.author.karma}){", "}
      <TimeAgo datetime={new Date(data.time * 1000).toString()} /> | score:{" "}
      {data.score}
    </ArticleSubTitle>
  </article>
);

Story.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    time: PropTypes.number,
    score: PropTypes.number,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      karma: PropTypes.number,
    }),
  }).isRequired,
};

export default Story;
