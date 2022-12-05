type WindowResizeEvent = UIEvent;

type ResizeListener = (e: WindowResizeEvent) => void;

const NotifyListeners = Symbol("NotifyListeners");

class WindowResize {
  private static listeners = new Set<ResizeListener>();

  private constructor() {}

  static addListener(listener: ResizeListener) {
    WindowResize.listeners.add(listener);
    return () => WindowResize.removeListener(listener);
  }

  static removeListener(listener: ResizeListener) {
    WindowResize.listeners.delete(listener);
  }

  static [NotifyListeners](e: WindowResizeEvent) {
    WindowResize.listeners.forEach(listener => listener(e));
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("resize", WindowResize[NotifyListeners]);
}

export default WindowResize;
