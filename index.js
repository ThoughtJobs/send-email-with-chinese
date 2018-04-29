var nodemailer = require('nodemailer');
var fs = require('fs');

var items = JSON.parse(fs.readFileSync('./selected-items.json', 'utf8'));

let smtpConfig = {
  host: 'smtp.126.com',
  port: 465,
  secure: true,
  auth: {
    user: 'twer_vip@126.com',
    pass: 'tj987123'
  }
}

var smtpTransport = nodemailer.createTransport(smtpConfig);

//
// let receiver = 'xiaotaozi1127@126.com';
// let username = 'xiaotaozi1127';
// let unsubscribe = 'http://47.52.250.225?email=' + receiver;
// let tracker = "http://47.52.250.225:3001/piwik.php?action_name=&idsite=1&rec=1&r=407763&h=1&m=17&s=0&url=http%3A%2F%2Flocalhost%3A63342%2FrejectPage%2FrejectPage.html%3F_ijt%3Dmcllauodgkqcn93b5cv5g5bc2d&_id=9a0a1afdabc0ded8&_idts=1505716428&_idvc=46&_idn=0&_refts=0&_viewts=1524849402&cs=windows-1252&send_image=1&pdf=1&qt=0&realp=0&wma=0&dir=0&fla=1&java=0&gears=0&ag=0&cookie=1&res=1440x900&gt_ms=10&pv_id=zjp30L&uid=" + username;
// let message = {
//   from: 'ThoughtWorker <twer_vip@126.com>',
//   to: receiver,
//   subject: 'ThoughtWorks招贤纳士',
//   html: '<p>Hello ' + username + ',</p>\n' +
//   '        <p>我们是ThoughtWorks的员工，在为公司做人才筛选调研的时候，我们发现你在Github上有非常活跃的记录。我们的同事都是热爱学习，自我驱动力强的人。希望有机会我们也能一起共事。</p>\n' +
//   '        <p><b>公司简介：</b></p>\n' +
//   '        <p style="margin-left: 20px">ThoughtWorks成立于1993年, 在15个国家拥有42间办公室和5000多名卓越人才。我们是富有激情的行业创新者, 致力于为企业提供转型咨询和软件交付服务。ThoughtWorks中国相继在西安、北京、成都、上海、深圳、武汉设有6个办公室。我们把热衷挑战、喜欢突破常规思维的人聚集在一起, 结合我们丰富的方法论和实践经验, 帮助客户快速实现商业愿景。\n' +
//   '            与此同时, 我们也相信知识的流动将推动行业发展, 并造福于社会大众。</p>\n' +
//   '        <p><b>加入ThoughtWorks, 你会获得什么？</b></p>' +
//   '        <ul>' +
//               '<li>带薪年假10天起步，带薪病假15天</li>' +
//               '<li>六险一金，公积金缴存基数12%</li>' +
//               '<li>全新MacBook Pro</li>' +
//               '<li>每年2000 RMB学习基金</li>' +
//               '<li>Buddy、Sponsor机制，为你贴心定制成长计划</li>' +
//               '<li>扁平的组织结构，自由交流的工作环境</li>' +
//               '<li>无限可能的职业发展规划</li>' +
//           ' </ul>' +
//   '        <p style="margin-top: 20px">目前公司处于快速发展阶段，武汉长期开放职位有：Web前端开发，后端开发（Java），DevOps运维工程师等。2018秋季校园招聘也将在9月举行，如您是在校学生，欢迎届时关注我们。</p>\n' +
//   '        <p>如果您对我们公司感兴趣，可直接回复简历到该邮件，标题: [内推] + 姓名 + 求职意向。想获取面试流程，面试指导以及详细职位介绍 等信息，请关注公众号 <b>ThoughtJobs</b>，我们会为您定制属于你的ThoughtWorks之旅。</p>\n' +
//   '        <img src="' + tracker + '" alt="">\n' +
//   '        <img src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3OTE0NDk3MA==&mid=502535419&idx=1&sn=62b858517cb3b261bd049f9f052b896b&send_time=1523341237" alt="">\n' +
//   '        <p>如果你对目前的工作已经非常满意，恭喜。不想收到类似的邮件，点击<a href="' + unsubscribe + '">取消关注</a>。</p>'
//   };
// //
// smtpTransport.sendMail(message, (err, info) => {
//   if (err) {
//     console.log('Error occurred. ' + err.message);
//     return process.exit(1);
//   }
//   console.log('Message sent: %s', info.messageId);
// });
//
//

