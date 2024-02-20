import '@testing-library/jest-dom/vitest'

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  value: (query: unknown) => ({
    addEventListener: () => {},
    addListener: () => {},
    dispatchEvent: () => {},
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: () => {},
    removeListener: () => {},
  }),
  writable: true,
})

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const {getComputedStyle} = window
window.getComputedStyle = elt => getComputedStyle(elt)
