import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.scss';

const propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary']), // 类型
  radius: PropTypes.bool, // 圆角
  block: PropTypes.bool, // 宽度100%
  size: PropTypes.oneOf(['', 'large', 'small']), // 尺寸
  reverse: PropTypes.bool, // 背景色与文字颜色对调
  disabled: PropTypes.bool, // 禁用
  className: PropTypes.string,
};

const defaultProps = {
  children: '',
  type: 'default',
  radius: false,
  block: false,
  size: '',
  reverse: false,
  disabled: false,
  className: '',
};

class Button extends Component {
  constructor(props) {
    super(props);

    this.onTouchstart = this.onTouchstart.bind(this);
    this.onTouchend = this.onTouchend.bind(this);

    this.state = {
      onFocus: false,
    };
  }

  onTouchstart() {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    this.setState({
      onFocus: true,
    });
  }

  onTouchend() {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    this.setState({
      onFocus: false,
    });
  }

  render() {
    const {
      children,
      type,
      radius,
      block,
      size,
      reverse,
      disabled,
      className,
      ...restProps
    } = this.props;
    const { onFocus } = this.state;

    const buttonClassNames = classnames('su-button', className, {
      [type]: true,
      radius,
      block,
      [size]: true,
      reverse,
      focus: onFocus,
      disabled,
    });

    return (
      <button
        className={buttonClassNames}
        onTouchStart={this.onTouchstart}
        onTouchEnd={this.onTouchend}
        {...restProps}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
