export enum OS {
  Windows,
  MacOS,
  Linux,
  iOS,
  Android
}

export function useOS() {
  let isWindows = (false);
  let isMacOS = (false);
  let isLinux = (false);
  let isIOS = (false);
  let isAndroid = (false);

  let os: OS | undefined;

  const userAgent = (navigator.userAgent);

  const resolveOS = () => {
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    const iosPlatforms = ["iPhone", "iPad", "iPod"];

    isMacOS = macosPlatforms.some(platform => userAgent.includes(platform));
    isWindows = windowsPlatforms.some(platform => userAgent.includes(platform));
    isIOS = iosPlatforms.some(platform => userAgent.includes(platform));
    isLinux = userAgent.includes("Linux");
    isAndroid = userAgent.includes("Android");

    if (isWindows) os = OS.Windows;
    if (isMacOS) os = OS.MacOS;
    if (isLinux) os = OS.Linux;
    if (isIOS) os = OS.iOS;
    if (isAndroid) os = OS.Android;
  };

  resolveOS();

  return {
    isWindows,
    isMacOS,
    isLinux,
    isIOS,
    isAndroid,
    os
  };
}
