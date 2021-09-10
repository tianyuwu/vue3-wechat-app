import { useAxios } from "@/hooks/useAxios";

/**
 * 获取jssdk配置相关参数
 * @param url 需要签名的页面url
 * @returns
 */
export function getJsSDKConfigApi(url: string) {
  return useAxios.get(`/api/wechat/jssdk`, {
    url,
  });
}

/**
 * 获取微信授权跳转地址
 * @param callbackUrl 回调的页面url
 * @returns
 */
export function getAuthUrlApi(callbackUrl: string) {
  return useAxios({
    url: "/api/wechat/auth",
    params: {
      redirect_url: callbackUrl,
    },
  });
}

/**
 * 授权登录并获取token
 * @param code 微信授权登录回调参数
 * @returns 
 */
export function wechatAuthApi(code: string) {
  return useAxios({
    method: "POST",
    url: "/api/wechat/auth",
    params: {
      code,
    },
  });
}
