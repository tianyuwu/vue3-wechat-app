import { getJsSDKConfigApi } from "@/api/wechat";
import { useWxSDK } from "@/hooks/useWxSDK";
import { commonStore } from "@/store/modules/common";

export function useWxShare(shareConfig: {
  title: string;
  imgUrl: string;
  desc: string;
}) {
  const { initConfig, setShareInfo, isiOSWechat } = useWxSDK();

  const shareUrl = window.location.href.split("#")[0];
  const signatureUrl = isiOSWechat()
    ? commonStore.commonState.visitUrl
    : shareUrl;

  getJsSDKConfigApi(signatureUrl).then((config) => {
    initConfig(config).then(() => {
      setShareInfo({
        ...shareConfig,
        link: shareUrl,
      });
    });
  });
}
