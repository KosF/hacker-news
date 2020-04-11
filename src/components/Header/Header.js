import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getStoriesList } from "Src/store/StoriesList/storiesListActions";

export const Header = ({ refreshStoriesList }) => {
  const onRefresh = () => {
    refreshStoriesList();
  };

  return (
    <header
      id="header"
      className="border-bottom mb-4 pt-2 pb-2 bg-white shadow-sm"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <strong>
          <img
            src="https://i.ya-webdesign.com/images/hacker-news-logo-png-15.png"
            width="120px"
            height="51px"
            alt="Hacker News"
          />
        </strong>

        <button type="button" className="btn btn-info" onClick={onRefresh}>
          Refresh
        </button>
      </div>
    </header>
  );
};

const mapDispatchToProps = { refreshStoriesList: getStoriesList };

Header.propTypes = {
  refreshStoriesList: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
