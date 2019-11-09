import React from "react";
import PropTypes from "prop-types";
// (2) Here there's an example. In this case the Node runtime won't be able to understand this type of file, so an error will be thrown
import styles from "./auto-scaling-text.module.css";

class AutoScalingText extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  node = React.createRef();
  getScale() {
    const node = this.node.current;
    if (!node) {
      return 1;
    }
    const parentNode = node.parentNode;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (actualScale < 1) {
      return actualScale * 0.9;
    }
    return 1;
  }

  render() {
    const scale = this.getScale();

    // (1) As you can see here, the imported styles are assigning a CSS class to this container (autoScalingText)
    return (
      <div
        className={styles.autoScalingText}
        style={{ transform: `scale(${scale},${scale})` }}
        ref={this.node}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AutoScalingText;
