declare function addEventListener(
  type: string,
  handler: () => void,
  options?:
    | boolean
    | {
        capture?: boolean;
        once?: boolean;
        passive?: boolean;
      }
): void;

// 使用例
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false,
});

// エラー例
addEventListener("foobar", () => {}, "string");
addEventListener("hoge", () => {}, {
  capture: true,
  once: false,
  excess: true,
});
