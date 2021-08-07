{
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : T;
  // utirity Tyoes

  type Profile = {
    name: string;
    age: number;
  };
  // maped type: in keyof
  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };
  type PartialProfile = MyPartial<Profile>;
  type Rec = Exclude;
}
