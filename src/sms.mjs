import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';

export default class Client {

  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(accessKeyId, accessKeySecret) {
    let config = new $OpenApi.Config({
      // 您的 AccessKey ID
      accessKeyId: accessKeyId,
      // 您的 AccessKey Secret
      accessKeySecret: accessKeySecret,
    });
    // 访问的域名
    config.endpoint = `dysmsapi.aliyuncs.com`;
    return new Dysmsapi20170525.default(config);
  }

  static async main({ targetPhone, content }) {
    let client = Client.createClient("read.from.env", "read.from.env");
    let sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
      signName: "阿里云短信测试",// hard-coded, change here if any need
      templateCode: "SMS_154950909",// hard-coded, change here if any need
      phoneNumbers: targetPhone,
      templateParam: content,
    });
    let runtime = new $Util.RuntimeOptions({});
    try {
      // 复制代码运行请自行打印 API 的返回值
      await client.sendSmsWithOptions(sendSmsRequest, runtime);
    } catch (error) {
      console.log(error);
    }
  }

}

//demo 
Client.main({ targetPhone: "17682319234", content: JSON.stringify({ code: "6636" }) });