import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { hot } from 'react-hot-loader/root';

import store from '../../store';
import { Style } from '../../style';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Wrapper, Content, IconItem, Menu, Image } from './style';
import { TopSites } from '../TopSites';
import { icons } from '~/renderer/constants';

const GlobalStyle = createGlobalStyle`${Style}`;

const onIconClick = (name: string) => () => {
  window.location.href = `wexond://${name}`;
};

export default hot(
  observer(() => {
    return (
      <ThemeProvider theme={store.theme}>
        <GlobalStyle />
        <Wrapper>
          <Image src={store.image}></Image>
          <Menu>
            <IconItem
              title="Settings"
              icon={icons.settings}
              onClick={onIconClick('settings')}
            ></IconItem>
            <IconItem
              title="History"
              icon={icons.history}
              onClick={onIconClick('history')}
            ></IconItem>
            <IconItem
              title="Bookmarks"
              icon={icons.bookmarks}
              onClick={onIconClick('bookmarks')}
            ></IconItem>
            <IconItem
              title="Downloads"
              icon={icons.download}
              onClick={onIconClick('downloads')}
            ></IconItem>
            <IconItem
              title="Extensions"
              icon={icons.extensions}
              onClick={onIconClick('extensions')}
            ></IconItem>
          </Menu>
          <Content>
            <TopSites></TopSites>
          </Content>
        </Wrapper>
      </ThemeProvider>
    );
  }),
);
