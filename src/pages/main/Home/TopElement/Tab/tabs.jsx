import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./tab";
import { connect } from "react-redux";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="root-container root-container--with-navigation home-page posts-preview">
        <div className="navigation-section" style={{ paddingTop: "57px" }}>
          <div className="sticky-wrapper">
            <nav className="navigation-categories">
              {children.map((child) => {
                const { label } = child.props;
                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </nav>
          </div>
        </div>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    );
  }
}

export default connect()(Tabs);
