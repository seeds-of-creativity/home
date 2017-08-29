/* eslint-disable import/imports-first */
jest.unmock('../App');

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../App';



describe('App', () => {
  it('renders children correctly', () => {
    // in your test:
    const renderer = new ShallowRenderer();
    renderer.render(
      <App context={{ insertCss: () => {} }}>
        <div className="child" />
      </App>,
    );
    const result = renderer.getRenderedOutput();

    expect(result.contains(<div className="child" />)).toBe(true);
  });
});
