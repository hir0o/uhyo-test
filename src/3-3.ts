{
  interface EventPayloads {
    start: {
      user: string;
    };
    stop: {
      user: string;
      after: number;
    };
    end: {};
  }

  class EventDischarger<E> {
    emit<Ex extends keyof E>(eventName: Ex, payload: E[Ex]) {
      // 省略
    }
  }

  // 使用例
  const ed = new EventDischarger<EventPayloads>();
  ed.emit("start", {
    user: "user1",
  });
  ed.emit("stop", {
    user: "user1",
    after: 3,
  });
  ed.emit("end", {});

  // エラー例
  ed.emit("start", {
    user: "user2",
    after: 0,
  });
  ed.emit("stop", {
    user: "user2",
  });
  ed.emit("foobar", {
    foo: 123,
  });
}
