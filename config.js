const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Nathaniel²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139401729";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_53_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTczLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTUhTVmtFRFBuc1Bmd3BlSVZvM053V2NSeTFxOHdaSUlXMEUyM3hkNklMMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOHltT3JUenNUSk9UaW1DRVRRVmdSQVwiLFxuICBcInBob25lSWRcIjogXCI0NjVmNWI1Yi1iZWU5LTRiZWYtODI0ZC05YTVjY2MzNzM1NzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMTA4LFxuICAgICAgMTg1LFxuICAgICAgMTA5LFxuICAgICAgMTk2LFxuICAgICAgMjA0LFxuICAgICAgMTcyLFxuICAgICAgMjAyLFxuICAgICAgMzgsXG4gICAgICAxOTIsXG4gICAgICAxMTUsXG4gICAgICA2MyxcbiAgICAgIDE2OSxcbiAgICAgIDk0LFxuICAgICAgNzksXG4gICAgICA1NCxcbiAgICAgIDE4MixcbiAgICAgIDg5LFxuICAgICAgMjAsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMjA0LFxuICAgICAgMTAzLFxuICAgICAgMTU1LFxuICAgICAgMjMsXG4gICAgICAyMzYsXG4gICAgICA1NSxcbiAgICAgIDc3LFxuICAgICAgODUsXG4gICAgICAxNjIsXG4gICAgICAyNixcbiAgICAgIDg3LFxuICAgICAgMTksXG4gICAgICA3NyxcbiAgICAgIDg0LFxuICAgICAgMjM2LFxuICAgICAgNTksXG4gICAgICAyMjQsXG4gICAgICAyMzYsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDZQOEY5V0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk0MDE3Mjk6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMzNDI4MDY2MDE3NDEzOjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puRS9RWVFuUHFTdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicXFQN1VFeDQ0U3ZIRXZjYmI4d2JwbmpvUTRZMGx0UlZscEt5c3ZnLzluST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFRUxycTNkNG1nTlhhUk1kaHpzUkJJdVZWSG5SQzFiSWRDTDNXYVV5SHJreFFzejhyOHRaL055OUovWnB6K1ppM1dPMGdjQjZ0emtvZ0pZZTRjRG9Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqQ2RtSnBESXVyOEtiSTNoMjJMKzE1dkt6RU5WK1FuMWdMYzFPbTFCcmF2RCtJOGI5TnlFbExUWWxYMWxoUTh4QTdpdFQ0ai8wVkgxNW15UHdHYjhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NDAxNzI5OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NzUxOTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFERXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURFcC5qc29uIjogIntcImtleURhdGFcIjpcIk12SUU2Q3IyWWxsdDVxdmdXSTV0bUFwbmR2cU1DRWQ2NnlHM05EU2h6Wk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2Mzk2NDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Nathaniel",

  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
