export default class Kind {
  constructor(stories, addons, decorators, kind) {
    this.kind = kind;
    this._stories = stories;
    this._decorators = decorators.slice();
    Object.assign(this, addons);
  }

  addDecorator(decorator) {
    this._decorators.push(decorator);
  }

  add(story, fn) {
    const decorated = this._decorate(fn);
    this._stories.add(this.kind, story, decorated);
    return this;
  }

  _decorate(fn) {
    return this._decorators.reduce((decorated, decorator) => {
      return context => {
        const _fn = () => decorated(context);
        return decorator(_fn, context);
      };
    }, fn);
  }
}
