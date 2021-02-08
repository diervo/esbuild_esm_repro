
const isModule = typeof module !== 'undefined';

export function foo() {
    return isModule ? 'foo': 'bar';
}