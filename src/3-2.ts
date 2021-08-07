{
  type MyPartial<T> = {
    [K in keyof T]?: T[K];
  };
  // 使用例
  /*
   * T1は { foo?: number; bar?: string; } となる
   */
  type T1 = Partial<{
    foo: number;
    bar: string;
  }>;
  /*
   * T2は { hoge?: { piyo: number; } } となる
   */
  type T2 = MyPartial<{
    hoge: {
      piyo: number;
    };
  }>;
}
