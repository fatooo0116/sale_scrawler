const puppeteer = require('puppeteer')
 
const iPhone = puppeteer.devices['iPhone 6']; // set device type
 
(async () => {
    const browser = await puppeteer.launch({
       // ignoreHTTPSErrors: true,
        // args: [ '--proxy-server=https://60.250.144.184:3128' ]
     });
  const page = await browser.newPage() //new page/tab
  await page.emulate(iPhone) //emulate device
  await page.goto('https://tw.discount.wave-base.com/sale/NBDe2/%E5%A4%AA%E5%B9%B3%E6%B4%8B%E7%99%BE%E8%B2%A8%E5%B1%8F%E6%9D%B1%E5%BA%97-%E5%B1%8F%E6%9D%B1%E5%A4%AA%E5%B9%B3%E6%B4%8B%E7%99%BE%E8%B2%A8-2f-%E7%BE%8E%E9%AB%94%E5%B0%8F%E8%88%96-the-body-shop%E5%85%A8%E5%8F%B046%E9%80%B1%E5%B9%B4%E6%85%B6-%E9%80%B1%E6%9C%AB%E5%8A%A0%E7%A2%BC%E5%84%AA%E6%83%A0-%E5%A5%BD%E8%A9%95%E5%BB%B6%E9%95%B7%E4%B8%8D%E9%8C%AF%E9%81%8E') //navigate to url


  /*
  console.log(await page.title()) //log title of page
  const newPage = await page.evaluate(() => {
    return  document.getElementById("msg").innerHTML;
  });
  */



  //  console.log(newPage()); 
    /*
  const msg = await page.$("#msg");
  console.log(msg);
  */


  const newPage = await page.evaluate(() => {

          let all_title = document.querySelector(".profile-box").querySelector(".profile-name a").innerHTML;
          // let all_title = jQuert(".style2 > .profile-box > .profile-name > a"); 

          let msg = document.getElementById("msg").innerHTML;
         
          var pics = document.querySelectorAll("#pics-box a");
          var allpic =[];
          for (var i = 0; i < pics.length; i++) {
            allpic.push(pics[i].getAttribute("href"));           
          }

          let link1 = document.getElementById("link-1").getAttribute("href"); 
          
          let address = document.querySelector("#address span").innerHTML;

          let result = {
            mytitle:all_title,
            msg:msg,
            picbox:allpic,
            link:link1,
            address:address
          }

          return result
    });


 // newPage();
  console.log(newPage)



  await browser.close() //close browser


 

})()




