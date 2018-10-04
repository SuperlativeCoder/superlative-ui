---
category: demo
order: 0
title: Button
name: 禁用状态
---

```jsx
import { Button } from 'sense-ui';

const ButtonDemo = () => (
  <div>
    <div>
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
    </div>
    <div>
      <Button radius disabled>圆角按钮</Button>
      <Button type="primary" radius disabled>主要按钮</Button>
    </div>
  </div>
);
```
