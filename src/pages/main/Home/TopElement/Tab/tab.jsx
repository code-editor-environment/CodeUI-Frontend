import React, { Component } from "react";
import "./tab.scss";
class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };
  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;
    let className = "tab-list-item";
    if (activeTab === label) {
      className += ` ${"tab-list-active"}`;
    }
    return (
      <div className={`tab tab--all ${className}`} onClick={onClick}>
        <div className="tab-content">{label}</div>
      </div>
    );
  }
}

export default Tab;
