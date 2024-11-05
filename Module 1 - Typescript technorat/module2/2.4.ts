{
  //Generic Interface - dynamic kora jai , default bhave null die disi 
  interface Developer<T, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y;
  }
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch, null> = {
    name: "Perisan",
    computer: {
      brand: "Dell",
      model: "X3%",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emiliab",
      model: "k166",
      display: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  const richDeveloper: Developer<AppleWatch, { model: string }> = {
    name: "richPerisan",
    computer: {
      brand: "HP",
      model: "X3%",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      display: "oled",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "RX11",
    },
  };
}