for(let i = 0; i < items.length; i++){
  let item = items[i];
  let receiver = item.email;
  let username = item.username;
  let tracker = "http://47.52.250.225:3001/piwik.php?action_name=&idsite=1&rec=1&r=407763&h=1&m=17&s=0&url=http%3A%2F%2Flocalhost%3A63342%2FrejectPage%2FrejectPage.html%3F_ijt%3Dmcllauodgkqcn93b5cv5g5bc2d&_id=9a0a1afdabc0ded8&_idts=1505716428&_idvc=46&_idn=0&_refts=0&_viewts=1524849402&cs=windows-1252&send_image=1&pdf=1&qt=0&realp=0&wma=0&dir=0&fla=1&java=0&gears=0&ag=0&cookie=1&res=1440x900&gt_ms=10&pv_id=zjp30L&uid=" + username;
  // let unsubscribe = 'https://tjapi.twer.vip/unsubscribe?email=' + receiver;
  let unsubscribe = 'http://47.52.250.225?email=' + receiver;

  let message = {
    from: 'ThoughtWorker <twer_vip@126.com>',
    to: receiver,
    subject: 'ThoughtWorks招贤纳士',
    html: '<p>Hello ' + username + ',</p>\n' +
    '        <p>我们是ThoughtWorks的员工，在为公司做人才筛选调研的时候，我们发现你在Github上有非常活跃的记录。我们的同事都是热爱学习，自我驱动力强的人。希望有机会我们也能一起共事。</p>\n' +
    '        <p><b>公司简介：</b></p>\n' +
    '        <p style="margin-left: 20px">ThoughtWorks成立于1993年, 在15个国家拥有42间办公室和5000多名卓越人才。我们是富有激情的行业创新者, 致力于为企业提供转型咨询和软件交付服务。ThoughtWorks中国相继在西安、北京、成都、上海、深圳、武汉设有6个办公室。我们把热衷挑战、喜欢突破常规思维的人聚集在一起, 结合我们丰富的方法论和实践经验, 帮助客户快速实现商业愿景。\n' +
    '            与此同时, 我们也相信知识的流动将推动行业发展, 并造福于社会大众。</p>\n' +
    '        <p><b>加入ThoughtWorks, 你会获得什么？</b></p>' +
    '        <ul>' +
    '<li>带薪年假10天起步，带薪病假15天</li>' +
    '<li>六险一金，公积金缴存基数12%</li>' +
    '<li>全新MacBook Pro</li>' +
    '<li>每年2000 RMB学习基金</li>' +
    '<li>Buddy、Sponsor机制，为你贴心定制成长计划</li>' +
    '<li>扁平的组织结构，自由交流的工作环境</li>' +
    '<li>无限可能的职业发展规划</li>' +
    ' </ul>' +
    '        <p style="margin-top: 20px">目前公司处于快速发展阶段，武汉长期开放职位有：Web前端开发，后端开发（Java），DevOps运维工程师等。2018秋季校园招聘也将在9月举行，如您是在校学生，欢迎届时关注我们。</p>\n' +
    '        <p>如果您对我们公司感兴趣，可直接回复简历到该邮件，标题: [内推] + 姓名 + 求职意向。想获取面试流程，面试指导以及详细职位介绍 等信息，请关注公众号 <b>ThoughtJobs</b>，我们会为您定制属于你的ThoughtWorks之旅。</p>\n' +
    '        <img src="' + tracker + '" alt="">\n' +
    '        <img src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3OTE0NDk3MA==&mid=502535419&idx=1&sn=62b858517cb3b261bd049f9f052b896b&send_time=1523341237" alt="">\n' +
    '        <p>如果你对目前的工作已经非常满意，恭喜。不想收到类似的邮件，点击<a href="' + unsubscribe + '">取消关注</a>。</p>'
  };

  smtpTransport.sendMail(message, (err, info) => {
    console.log('index = ' + i);
    console.log('receiver', receiver);
    console.log('username', username);
    if (err) {
      console.log('Error occurred. ' + err.message);
      return process.exit(1);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

