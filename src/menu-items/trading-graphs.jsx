// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import ChromeOutlined from '@ant-design/icons/ChromeOutlined';

// type

// icons
const icons = { ChromeOutlined };

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const samplePage = {
  id: 'trading-graphs',
  title: <FormattedMessage id="trading-graphs" />,
  type: 'group',
  url: '/trading-graphs',
  icon: icons.ChromeOutlined
};

export default samplePage;
