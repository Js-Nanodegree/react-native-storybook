import 'es6-shim';
import render from '@kadira/storybook-ui';
import Provider from './provider';

const config = window.STORYBOOK_CONFIG;
const root = document.getElementById('root');
render(root, new Provider(config));
