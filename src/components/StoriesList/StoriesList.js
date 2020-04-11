import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Loader from "Components/Loader/Loader";
import { getStoriesList } from "Src/store/StoriesList/storiesListActions";

import Story from "./Story/Story";

export const StoriesList = ({
  storiesList,
  loading,
  error,
  fetchStoriesList,
}) => {
  useEffect(() => {
    fetchStoriesList();
  }, [fetchStoriesList]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="p-3 text-center error-message">{error.message}</div>;
  }

  if (!storiesList.length) {
    return <div className="p-3 text-center message">No data</div>;
  }

  return (
    <Fragment>
      {storiesList.map((story) => (
        <Story key={story.id} data={story} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = (store) => ({
  storiesList: store.storiesListReducer.storiesList,
  loading: store.storiesListReducer.loading,
  error: store.storiesListReducer.error,
});

const mapDispatchToProps = { fetchStoriesList: getStoriesList };

StoriesList.propTypes = {
  fetchStoriesList: PropTypes.func.isRequired,
  storiesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

StoriesList.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoriesList);
