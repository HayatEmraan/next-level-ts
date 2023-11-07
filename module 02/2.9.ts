// conditional type

type a = null;
type b = undefined;

type c = a extends null ? true : false;

type x = b extends null ? true : false;

type xc = a extends undefined ? true : b extends undefined ? true : false;

type Properties = {
  car: boolean;
  house: boolean;
  iphone: boolean;
};

type HasProperties<T> = T extends keyof Properties ? true : false;

type HasIphone = HasProperties<"iphone">;
