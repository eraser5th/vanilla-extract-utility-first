import { style } from "@vanilla-extract/css";
import { pxUnits } from "../../constants/pxUnits";

enum Margin {
  px0 = "0px",
  px1 = "1px",
  px2 = "2px",
  px4 = "4px",
  px6 = "6px",
  px8 = "8px",
  px10 = "10px",
  px12 = "12px",
  px14 = "14px",
  px16 = "16px",
  px20 = "20px",
  px24 = "24px",
  px28 = "28px",
  px32 = "32px",
  px36 = "36px",
  px40 = "40px",
  px44 = "44px",
  px48 = "48px",
  px52 = "52px",
  px56 = "56px",
  px60 = "60px",
  px64 = "64px",
  px68 = "68px",
  px72 = "72px",
  px76 = "76px",
  px80 = "80px",
  px84 = "84px",
  px88 = "88px",
  px92 = "92px",
  px96 = "96px",
  px100 = "100px",
  px104 = "104px",
  px108 = "108px",
  px112 = "112px",
  px116 = "116px",
  px120 = "120px",
  px124 = "124px",
  px128 = "128px",
  px132 = "132px",
  px136 = "136px",
  px140 = "140px",
  px144 = "144px",
  px148 = "148px",
  px152 = "152px",
  px156 = "156px",
  px160 = "160px",
  px164 = "164px",
  px168 = "168px",
  px172 = "172px",
  px176 = "176px",
  px180 = "180px",
  px184 = "184px",
  px188 = "188px",
  px192 = "192px",
  px196 = "196px",
  px200 = "200px",
  px204 = "204px",
  px208 = "208px",
  px212 = "212px",
  px216 = "216px",
  px220 = "220px",
  px224 = "224px",
  px228 = "228px",
  px232 = "232px",
  px236 = "236px",
  px240 = "240px",
  px244 = "244px",
  px248 = "248px",
  px252 = "252px",
  px256 = "256px",
  px260 = "260px",
  px264 = "264px",
  px268 = "268px",
  px272 = "272px",
  px276 = "276px",
  px280 = "280px",
  px284 = "284px",
  px288 = "288px",
  px292 = "292px",
  px296 = "296px",
  px300 = "300px",
  px304 = "304px",
  px308 = "308px",
  px312 = "312px",
  px316 = "316px",
  px320 = "320px",
  px324 = "324px",
  px328 = "328px",
  px332 = "332px",
  px336 = "336px",
  px340 = "340px",
  px344 = "344px",
  px348 = "348px",
  px352 = "352px",
  px356 = "356px",
  px360 = "360px",
  px364 = "364px",
  px368 = "368px",
  px372 = "372px",
  px376 = "376px",
  px380 = "380px",
  px384 = "384px",
}

type MarginStyles = Record<`px${typeof pxUnits[number]}`, string>;

const partialM: Partial<MarginStyles> = {};

pxUnits.forEach((pxUnit) => {
  partialM[`px${pxUnit}`] = style({
    margin: pxUnit + "px",
  });
});

export const m: MarginStyles = partialM as MarginStyles;

const partialMl: Partial<MarginStyles> = {};

pxUnits.forEach((pxUnit) => {
  partialMl[`px${pxUnit}`] = style({
    marginLeft: pxUnit + "px",
  });
});

export const ml: MarginStyles = partialMl as MarginStyles;

const partialMr: Partial<MarginStyles> = {};

pxUnits.forEach((pxUnit) => {
  partialMr[`px${pxUnit}`] = style({
    marginRight: pxUnit + "px",
  });
});

export const mr: MarginStyles = partialMr as MarginStyles;

const partialMt: Partial<MarginStyles> = {};

pxUnits.forEach((pxUnit) => {
  partialMt[`px${pxUnit}`] = style({
    marginTop: pxUnit + "px",
  });
});

export const mt: MarginStyles = partialMt as MarginStyles;

const partialMb: Partial<MarginStyles> = {};

pxUnits.forEach((pxUnit) => {
  partialMb[`px${pxUnit}`] = style({
    marginBottom: pxUnit + "px",
  });
});

export const mb: MarginStyles = partialMb as MarginStyles;

export const mx: MarginStyles = pxUnits
  .map((pxUnit) => {
    const key: keyof MarginStyles = `px${pxUnit}`;
    const a = {
      [key]: style([ml[key], mr[key]]),
    };
    return a;
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as MarginStyles;

export const my: MarginStyles = pxUnits
  .map((pxUnit) => {
    const key: keyof MarginStyles = `px${pxUnit}`;
    const a = {
      [key]: style([mt[key], mb[key]]),
    };
    return a;
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as MarginStyles;

export const marginProperties = {
  margin: Margin,
  marginLeft: Margin,
  marginRight: Margin,
  marginTop: Margin,
  marginBottom: Margin,
};

export const marginShorthands = {
  m: ["margin"] as ["margin"],
  mx: ["marginLeft", "marginRight"] as ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"] as ["marginTop", "marginBottom"],
  ml: ["marginLeft"] as ["marginLeft"],
  mr: ["marginRight"] as ["marginRight"],
  mt: ["marginTop"] as ["marginTop"],
  mb: ["marginBottom"] as ["marginBottom"],
};
