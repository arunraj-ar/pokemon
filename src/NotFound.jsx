import { useCallback, useEffect, useState } from "react";
import { getTextInLocale, throttle } from "./assets/helpers";
import { getRandomRegion } from "./api/pokeAPI";
import { useLocalStorage } from "./hooks/useLocalStorage";

export const NotFound = () => {
  const [regionInfo, setRegionInfo] = useState({});

  const [regions, setRegions] = useLocalStorage("regions",[]);

  useEffect(() => {
    const getRegion = async () => {
      const randomRegion = await getRandomRegion();
      setRegionInfo(randomRegion);
      const regionName = getTextInLocale(randomRegion?.names, "en")
      if(!regions.includes(regionName)) {
        setRegions([...regions, regionName])
      }
    };
    throttle(getRegion());
  }, []);

  const getRegionName = useCallback(() => {
    if(regions.length > 5) {
      return regions[Math.floor(Math.random() * regions.length)]
    }
    return getTextInLocale(regionInfo?.names, "en");
  },[regions, regionInfo])

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh text-center">
      <div className="w-fit flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="relative m-4 z-10 text-9xl">404</h1>
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/201.gif"
          />
        </div>
        <h2 className="m-2 text-5xl">Page Not Found</h2>
        <h3 className="mt-8 text-xl sm:text-2xl lg:text-3xl">
          you have reached an unknown region😱
        </h3>
        <p className="text-xs sm:text-sm lg:text-lg">
          would you like to explore{" 👉"}
          <a className="underline cursor-pointer">
            {getRegionName()}
          </a>
          {"👈 "}
          region instead?
        </p>
      </div>
    </div>
  );
};
