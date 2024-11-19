const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_09_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZXZFTnRwRjdpTVQxZGdQTVBUM0JMZzcvck5kdWRNSlcvdlBvNSt2TWhWZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3ODA2NDY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUUxNDg3RjkwNjk5MTU2QjA2M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIwMjg5NDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3ODA2NDY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTExNEY4NkU3NDlBQjk1OEQ0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIwMjg5NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZzAtNllOX2pSb3VYT2lVYzhJRER6Z1wiLFxuICBcInBob25lSWRcIjogXCIzNzJkZDViMi0xNDVjLTQyYzMtYjBiZC0zMzIwZTBkNjZhODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMzYsXG4gICAgICA5MSxcbiAgICAgIDMsXG4gICAgICAxNzYsXG4gICAgICAxNzAsXG4gICAgICAyMjYsXG4gICAgICAyNixcbiAgICAgIDI2LFxuICAgICAgMTkxLFxuICAgICAgMzIsXG4gICAgICAxNTAsXG4gICAgICAzLFxuICAgICAgMjQ2LFxuICAgICAgMTg5LFxuICAgICAgMTk4LFxuICAgICAgODksXG4gICAgICAxNTIsXG4gICAgICAyMzYsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAxNjAsXG4gICAgICA3MCxcbiAgICAgIDExNSxcbiAgICAgIDI0OCxcbiAgICAgIDcxLFxuICAgICAgMzMsXG4gICAgICAyNDgsXG4gICAgICAyOCxcbiAgICAgIDU1LFxuICAgICAgMTA2LFxuICAgICAgMyxcbiAgICAgIDE1NCxcbiAgICAgIDQ1LFxuICAgICAgNDEsXG4gICAgICAxNDEsXG4gICAgICAyOSxcbiAgICAgIDEzMSxcbiAgICAgIDIxLFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTllQOFA2TDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzc4MDY0NjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk15a2VcIixcbiAgICBcImxpZFwiOiBcIjY2MjQ2MTI5MjU4Njg3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEQ0bExnQkVKRFU4cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVclJ0bEFrQ0EvTHJIU1hFTzM0WmFSSVFsQXFGbGg0YlQ1ZGdQRExKbmlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkszSldjWHVlUjJJTG5obXJiblBEMlhoNEx5U1k3NFNWbnovZThPZ09JM0ZINTVkQ0lmNlJwRTZaNTNKbVhDdU84Z2Y0dXNXcWNMSzcyT1RtMDhnUGdRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJpQU8yQ0ZRbXJhWVhZUjZQcUhyWlAvaVcvRDQxckpaUFEySzNmZDZnY25NMkJxTkVEaFRvRE1TWFlBaStYdFgwZUtwWFJ1VXZFZDRreE8xcUl5bkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzc4MDY0NjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjAyODk0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJWV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlZXLmpzb24iOiAie1wia2V5RGF0YVwiOlwialk2U1grc1MzT0Z2dHp1OG5yNS9MdEQzZ1ZBN0RGQ1pGWnB0NWoyMTlrWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODYyMTkwNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjAyODk0OTM3MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
