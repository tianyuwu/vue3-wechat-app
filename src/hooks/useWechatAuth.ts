import { getAuthUrlApi, wechatAuthApi } from "@/api/wechat";

interface UserInfo {
  access_token: string;
  openid: string;
  nickname: string;
  avatar: string;
}

/*
 * 跳转到微信授权
 */
export function jump2Auth(callbackUrl: string) {
  getAuthUrlApi(callbackUrl).then((authUrl: any) => {
    if (import.meta.env.DEV) {
      window.location.href = callbackUrl + "?code=test";
    } else {
      window.location.href = authUrl;
    }
  });
}

/**
 * 获取用户信息
 * @param code
 * @returns
 */
export async function getUserInfo(code: string) {
  const userInfo: UserInfo = await wechatAuthApi(code)
  return userInfo;
}
