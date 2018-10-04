---
category: demo
order: 0
title: Button
name: 基础用法
---

```jsx
import { Button } from 'sense-ui';

const ButtonDemo = () => (
  <div>
    <div>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
    </div>
    <div>
      <Button radius>圆角按钮</Button>
      <Button type="primary" radius>主要按钮</Button>
    </div>
    <div>
      <Button reverse>圆角按钮</Button>
      <Button type="primary" reverse>主要按钮</Button>
    </div>
  </div>
);

```
